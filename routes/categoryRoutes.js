const express = require('express'); 
const categoryController = require('../controllers/categoryController'); 
const authMiddleware = require('../middlewares/authMiddleware'); 
const router = express.Router(); 
router.post('/', authMiddleware, categoryController.createCategory); 
router.get('/', authMiddleware, categoryController.getCategories); 
router.patch('/:categoryId', authMiddleware, categoryController.updateCategory); 
router.delete('/:categoryId', authMiddleware, categoryController.deleteCategory); 
module.exports = router;
