const express = require('express');
const verifyToken = require('../controllers/jwt');
const router = express.Router();

router.get('/', [verifyToken], (req, res) => {
  res.render('reporting', { title: 'Reporting', layout: 'secure.hbs' });
});

module.exports = router;
