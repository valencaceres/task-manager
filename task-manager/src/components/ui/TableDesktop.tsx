import React from 'react'
import { Link } from 'react-router-dom';

import { CheckCircle, XCircle } from "lucide-react";
import Button from './Button';

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

const TableDesktop = ({ tasks = [] }: TaskTableProps) => {

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
    <div className="hidden md:block overflow-x-auto">
    <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
      <thead className="bg-gray-700">
        <tr>
          <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Estado
          </th>
          <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Tarea
          </th>
          <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Descripción
          </th>
          <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Fecha
          </th>
          <th className="py-3 px-4"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-700">
        {tasks?.length > 0 ? (
          tasks?.map((task, idx) => (
            <tr
              key={idx}
              className="hover:bg-gray-700 transition-colors duration-200"
            >
              <td className="py-4 px-4 whitespace-nowrap">
                <div className="flex items-center">
                  {getStatusIcon(task.status)}
                  <span
                    className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(
                      task.status
                    )}`}
                  >
                    {task.status ? "Completada" : "Pendiente"}
                  </span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="text-sm font-medium text-gray-200">
                  {task.title}
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="text-sm text-gray-400">
                  {task.description}
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="text-sm text-gray-400">
                  {task?.createdAt
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("-")}
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex gap-5 justify-center">
                  {!task.status ? (
                    <Button
                      key={task._id}
                      type={"check"}
                      status={task.status}
                      onClick={() =>
                        handleClickCheck(task._id, !task.status)
                      }
                    />
                  ) : null}
                  <Link to={`/edit/${task._id}`}><Button type={"edit"} /></Link>
                  <Button
                    type={"delete"}
                    onClick={() => handleDeleteTask(task._id)}
                  />
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} className="text-center py-4 text-gray-400">
              No hay tareas. ¡Añade una para comenzar!
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  )
}

export default TableDesktop