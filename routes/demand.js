const express = require('express');
const verifyToken = require('../controllers/jwt');
const router = express.Router();

router.get('/', [verifyToken], (req, res) => {
  res.render('demand-accounts', { title: 'Demand Accounts', layout: 'secure.hbs' });
});

module.exports = router;
