import { Schema, model, Document, Types } from "mongoose";

interface ITask extends Document {
  user_id: Types.ObjectId,
  title: string;
  description: string;
  status: boolean;
  createdAt?: Date;
}

const taskSchema = new Schema<ITask>(
  {
    user_id: {type: Schema.Types.ObjectId, ref: "User", required: true},
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
