import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import session from 'express-session';
import config from './config/config';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRoutes);

app.use(errorHandler);

export default app;
