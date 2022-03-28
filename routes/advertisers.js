const express = require('express');
const verifyToken = require('../controllers/jwt');
const router = express.Router();

router.get('/', [verifyToken], (req, res) => {
  res.render('advertisers', { title: 'Advertisers', layout: 'secure.hbs' });
});

module.exports = router;
