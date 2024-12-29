import { create } from "zustand";

import apiInstance from "../utils/apiInstance";

import { IUser } from "../interfaces/user";

interface UserState {
  user: IUser | null;
  userList: IUser[];
  isLoading: boolean;
  isError: boolean;
  createUser: (name: string, email: string, password: string) => void;
  loginUser: (email: string, password: string) => void;
  resetUser: () => void
  setUser: (user: IUser | null) => void;
}

const initialDataUser: IUser = {
  data: "",
};

export const userUser = create<UserState>((set) => ({
  user: initialDataUser,
  userList: [],
  setUser: (user) => set({ user }),
  isLoading: true,
  isError: false,

  createUser: async (name: string, email: string, password: string) => {
    try {
      set((state) => ({ ...state, isLoading: true }));

      const { data } = await apiInstance.post("/user/create", {
        name,
        email,
        password,
      });

      set((state) => ({
        ...state,
        user: data.data,
        isLoading: false,
        isError: false,
      }));
    } catch (e) {
      set((state) => ({
        ...state,
        isLoading: false,
        isError: true,
      }));
    }
  },

  loginUser: async (email: string, password: string) => {
    try {
      set((state) => ({ ...state, isLoading: true }));

      const { data } = await apiInstance.post("/user/login", {
        email,
        password,
      });

      if (data.data) {
        localStorage.setItem("token", data.data);
      }

      set((state) => ({
        ...state,
        user: data,
        isLoading: false,
        isError: false,
      }));
    } catch (e) {
      set((state) => ({
        ...state,
        isLoading: false,
        isError: true,
      }));
    }
  },
  resetUser: () => {
    set((state) => ({
      ...state,
      user: null,
    }));
  },
}));
