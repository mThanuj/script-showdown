import redis from '../config/redis.config';

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
