const express = require('express');
const verifyToken = require('../controllers/jwt');
const router = express.Router();

router.get('/', [verifyToken], (req, res) => {
  res.render('accounts', { title: 'Accounts', layout: 'secure.hbs' });
});

module.exports = router;
