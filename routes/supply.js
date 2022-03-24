const express = require('express');
const verifyToken = require('../controllers/jwt');
const router = express.Router();

router.get('/', [verifyToken], (req, res) => {
  res.render('supply', { title: 'Supply Accounts', layout: 'secure.hbs' });
});

router.get('/:id', [verifyToken], (req, res) => {
  const id = req.params.id;
  res.render('supply-sites', { title: 'Sites', layout: 'secure.hbs', supplyAccountId: id });
});

router.get('/:id/settings', [verifyToken], (req, res) => {
  const id = req.params.id;
  res.render('supply-account-settings', { title: 'Supply Account Settings', layout: 'secure.hbs', supplyAccountId: id });
});

router.get('/:id/sites/:siteId', [verifyToken], (req, res) => {
  const id = req.params.id;
  const siteId = req.params.siteId;
  res.render('supply-sites-supply-tags', { title: 'Supply Tags', layout: 'secure.hbs', supplyAccountId: id, siteId: siteId });
});

router.get('/:id/sites/:siteId/settings', [verifyToken], (req, res) => {
  const id = req.params.id;
  const siteId = req.params.siteId;
  res.render('supply-site-settings', { title: 'Supply Tag Settings', layout: 'secure.hbs', supplyAccountId: id, siteId: siteId });
});

router.get('/:id/sites/:siteId/tags/:tagId', [verifyToken], (req, res) => {
  const id = req.params.id;
  const siteId = req.params.siteId;
  const supplyTagId = req.params.tagId;
  res.render('supply-sites-supply-tags-demand-tags', { title: 'Demand Tags', layout: 'secure.hbs', supplyAccountId: id, siteId: siteId, supplyTagId: supplyTagId });
});

router.get('/:id/sites/:siteId/tags/:tagId/settings', [verifyToken], (req, res) => {
  const id = req.params.id;
  const siteId = req.params.siteId;
  const supplyTagId = req.params.tagId;

  res.render('supply-sites-supply-tag-settings', { title: 'Supply Tag Settings', layout: 'secure.hbs', supplyAccountId: id, siteId: siteId, supplyTagId: supplyTagId });
});

module.exports = router;
