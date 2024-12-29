import sendResponse from "../utils/sendResponse";
import { Request, Response, NextFunction } from "express";
import boom from "@hapi/boom";
import User from "../models/user";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(500)
        .json({ success: false, data: null, error: errors });
    }

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return next(boom.badData("Name, Email and Password must exist"));
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const response = await newUser.save();

    sendResponse(req, res, response);
  } catch (e: any) {
    return next(boom.badImplementation(e.response?.data || e.message));
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const token = generateToken(user);

      sendResponse(req, res, token)
    } catch (e: any) {
        return next(boom.badImplementation(e.response?.data || e.message));
    }
  };

export { create, login };


const generateToken = (user: any) => {
    const payload = {
      _id: user._id,
      email: user.email,
      name: user.name,
    };
    return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_EXPIRATION });
  };