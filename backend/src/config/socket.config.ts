import { Server } from 'socket.io';
import { AuthenticatedRequest } from '../types/authenticatedRequest.type';
import { AuthenticatedSocket } from '../types/authenticatedSocket.type';
import { sessionMiddleware } from '../middlewares/session.middleware';
import passport from 'passport';
import { Request, Response, NextFunction } from 'express';
import { deleteUser, setUser } from '../lib/utils';

const io = new Server({
  cors: {
    origin: '*',
    credentials: true,
  },
});

io.use((socket, next) => {
  sessionMiddleware(
    socket.request as Request,
    {} as Response,
    next as NextFunction,
  );
});

io.use((socket, next) => {
  passport.initialize()(
    socket.request as Request,
    {} as Response,
    next as NextFunction,
  );
});

io.use((socket, next) => {
  passport.session()(
    socket.request as Request,
    {} as Response,
    next as NextFunction,
  );
});

io.use((socket, next) => {
  const req = socket.request as AuthenticatedRequest;
  if (req.isAuthenticated()) {
    (socket as AuthenticatedSocket).user = req.user;
    return next();
  }
  next(new Error('Unauthorized'));
});

io.on('connection', (socket: AuthenticatedSocket) => {
  console.log('a user connected:', socket.id);

  setUser(
    socket.id,
    socket.user?.first_name + ' ' + socket.user?.last_name,
    socket.user?.id as string,
  );

  socket.on('join-match', ({ userId, mode }) => {
    console.log({ userId, mode });
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected:', socket.id);

    deleteUser(socket.id);
  });
});

export default io;
