import app from './app';
import config from './config/config';
import { createServer } from 'node:http';
import io from './config/socket.config';

const httpServer = createServer(app);
io.attach(httpServer);

httpServer.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
