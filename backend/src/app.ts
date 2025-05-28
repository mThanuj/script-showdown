import express, { Request, Response } from 'express';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { sessionMiddleware } from './middlewares/session.middleware';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'Healthy' });
});

import authRoutes from './routes/auth.routes';
import judge0Routes from './routes/judge0.routes';

app.use('/api/auth', authRoutes);
app.use('/api/judge0', judge0Routes);

export default app;
