import express from "express"
import mongoose from "mongoose"
import { todo } from "./models/todo.js"


const connect = await mongoose.connect("mongodb://localhost:27017/todo")

const app= express()
const port = 3000

app.get('/',(req,res) => {
  const Todo =new todo({title:"hello",date:1})
  Todo.save()
  res.send("hello")

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
