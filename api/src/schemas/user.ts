import { body } from "express-validator";

export const createUserValidator = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .notEmpty()
    .withMessage("Name is required"),
  body("email")
    .isString()
    .withMessage("email must be a string")
    .notEmpty()
    .withMessage("email is required"),
    body("password")
    .notEmpty()
    .withMessage("password is required"),
];