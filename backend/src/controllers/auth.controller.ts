import { Request, Response, NextFunction } from 'express';

export const me = async (req: Request, res: Response) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).json({ message: 'Logged out' });
  });
};
