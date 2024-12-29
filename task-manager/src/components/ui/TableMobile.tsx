import React from "react";
import { Link } from "react-router-dom";

import { CheckCircle, XCircle } from "lucide-react";
import Button from "./Button";

import { useTask } from "../../store/hooks";

interface Task {
  _id: string;
  title: string;
  description: string;
  status: boolean;
  createdAt: string;
}

interface TaskTableProps {
  tasks: Task[] | undefined;
}

const TableMobile = ({ tasks = [] }: TaskTableProps) => {
  const { deleteTask, updateTask } = useTask();

  const getStatusIcon = (status: boolean) => {
    return status ? (
      <CheckCircle className="text-green-500" />
    ) : (
      <XCircle className="text-red-500" />
    );
  };

  const handleClickCheck = (id: string, status: boolean) => {
    updateTask(id, status);
  };

  const handleDeleteTask = (id: string) => {
    deleteTask(id);
  };

  const getStatusBadgeColor = (status: boolean) => {
    return status ? "bg-green-500 text-white" : "bg-red-500 text-white";
  };

  return (
    <div className="md:hidden space-y-4">
      {tasks?.length > 0 ? (
        tasks?.map((task, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {getStatusIcon(task.status)}
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(
                    task.status
                  )}`}
                >
                  {task.status ? "Completada" : "Pendiente"}
                </span>
              </div>
              <div className="text-sm text-gray-400">
                {task?.createdAt.slice(0, 10).split("-").reverse().join("-")}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-200">
                {task.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{task.description}</p>
            </div>

            <div className="flex justify-end gap-3">
              {!task.status ? (
                <Button
                  key={task._id}
                  type={"check"}
                  status={task.status}
                  onClick={() => handleClickCheck(task._id, !task.status)}
                />
              ) : null}
              <Link to={`/edit/${task._id}`}>
                <Button type={"edit"} />
              </Link>
              <Button
                type="delete"
                onClick={() => handleDeleteTask(task._id)}
              />
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-4 text-gray-400 bg-gray-800 rounded-lg">
          No hay tareas. ¡Añade una para comenzar!
        </div>
      )}
    </div>
  );
};

export default TableMobile;
