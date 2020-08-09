const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify the token if there is one
  try {
    // decode the token
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    // addinging decoded value in itthe user to reques object ke user ko
    // we had set the req.user to the userin the token
    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};


