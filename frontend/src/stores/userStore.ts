import { create } from "zustand";
import axiosInstance from "../config/axios.config";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  fetchUser: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  fetchUser: async () => {
    try {
      const res = await axiosInstance.get("/auth/me", {
        withCredentials: true,
      });

      if (res.status !== 200) {
        throw new Error("Failed to fetch user");
      }

      const { id, email, first_name, last_name } = await res.data.user;
      set({ user: { id, email, firstName: first_name, lastName: last_name } });
    } catch (err) {
      console.error("Error fetching user:", err);
      set({ user: null });
    }
  },
}));
