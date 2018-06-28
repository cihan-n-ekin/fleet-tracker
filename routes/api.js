const express = require('express');
const router = express.Router();
const key = global.APIKEY;


// API endpoint to acces vehicle info
router.get("/route/:id", function(req, res, next) {
		// return the vehicle with the id
});

// API endpoint to acces vehicle info
router.get("/vehicles", function(req, res, next) {
	console.log(req.params.id);
	const apilol = [{
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
		}
	]

	res.send(apilol);
});

// API endpoint to access route info
router.get("/vehicles/:id", function (req, res, next) {

	const apilol = [{
			x: 40.08923 + Math.random(),
			y: 39.2736 + Math.random(),
			opts: {
				speed: 100,
				gaslevel: 0.3
			},
			id: 1
		}, {
			x: 40.8973 + Math.random(),
			y: 39.0928 + Math.random(),
			opts: {
				speed: 100,
				gaslevel: 0.3
			},
			id: 2
		}, {
			x: 40.236575 + Math.random(),
			y: 40.82173 + Math.random(),
			opts: {
				speed: 100,
				gaslevel: 0.3
			},
			id: 3
		}, {
			x: 40.436433 + Math.random(),
			y: 40.1711 + Math.random(),
			opts: {
				speed: 100,
				gaslevel: 0.3
			},
			id: 4
		}
	]

	res.send(
		apilol.filter((val) => val.id == req.params.id)[0]
	)

})

module.exports = router