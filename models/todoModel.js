import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const todoModel = mongoose.models.Todos || mongoose.model('Todos', todoSchema)

export default todoModel