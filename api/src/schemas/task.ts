import { body } from "express-validator";

export const createTaskValidator = [
  body("title")
    .isString()
    .withMessage("Title must be a string")
    .notEmpty()
    .withMessage("Title is required"),
  body("description")
    .isString()
    .withMessage("Description must be a string")
    .notEmpty()
    .withMessage("Description is required"),
  body("status").optional().isBoolean().withMessage("Status must be a boolean"),
];

export const updateTaskValidator = [
  body("id").isString().notEmpty(),
  body("title")
    .optional()
    .isString()
    .withMessage("Title must be a string")
    .withMessage("Title is required"),
  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string")
    .withMessage("Description is required"),
  body("status").optional().isBoolean().withMessage("Status must be a boolean"),
];
