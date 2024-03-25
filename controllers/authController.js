const jwt = require('jsonwebtoken'); 
const User = require('../models/User'); 
const signup = async (req, res) => { 
try { 
const { username, password, email } = req.body; 
const user = new User({ username, password, email }); 
await user.save(); 
res.status(201).json({ message: 'User registered successfully' }); 
} catch (error) { 
res.status(500).json({ error: 'Error registering user' }); 
} 
}; 
const login = async (req, res) => { 
try { 
const { username, password } = req.body; 
const user = await User.findOne({ username }); 
if (!user) { 
return res.status(401).json({ error: 'Invalid credentials' }); 
} 
const isMatch = await user.comparePassword(password); 
if (!isMatch) { 
return res.status(401).json({ error: 'Invalid credentials' }); 
} 
const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET); 
res.json({ token }); 
} catch (error) { 
res.status(500).json({ error: 'Error logging in' }); 
} 
}; 
module.exports = { 
signup, 
login, 
};
