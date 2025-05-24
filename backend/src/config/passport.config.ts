import config from './config';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { prisma } from './db.config';
import User from '../types/user.type';

passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleClientID,
      clientSecret: config.googleClientSecret,
      callbackURL: '/api/auth/login/google/redirect',
      scope: ['profile', 'email'],
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value ?? '';
        const first_name = profile.name?.givenName ?? '';
        const last_name = profile.name?.familyName ?? '';
        const avatar_url = profile.photos?.[0]?.value ?? '';

        const dbUser = await prisma.user.upsert({
          where: { email },
          update: {
            first_name,
            last_name,
            avatar_url,
          },
          create: {
            email,
            first_name,
            last_name,
            avatar_url,
          },
        });

        done(null, dbUser);
      } catch (err) {
        done(err as Error);
      }
    },
  ),
);

passport.serializeUser((user: unknown, done) => {
  const u = user as User;
  done(null, u.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    done(null, user ?? false);
  } catch (err) {
    done(err as Error);
  }
});
