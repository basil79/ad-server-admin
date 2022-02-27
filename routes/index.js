const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'AdServe Platform Login'});
});

module.exports = router;
