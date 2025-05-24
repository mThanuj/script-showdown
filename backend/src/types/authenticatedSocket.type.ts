import { Socket } from 'socket.io';
import User from './user.type';

export interface AuthenticatedSocket extends Socket {
  user?: User;
}
