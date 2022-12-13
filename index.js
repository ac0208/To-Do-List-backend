const express=require("express");
const {createTask, displayTask, updateTask, deleteTask, toggleTask}=require("./src/control");
const cors=require("cors");
const server = express();
const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/To-Do-List");
mongoose.connection.on("connected",()=>{
    console.log("You are connected");
});
mongoose.connection.on("error",()=>{
    console.log("Try once again");
})

server.use(cors());
server.use(express.json());

server.post("/createtask", createTask);
server.get("/displaytask",displayTask);
server.put("/updatetask",updateTask);
server.delete("/deletetask",deleteTask);
server.patch("/updatedtask",toggleTask);

server.listen(4001,()=>{
    console.log("Server has started");
});