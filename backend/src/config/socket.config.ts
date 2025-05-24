import { Server } from 'socket.io';
import { AuthenticatedRequest } from '../types/authenticatedRequest.type';
import { AuthenticatedSocket } from '../types/authenticatedSocket.type';
import { sessionMiddleware } from '../middlewares/session.middleware';
import passport from 'passport';
import { Request, Response, NextFunction } from 'express';

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

io.on('connection', (socket) => {
  console.log('a user connected:', {
    socketId: socket.id,
    userId: (socket as AuthenticatedSocket).user?.id,
    username:
      (socket as AuthenticatedSocket).user?.first_name +
      ' ' +
      (socket as AuthenticatedSocket).user?.last_name,
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected:', socket.id);
  });
});

export default io;
