const Task = require('../models/Task'); 
const createTask = async (req, res) => { 
    try { 
        const { title, description, dueDate, category } = req.body; 
            const task = new Task({ 
            title, 
            description, 
            dueDate, 
            user: req.userId, 
            category, 
        }); 
    await task.save(); 
    res.status(201).json(task); 
    }
     catch (error) { 
        res.status(500).json({ error: 'Error creating task' }); 
    } 
}; 
const getTasks = async (req, res) => { 
    try { 
        const { status, dueDate } = req.query; 
        const query = { user: req.userId }; 
        if (status) { 
        query.status = status; 
        } 
        if (dueDate) { 
        query.dueDate = { $lte: new Date(dueDate) }; 
        } 
        const tasks = await Task.find(query).populate('category'); 
        res.json(tasks); 
    }
     catch (error) { 
        res.status(500).json({ error: 'Error retrieving tasks' }); 
    } 
}; 
const updateTask = async (req, res) => { 
    try { 
        const { title, description, status, dueDate, category } = req.body; 
        const task = await Task.findOneAndUpdate( 
        { _id: req.params.taskId, user: req.userId }, 
        { title, description, status, dueDate, category }, 
        { new: true } 
        ).populate('category'); 
        if (!task) { 
        return res.status(404).json({ error: 'Task not found' }); 
        } 
        res.json(task); 
    }
     catch (error) { 
        res.status(500).json({ error: 'Error updating task' }); 
    } 
}; 
const deleteTask = async (req, res) => { 
    try { 
        const task = await Task.findOneAndDelete({ 
        _id: req.params.taskId, 
        user: req.userId, 
        }); 
        if (!task) { 
        return res.status(404).json({ error: 'Task not found' }); 
        } 
        res.json({ message: 'Task deleted successfully' }); 
    }
     catch (error) { 
        res.status(500).json({ error: 'Error deleting task' }); 
    } 
}; 
module.exports = { 
createTask, 
getTasks, 
updateTask, 
deleteTask, 
};
