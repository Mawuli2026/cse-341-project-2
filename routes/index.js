const express = require('express');
const router = express.Router();

const itemRoutes = require('./itemRoutes');
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');

router.use('/items', itemRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;
