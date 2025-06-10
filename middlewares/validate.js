function validateItem(req, res, next) {
  const { name, price } = req.body;
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ message: 'Item "name" is required and must be a string.' });
  }
  if (price === undefined || typeof price !== 'number') {
    return res.status(400).json({ message: 'Item "price" is required and must be a number.' });
  }
  next();
}

function validateUser(req, res, next) {
  const { username, email } = req.body;
  if (!username || typeof username !== 'string') {
    return res.status(400).json({ message: 'User "username" is required and must be a string.' });
  }
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ message: 'User "email" is required and must be a valid email address.' });
  }
  next();
}

module.exports = {
  validateItem,
  validateUser
};
