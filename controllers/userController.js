const User = require('../models/User'); 
const getUserInfo = async (req, res) => { 
    try { 
        const user = await User.findById(req.userId).select('-password'); 
        res.json(user); 
    } 
    catch (error) { 
    res.status(500).json({ error: 'Error retrieving user information' }); 
    } 
}; 
const updateUserInfo = async (req, res) => { 
    try { 
        const { email } = req.body; 
        const user = await User.findByIdAndUpdate( 
            req.userId, 
            { email }, 
            { new: true } 
        )
        .select('-password'); 
        res.json(user); 
    }
     catch (error) { 
        res.status(500).json({ error: 'Error updating user information' }); 
    } 
}; 
const deleteUser = async (req, res) => { 
    try { 
        await User.findByIdAndDelete(req.userId); 
        res.json({ message: 'User deleted successfully' }); 
    }
     catch (error) { 
        res.status(500).json({ error: 'Error deleting user' }); 
    } 
}; 
module.exports = { 
getUserInfo, 
updateUserInfo, 
deleteUser, 
};
