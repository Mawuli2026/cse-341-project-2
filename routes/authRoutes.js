const express = require('express');
const passport = require('passport');
const router = express.Router();

// 🔐 Start Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// 🔐 Callback after Google authentication
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/api/items'); // You can change this to any protected route or frontend page
  }
);

// 🚪 Logout route
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.status(200).json({ message: 'Logged out successfully' });
  });
});

module.exports = router;
