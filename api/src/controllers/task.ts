import sendResponse from "../utils/sendResponse";
import { Request, Response, NextFunction } from "express";
import boom from "@hapi/boom";
import Task from "../models/task";
import { validationResult } from "express-validator";

const create = async (req: any, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(500)
        .json({ success: false, data: null, error: errors });
    }

    const { title, description } = req.body;

    if (!title || !description) {
      return next(boom.badData);
    }

    const user_id = req.user?._id;

    const newTask = new Task({
      user_id,
      title,
      description,
      status: false,
      createdAt: new Date().toISOString(),
    });

    const response = await newTask.save();

    sendResponse(req, res, response);
  } catch (e: any) {
    console.error((e as Error).message);
    return next(boom.badImplementation(e.response?.data || e.message));
  }
};

const getAll = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { status } = req.query;

    const user_id = req.user?._id;
    console.log(user_id)
    if (!user_id) {
      return next(boom.unauthorized("User not authenticated"));
    }

    // Filtro básico por user_id
    const filter: any = { user_id };

    // Si status es especificado, agregarlo al filtro
    if (status !== undefined) {
      // Convertir el valor de status en un booleano
      filter.status = status === "true" ? true : status === "false" ? false : undefined;
    }

    const response = await Task.find(filter).exec();

    sendResponse(req, res, response);
  } catch (e: any) {
    console.error((e as Error).message);
    return next(boom.badImplementation(e.response?.data || e.message));
  }
};



const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const response = await Task.findById(id);

    if (!response) {
      return next(boom.notFound("Task not found"));
    }

    sendResponse(req, res, response);
  } catch (e: any) {
    console.error((e as Error).message);
    return next(boom.badImplementation(e.response?.data || e.message));
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(500)
        .json({ success: false, data: null, error: errors });
    }

    const { id, title, description, status } = req.body;

    const task = await Task.findById(id);

    if (!task) {
      return next(boom.notFound("Task not found"));
    }
    task.title = title ?? task.title;
    task.description = description ?? task.description;
    task.status = status ?? task.status;

    const response = await task.save();

    sendResponse(req, res, response);
  } catch (e: any) {
    console.error((e as Error).message);
    return next(boom.badImplementation(e.response?.data || e.message));
  }
};

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const response = await Task.findByIdAndDelete(id);

    if (!response) {
      return next(boom.notFound("Can't delete task"));  // Si la tarea no se encuentra, responde correctamente
    }

    sendResponse(req, res, "Task Deleted Successfully");  // Confirmación de éxito
  } catch (e: any) {
    console.error((e as Error).message);
    return next(boom.badImplementation(e.response?.data || e.message));  // Manejo de errores adecuado
  }
};

export { create, getAll, getById, update, deleteById };
