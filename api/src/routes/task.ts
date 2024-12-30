import { Router } from "express";
import auth from "../middlewares/auth";
import authenticateJWT from "../middlewares/authenticateJWT";

import * as Task from '../controllers/task'
import { createTaskValidator, updateTaskValidator } from "../schemas/task";

const TaskRouter = Router()

TaskRouter.post('/create', auth, createTaskValidator, Task.create)
TaskRouter.get('/getAll', auth, Task.getAll)
TaskRouter.get('/getById/:id', auth, Task.getById)
TaskRouter.put('/update', auth, updateTaskValidator, Task.update)
TaskRouter.delete('/deleteById/:id', auth, Task.deleteById)

export default TaskRouter