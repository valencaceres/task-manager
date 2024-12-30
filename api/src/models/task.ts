import { Schema, model, Document, Types } from "mongoose";

interface ITask extends Document {
  title: string;
  description: string;
  status: boolean;
  createdAt?: Date;
}

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true, 
  }
);

const Task = model<ITask>("Task", taskSchema);

export default Task;
