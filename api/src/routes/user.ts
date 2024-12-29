import { Router } from "express";
import auth from "../middlewares/auth";
import { createUserValidator } from "../schemas/user";

import * as User from '../controllers/user'

const UserRouter = Router()

UserRouter.post('/create', auth, createUserValidator, User.create)
UserRouter.post('/login', auth, createUserValidator, User.login)

export default UserRouter