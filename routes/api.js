const express = require('express');
const router = express.Router();
const key = global.APIKEY;


// API endpoint to acces vehicle info
router.get("/route/:id", function(req, res, next) {
		// return the vehicle with the id
});

// API endpoint to acces vehicle info
router.get("/vehicles", function(req, res, next) {
	const apilol = [{
			x: 40.08923,
			y: 39.2736,
			opts: {
				speed: 100,
				gaslevel: 0.3,
				routeID: 1,
			},
			id: 1
		}, {
			x: 40.8973,
			y: 39.0928,
			opts: {
				speed: 100,
				gaslevel: 0.3,
				routeID: 1,
			},
			id: 2
		}, {
			x: 40.236575,
			y: 40.82173,
			opts: {
				speed: 100,
				gaslevel: 0.3,
				routeID: 1,
			},
			id: 3
		}, {
			x: 40.436433,
			y: 40.1711,
			opts: {
				speed: 100,
				gaslevel: 0.3,
				routeID: 1,
			},
			id: 4
		}
	]

	res.send(apilol);
});

router.get("/routes/:id", function (req, res, next) {
	const routes = [
		{
			id: 1,
			starting_dest: {
				x: 40.02156,
				y: 29.14265,
			},
			final_dest: {
				x: 37.42135,
				y: 30.17565,
			},
			gas_loss: 0.5
		}, {
			id: 2,
			starting_dest: {
				x: 41.02156,
				y: 32.14265,
			},
			final_dest: {
				x: 36.42135,
				y: 31.17565,
			},
			gas_loss: 0.3
		}, {
			id: 3,
			starting_dest: {
				x: 35.02156,
				y: 35.14265,
			},
			final_dest: {
				x: 37.42135,
				y: 37.17565,
			},
			gas_loss: 0.7
		}
	]
	res.send(
		routes.filter((val) => val.id == req.params.id)[0]
	);
})
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