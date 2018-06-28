const express = require('express');
const router = express.Router();
const key = global.APIKEY;


// API endpoint to acces vehicle info
router.get("/vehicles/:id", function(req, res, next) {
	if (!req.params.id)	{
		// just return all the vehicle id's
	} else {
		// return the vehicle with the id
	}
});


// API endpoint to access route info
router.get("/route/:id", function (req, res, next) {
	if (!req.params.id) {
		res.statusCode(400);
		next();
	} else {
		// return the route with the id
	}
})

module.exports = router