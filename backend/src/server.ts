import app from './app';
import config from './config/config';
import { createServer } from 'node:http';
import io from './config/socket.config';
import { prisma } from './config/db.config';
import './config/passport.config';

const httpServer = createServer(app);
io.attach(httpServer);

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

httpServer.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);

  prisma.$connect().then(() => {
    console.log('Connected to the database');
  });
});
