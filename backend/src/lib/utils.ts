import redis from '../config/redis.config';

export function base64Encode(str: string): string {
  return Buffer.from(str).toString('base64');
}

export function base64Decode(str: string): string {
  return Buffer.from(str, 'base64').toString('utf-8');
}

export async function setUser(id: string, name: string, userId: string) {
  const userData = { name, userId };
  await redis.set(`id:${id}`, JSON.stringify(userData));
}
