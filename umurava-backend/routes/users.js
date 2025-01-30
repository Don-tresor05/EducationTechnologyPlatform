const express = require('express');
const router =express.Router();
const User = require('../models/User');

//Get All Users
router.get('/', async (req, res) => {
    try {
        const Users = await User.find();
        res.json(users);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Add aA New User
router.post('/', async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
