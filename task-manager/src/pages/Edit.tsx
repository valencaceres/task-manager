import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { EditTaskForm } from "../components/ui/TaskForm";
import Loading from "../components/ui/Loading/Loading";
import Button from "../components/ui/Button";

import { useTask } from "../store/hooks";

const Edit = () => {
  const { getByIdTask, task, isLoading } = useTask();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getByIdTask(id);
    }
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div>
        <Link to={"/"}>
          <Button type="back"></Button>
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
        Editar tarea
      </h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
          <EditTaskForm task={task} />
        </div>
      )}
    </div>
  );
};

export default Edit;
