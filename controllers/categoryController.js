const Category = require('../models/Category'); 
const createCategory = async (req, res) => { 
try { 
const { name, description } = req.body; 
const category = new Category({ name, description, user: req.userId }); 
await category.save(); 
res.status(201).json(category); 
} catch (error) { 
res.status(500).json({ error: 'Error creating category' }); 
} 
}; 
const getCategories = async (req, res) => { 
try { 
const categories = await Category.find({ user: req.userId }); 
res.json(categories); 
} catch (error) { 
res.status(500).json({ error: 'Error retrieving categories' }); 
} 
}; 
const updateCategory = async (req, res) => { 
try { 
const { name, description } = req.body; 
const category = await Category.findOneAndUpdate( 
{ _id: req.params.categoryId, user: req.userId }, 
{ name, description }, 
{ new: true } 
); 
if (!category) { 
return res.status(404).json({ error: 'Category not found' }); 
} 
res.json(category); 
} catch (error) { 
res.status(500).json({ error: 'Error updating category' }); 
} 
}; 
const deleteCategory = async (req, res) => { 
try { 
const category = await Category.findOneAndDelete({ 
_id: req.params.categoryId, 
user: req.userId, 
}); 
if (!category) { 
return res.status(404).json({ error: 'Category not found' }); 
} 
res.json({ message: 'Category deleted successfully' }); 
} catch (error) { 
res.status(500).json({ error: 'Error deleting category' }); 
} 
}; 
module.exports = { 
createCategory, 
getCategories, 
updateCategory, 
deleteCategory, 
};
