const express = require('express');
const restaurantRouter = require('./restaurants');

const router = express.Router();
router.use('/restaurants', restaurantRouter);

module.exports = router;
