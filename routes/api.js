const express = require('express');
const router = express.Router();
const key = global.APIKEY;


// API endpoint to acces vehicle info
router.get("/vehicles/:id", function(req, res, next) {
		// return the vehicle with the id
});

// API endpoint to acces vehicle info
router.get("/vehicles", function(req, res, next) {
	res.send([{
			x: 40.08923,
			y: 39.2736,
			opts: {
				speed: 100,
				gaslevel: 0.3
			},
			id: 1
		}, {
			x: 40.8973,
			y: 39.0928,
			opts: {
				speed: 100,
				gaslevel: 0.3
			},
			id: 2
		}, {
			x: 40.236575,
			y: 40.82173,
			opts: {
				speed: 100,
				gaslevel: 0.3
			},
			id: 3
		}, {
			x: 40.436433,
			y: 40.1711,
			opts: {
				speed: 100,
				gaslevel: 0.3
			},
			id: 4
		},

	]);
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