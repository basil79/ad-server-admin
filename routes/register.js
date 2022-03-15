const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('register', { title: 'AdServe Platform Register'});
});

module.exports = router;
