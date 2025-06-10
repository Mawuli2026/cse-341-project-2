// middlewares/authMiddleware.js

// Middleware to check if the user is logged in via Passport
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next();
  }
  return res.status(401).json({ message: 'Unauthorized: Please log in to access this route.' });
}

module.exports = { isAuthenticated };
