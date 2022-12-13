const mongoose=require("mongoose");
const taskSchema=new mongoose.Schema({
    title:String,
    discription:String,
    taskCompleted:{
        type:Boolean,
        default:false
    },
});
const Task=mongoose.model("Task",taskSchema);
module.exports={Task};