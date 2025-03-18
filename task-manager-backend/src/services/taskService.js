const Task = require('../models/Task');
class taskService{

    async getAllTasks(filters,page=1,limit=10)
    {
        try{
            const{completed,description,title}=filters
            console.log(completed);
            console.log(description);
            console.log(title);
            const filterConditions = {};
            if (description && description.trim() !== '') {
                const regexDescription = new RegExp(description, 'i');
                console.log(regexDescription);
                filterConditions.description = { $regex: regexDescription };
            }
            if (title && title.trim() !== '') {
                const regexTitle = new RegExp(title, 'i');
                filterConditions.title = { $regex: regexTitle };
            }
            if (completed !== undefined && completed !== '') {
                if (completed === 'true' || completed === true) {
                    filterConditions.completed = true;
                } else if (completed === 'false' || completed === false) {
                    filterConditions.completed = false;
                }
            }const totalTasks = await Task.countDocuments(filterConditions);
            const startIndex= (page-1)*limit;
            const Tasks = await Task.find(filterConditions).skip(startIndex).limit(limit).sort({createdAt:-1}).lean();
            const response = {
                currentPage : parseInt(page),
                itemsPerPage :parseInt(limit),
                totalItems:totalTasks,
                totalPages :Math.ceil(totalTasks/limit),
                tasks : Tasks
            }   ;    
            return response;
        }
        catch (err)
        {
            throw new error ('Error in fetching : '+err.message);
        }
    }
    async createNewTask(taskData)
    {
        try{
        return await Task.create(taskData);
        }
        catch (err)
        {
            throw new error ('Error in creating : '+err.message);
        }
    }
    async updateTask(id,updateData)
    {
        try{
        return await Task.findByIdAndUpdate(id,updateData,{new :true});
        }catch (err)
        {
            throw new error ('Error in updating : '+err.message);
        }
    }
    async DeleteTask(id)
    {
        try{
        return await Task.findByIdAndDelete(id);
        }
        catch (err)
        {
            throw new error ('Error in deleting : '+err.message);
        }
    }
}
module.exports = new taskService