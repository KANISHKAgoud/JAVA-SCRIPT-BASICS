import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: String,
    date: Number
})

export const todo = mongoose.model('todo',todoSchema);