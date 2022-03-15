const jwt = require('jsonwebtoken');
const config = require('../config.json');

const verifyToken = (req, res, next) => {
  const token = req.cookies['x-access-token'];
  console.log(token);
  if (!token) {
    return res.redirect('/');
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      // unauthorized!
      return res.redirect('/');
    }
    req.userId = decoded.id;
    console.log(req.userId);
    next();
  });
}

module.exports = verifyToken;
