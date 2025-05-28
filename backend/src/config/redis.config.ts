import Redis from 'ioredis';
import config from './config';

const redis = new Redis({
  host: config.redisHost,
  port: config.redisPort,
});

redis.on('connect', () => {
  console.log('Connected to Redis');
});

export default redis;
