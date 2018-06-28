const startMap = function startMap() {
	window.map = new IMapper();

	window.map.vehicles = new Map();
	window.map.routes = new Map();



};

const getVehicles = function() {
	return new Promise(function(res, rej) {
		req = new XMLHttpRequest();
		req.open("GET");
	});
}