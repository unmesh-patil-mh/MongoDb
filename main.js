// STEPS FOR TERMINAL
// npm init -y
// npm i mongoose
// change package.json type module
// npm i express@4

import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let a = await mongoose.connect("mongodb://localhost:27017/todo");
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    const todo = new Todo({title:"Hey Wlcome first Document",Desc:"Its first Description",idDone: false,days: 7});
    todo.save();
    res.send("Hello welcome to our moongose page");
})

app.listen(port,() => {
    console.log(`App Running on Port: ${port}`);
})