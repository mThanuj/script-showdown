import { IncomingMessage } from 'http';
import User from './user.type';

export interface AuthenticatedRequest extends IncomingMessage {
  isAuthenticated: () => boolean;
  user: User;
}
