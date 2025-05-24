import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes';
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

app.use('/api/auth', authRoutes);

app.use(errorHandler);

export default app;
