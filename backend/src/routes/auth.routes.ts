import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/me', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
});

router.get('/login', (_req, res) => {
  res.send('you have reached login');
});

router.get(
  '/login/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

router.get(
  '/login/google/redirect',
  passport.authenticate('google', {
    successReturnToOrRedirect: 'http://localhost:5173/dashboard',
    failureRedirect: 'http://localhost:5173/login',
  }),
);

router.post('/logout', (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).json({ message: 'Logged out' });
  });
});

export default router;
