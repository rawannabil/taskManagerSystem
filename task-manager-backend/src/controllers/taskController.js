const taskService = require('../services/taskService');

exports.getAllTasks = async(req,res)=> {
try
{
   const tasks= await taskService.getAllTasks(req.query);
   res.status(201).json({
    "Status":"Success",
    Response:tasks,
    Errors:null       
    });}catch(err)
{
    res.status(400).json({message: err.message });
}
};

exports.createTask = async (req,res) =>{
    try {
        const newTask= await taskService.createNewTask(req.body);
        res.status(201).json({
            "Status":"Success",
            Response:newTask,
            Errors:null       
            });

    }catch(err)
    {
        res.status(400).json({ message: err.message });
    }
}

exports.updateTask = async (req,res) =>{
    const { id } = req.params;
    try {
        const updatedTask= await taskService.updateTask(id,req.body);
        res.status(201).json({
            "Status":"Success",
            Response:updatedTask,
            Errors:null       
            });

    }catch(err)
    {
        res.status(400).json({ message: err.message });
    }
}

exports.deleteTask = async (req,res) =>{
    const { id } = req.params;
    try {
        await taskService.DeleteTask(id);
        res.status(201).json({
            "Status":"Success",
            Response:"Task Deleted Successfully",
            Errors:null       
            });    }
            catch(err)
    {
        res.status(400).json({ message: err.message });
    }
}