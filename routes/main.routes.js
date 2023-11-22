const router = require('express').Router();
const miscController = require('../controllers/misc.controller');
const citiesController = require('../controllers/cities.controller');

router.get('/', miscController.getHome);

// Cities
router.get('/cities', citiesController.getCities);
router.get('/cities/:id', citiesController.getCityDetail);

module.exports = router;