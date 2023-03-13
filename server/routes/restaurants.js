const express = require('express');
const {
  getAllRestaurants,
  getRestaurantMenu,
  getSearchResults,
} = require('../controllers/restaurantController');

const restaurantRouter = express.Router();

restaurantRouter.get('/list', getAllRestaurants);
restaurantRouter.get('/menu', getRestaurantMenu);
restaurantRouter.get('/search/suggest', getSearchResults);

module.exports = restaurantRouter;
