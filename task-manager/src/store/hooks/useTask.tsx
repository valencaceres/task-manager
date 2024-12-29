import { taskTask } from "../taskStore";

const useTask = () => {
    const task = taskTask((state) => state.task);
    const taskList = taskTask((state) => state.taskList);
    const isLoading = taskTask((state) => state.isLoading);
    const isError = taskTask((state) => state.isError);
    const getAllTask = taskTask((state) => state.getAllTask);
    const getByIdTask = taskTask((state) => state.getByIdTask);
    const createTask = taskTask((state) => state.createTask);
    const updateTask = taskTask((state) => state.updateTask);
    const updateTaskInfo = taskTask((state) => state.updateTaskInfo);
    const deleteTask = taskTask((state) => state.deleteTask);
    const resetTask = taskTask((state) => state.resetTask);
  
    return {
      task,
      taskList,
      isLoading,
      isError,
      getAllTask,
      getByIdTask,
      createTask,
      updateTask,
      updateTaskInfo,
      deleteTask,
      resetTask
    };
  };
  
  export default useTask;
  
