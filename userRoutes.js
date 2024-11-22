const express = require('express');
const User = require('./models/User'); // Assuming your Sequelize model is set up like this
const router = express.Router();

// Fetch all users (GET)
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
});

// Create a new user (POST)
router.post('/', async (req, res) => {  // Removed ':id' from the route
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required.' });
    }
    try {
        const newUser = await User.create({ name, email });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
});

// Edit a user by ID (EDIT)
router.put('/:id', async (req, res) => {
    const { id } = req.params; 
    const { name, email } = req.body; 
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required for updating.' });
    }
    try {
        console.log(`Updating user with ID: ${id}`); 
        const user = await User.findByPk(id); 
        if (!user) {
            return res.status(404).json({ error: 'User not found.' }); 
        }
        user.name = name;
        user.email = email;
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        console.error('Error updating user:', error); 
        res.status(500).json({ error: 'Error updating user' });
    }
});

//Patch a user by ID (EDIT)
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }
        if (name) {
            user.name = name;
        }
        if (email) {
            user.email = email;
        }
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Error updating user' });
    }
});


// Delete a user by ID (DELETE)
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }
        await user.destroy();
        res.status(200).json({ message: 'User deleted successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting user' });
    }
});

module.exports = router;
