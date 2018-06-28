const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const key = global.APIKEY;
  console.log(key);
  res.render('index', { key });
});

module.exports = router;
