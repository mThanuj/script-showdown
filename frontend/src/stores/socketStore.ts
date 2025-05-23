import { io, Socket } from "socket.io-client";
import { create } from "zustand";

interface SocketStore {
  socket: Socket | null;
  connected: boolean;
  lastMessage: unknown;
  connect: () => void;
  disconnect: () => void;
  emit: (event: string, payload?: unknown) => void;
}

export const useSocketStore = create<SocketStore>((set, get) => {
  let socket: Socket | null = null;

  return {
    socket: null,
    connected: false,
    lastMessage: null,

    connect: () => {
      if (socket) return;

      socket = io(import.meta.env.VITE_API_URL || "http://localhost:3000", {
        transports: ["websocket"],
        autoConnect: false,
      });

      socket.on("connect", () => {
        set({ connected: true, socket });
      });

      socket.on("disconnect", () => {
        set({ connected: false });
      });

      socket.connect();
      set({ socket });
    },

    disconnect: () => {
      const currentSocket = get().socket;
      if (currentSocket) {
        currentSocket.disconnect();
        socket = null;
        set({ socket: null, connected: false });
      }
    },

    emit: (event, payload) => {
      const currentSocket = get().socket;
      if (currentSocket?.connected) {
        currentSocket.emit(event, payload);
      }
    },
  };
});
