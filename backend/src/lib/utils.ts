import redis from '../config/redis.config';

function createMatchId(
  player1SocketId: string,
  player2SocketId: string,
  mode: number,
) {
  return `match:${player1SocketId}-${player2SocketId}-${mode}`;
}

export function base64Encode(str: string): string {
  return Buffer.from(str).toString('base64');
}

export function base64Decode(str: string): string {
  return Buffer.from(str, 'base64').toString('utf-8');
}

export async function setUser(id: string, name: string, userId: string) {
  const userData = { name, userId };
  await redis.set(`online-users:${id}`, JSON.stringify(userData));
}

export async function getUser(id: string) {
  const user = await redis.get(`online-users:${id}`);
  return user ? JSON.parse(user) : null;
}

export async function deleteUser(id: string) {
  await redis.del(`online-users:${id}`);
}

export async function createMatch(id: string, mode: number) {
  const queueKey = `match-queue:${mode}`;

  await redis.lrem(queueKey, 0, id);

  const opponentId = await redis.lpop(queueKey);

  if (opponentId && opponentId !== id) {
    const matchId = createMatchId(id, opponentId, mode);
    const match = {
      player1: id,
      player2: opponentId,
      winner: null,
      status: 'pending',
    };
    await redis.set(matchId, JSON.stringify(match));
    return matchId;
  }

  await redis.rpush(queueKey, id);
  return null;
}
