const express = require('express'); 
const userController = require('../controllers/userController'); 
const authMiddleware = require('../middlewares/authMiddleware'); 
const router = express.Router(); 
router.get('/', authMiddleware, userController.getUserInfo); 
router.patch('/', authMiddleware, userController.updateUserInfo); 
router.delete('/', authMiddleware, userController.deleteUser); 
module.exports = router; 

