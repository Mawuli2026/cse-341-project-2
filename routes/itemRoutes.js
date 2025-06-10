const express = require('express');
const router = express.Router();
const controller = require('../controllers/itemController');


// 🔐 Middleware to protect routes
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ message: 'Unauthorized' });
}

// Apply protection to the appropriate routes
router.post('/', isAuthenticated, controller.createItem);
router.get('/', controller.getItems);
router.put('/:id', isAuthenticated, controller.updateItem);
router.delete('/:id', isAuthenticated, controller.deleteItem);

module.exports = router;

