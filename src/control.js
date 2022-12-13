const {request, response}=require("express");
const {Task}=require("./models");

const createTask=async(request,response)=>{
    console.log(request.body);
    await Task.create(request.body);
    return response.json({status:"Task Created"});
};

const displayTask=async(request,response)=>{
    var _id=request.query.id;
    if(_id){
        var allTasks=await Task.findById(_id);
    }else{
        var allTasks=await Task.find();
    }
    return response.json(allTasks);
}

const updateTask=async(request,response)=>{
    var _id=request.query.id;
    var task=request.body;
    console.log(_id,task);
    await Task.findByIdAndUpdate(_id,task);
    return response.json({status:"Task Updated"});
} ;

const deleteTask=async(request,response)=>{
    var _id=request.query.id;
    var task=request.body;
    console.log(_id,task);
    await Task.findByIdAndDelete(_id,task);
    return response.json({status:"Task Deleted"});
};

const toggleTask=async(request,response)=>{
    var _id=request.query.id;
    var task=request.body;
    console.log(_id,task);
    // await Task.findByIdAndUpdate(_id,task);
    var newTask=await Task.findById(_id);
    newTask.taskCompleted=task.taskCompleted;
    newTask=await newTask.save();
    return response.json({status:"Updated"});
};
module.exports={createTask,displayTask,updateTask,deleteTask,toggleTask};