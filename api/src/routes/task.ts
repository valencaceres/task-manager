import { Router } from "express";
import auth from "../middlewares/auth";
import authenticateJWT from "../middlewares/authenticateJWT";

import * as Task from '../controllers/task'
import { createTaskValidator, updateTaskValidator } from "../schemas/task";

const TaskRouter = Router()

TaskRouter.post('/create', auth, createTaskValidator, authenticateJWT, Task.create)
TaskRouter.get('/getAll', auth, authenticateJWT, Task.getAll)
TaskRouter.get('/getById/:id', auth, authenticateJWT, Task.getById)
TaskRouter.put('/update', auth, updateTaskValidator, authenticateJWT, Task.update)
TaskRouter.delete('/deleteById/:id', auth, authenticateJWT, Task.deleteById)

export default TaskRouter