const jwt = require('jsonwebtoken'); 
const User = require('../models/User'); 
const authMiddleware = async (req, res, next) => { 
    try { 
        const token = req.header('Authorization').replace('Bearer ', ''); 
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        const user = await User.findById(decoded.userId); 
        if (!user) { 
            throw new Error(); 
        } 
        req.userId = user._id; 
        next(); 
    } 
    catch (error) { 
    res.status(401).json({ error: 'Authentication failed' }); 
    } 
}; 
module.exports = authMiddleware;
