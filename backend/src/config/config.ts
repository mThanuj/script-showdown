import { config as dotenv } from 'dotenv';

dotenv({
  path: process.env.NODE_ENV === 'development' ? '.env.dev' : '.env.prod',
});

interface Config {
  port: number;
  host: string;
  nodeEnv: string;
  googleClientID: string;
  googleClientSecret: string;
  sessionSecret: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  host: process.env.HOST || 'localhost',
  nodeEnv: process.env.NODE_ENV || 'development',
  googleClientID: process.env.GOOGLE_CLIENT_ID as string,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  sessionSecret: process.env.SESSION_SECRET as string,
};

export default config;
