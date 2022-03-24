const express = require('express');
const verifyToken = require('../controllers/jwt');
const router = express.Router();

router.get('/', [verifyToken], (req, res) => {
  res.render('sites', { title: 'Sites', layout: 'secure.hbs' });
});

module.exports = router;
