const fetch = require('cross-fetch');
const { SWIGGY_BASE_URL } = require('../../utils/constants');
const MOCK_RESPONSE_RESTAURANT_MENU = require('../../mocks/get.restaurantDetails.json');

const getAllRestaurants = async (req, res) => {
  const { lat, lng } = req.query;

  const url = `${SWIGGY_BASE_URL}restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`;

  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ success: false, message: error });
    });
};

const getRestaurantMenu = async (req, res) => {
  const { lat, lng, menuId } = req.query;
  const url = `${SWIGGY_BASE_URL}/menu/v4/full?lat=${lat}&lng=${lng}&menuId=${menuId}`;

  /**
   
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ success: false, message: error });
    });

   */

  res.json(MOCK_RESPONSE_RESTAURANT_MENU);
};

const getSearchResults = async (req, res) => {
  const { lat, lng, str } = req.query;
  const url = `${SWIGGY_BASE_URL}restaurants/search/suggest?lat=${lat}&lng=${lng}&str=${str}`;

  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ success: false, message: error });
    });
};

module.exports = {
  getAllRestaurants,
  getRestaurantMenu,
  getSearchResults,
};
