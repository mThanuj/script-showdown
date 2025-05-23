import { Server } from 'socket.io';

const io = new Server({
  cors: {
    origin: '*',
    credentials: true,
  },
});

io.on('connection', (socket) => {
  console.log('a user connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('a user disconnected:', socket.id);
  });
});

export default io;
