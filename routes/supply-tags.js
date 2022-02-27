const express = require('express');
const verifyToken = require('../controllers/jwt');
const router = express.Router();

router.get('/', [verifyToken], (req, res) => {
  res.render('supply-tags', { title: 'Supply Tags', layout: 'secure.hbs' });
});

module.exports = router;
