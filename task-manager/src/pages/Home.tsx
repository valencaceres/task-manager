"use client";

import { useState, useEffect } from "react";

/* Imports dedicados a react */

import TaskTable from "../components/ui/TaskTable";
import { AddTaskForm } from "../components/ui/TaskForm";
import InputRadio from "../components/ui/InputRadio";

/* Imports dedicados a styles */

import { useTask, useUser } from "../store/hooks";

/* Imports dedicados a variables de estado global o zustand */

export default function Home() {
  const [filter, setFilter] = useState("all");

  const { getAllTask, taskList, task } = useTask();
  const { user } = useUser();

  useEffect(() => {
    getAllTask(filter);
  }, [getAllTask, filter, task, user]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
        Añadir tarea
      </h1>
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
        <AddTaskForm />
        <InputRadio filter={filter} setFilter={setFilter} />
        <TaskTable tasks={taskList} />
      </div>
    </div>
  );
}
