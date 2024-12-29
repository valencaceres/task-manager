import { create } from "zustand";

import apiInstance from "../utils/apiInstance";

import { ITask } from "../interfaces/task";

interface TaskState {
    task: ITask,
    taskList: ITask[],
    isLoading: boolean,
    isError: boolean,
    getAllTask: (filter: string) => void,
    getByIdTask: (id: string) => void,
    createTask: (title: string, description: string) => void,
    updateTask: (id: string, status: boolean) => void
    updateTaskInfo: (id: string, title: string, description: string) => void
    deleteTask: (id: string) => void,
    resetTask: () => void
}

const initialDataTask: ITask = {
    _id:'',
    title: '',
    description: '',
    status: false,
    createdAt: ''
}

export const taskTask = create<TaskState>((set) => ({
  task: initialDataTask,
  taskList: [],
  isLoading: true,
  isError: false,

  getAllTask: async (filter: string) => {
    try {
      set((state) => ({ ...state, isLoading: true }));
  
      const url =
        filter === "completed"
          ? `/task/getAll?status=true`
          : filter === "pending"
          ? `/task/getAll?status=false`
          : `/task/getAll`;
  
      const { data } = await apiInstance.get(url);
  
      set((state) => ({
        ...state,
        taskList: data.data,
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

  getByIdTask: async (id: string) => {
    try {
      set((state) => ({ ...state, isLoading: true }));
      console.log(id)
      const { data } = await apiInstance.get(`/task/getById/${id}`);
      console.log(data)
      set((state) => ({
        ...state,
        task: data.data,
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

  createTask: async (title: string, description: string) => {
    try {
      set((state) => ({ ...state, isLoading: true }));
  
      const { data } = await apiInstance.post('/task/create', { title, description });
  
      set((state) => ({
        ...state,
        taskList: [...state.taskList, data.data],
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

  updateTask: async (id: string, status: boolean) => {
    try {
      set((state) => ({ ...state, isLoading: true }));
  
      const { data } = await apiInstance.put('/task/update', { id, status });
  
      set((state) => ({
        ...state,
        taskList: state.taskList.map((task) =>
          task._id === id ? { ...task, status } : task
        ),
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

  updateTaskInfo: async (id: string, title: string, description: string) => {
    try {
      set((state) => ({ ...state, isLoading: true }));
  
      const { data } = await apiInstance.put('/task/update', { id, title, description });
  
      set((state) => ({
        ...state,
        taskList: state.taskList.map((task) =>
          task._id === id ? { ...task, ...data.data } : task
        ),
        isLoading: false,
        isError: false,
      }));
    } catch (e) {
      console.error(e);
      set((state) => ({
        ...state,
        isLoading: false,
        isError: true,
      }));
    }
  },
  

  deleteTask: async (id: string) => {  
    try {
      set((state) => ({ ...state, isLoading: true }));  
  
      const { data } = await apiInstance.delete(`/task/deleteById/${id}`);

      set((state) => ({
        ...state,
        taskList: state.taskList.filter((task) => task._id !== id),
        isLoading: false,
        isError: false,
      }));
    } catch (e) {
      console.error(e);
      set((state) => ({
        ...state,
        isLoading: false,
        isError: true,
      }));
    }
  },
  resetTask: () => {
    set((state) => ({
      ...state,
      taskList: [],
    }));
  },

}));
