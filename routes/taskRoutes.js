const express = require('express'); 
const taskController = require('../controllers/taskController'); 
const authMiddleware = require('../middlewares/authMiddleware'); 
const router = express.Router(); 
router.post('/', authMiddleware, taskController.createTask); 
router.get('/', authMiddleware, taskController.getTasks); 
router.patch('/:taskId', authMiddleware, taskController.updateTask); 
router.delete('/:taskId', authMiddleware, taskController.deleteTask); 
module.exports = router;
