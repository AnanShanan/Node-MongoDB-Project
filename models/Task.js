const mongoose = require('mongoose'); 
const taskSchema = new mongoose.Schema({ 
    title: { 
        type: String, 
        required: true, 
    }, 
    description: { 
        type: String, 
    }, 
    status: { 
        type: String, 
        enum: ['TODO', 'IN_PROGRESS', 'COMPLETED'], 
        default: 'TODO', 
    }, 
    dueDate: { 
        type: Date, 
    }, 
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true, 
    }, 
    category: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category', 
    }, 
}); 
const Task = mongoose.model('Task', taskSchema); 
module.exports = Task; 


