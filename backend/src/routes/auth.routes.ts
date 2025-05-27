import express from 'express';
import passport from 'passport';
import { logout, me } from '../controllers/auth.controller';

const router = express.Router();

router.get('/me', me);

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

router.post('/logout', logout);

export default router;
