import type { User as AppUser } from './types/user.type';

declare global {
  namespace Express {
    interface Request {
      user?: AppUser;
    }
  }
}
