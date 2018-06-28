import { Vehicle } from "./classes/vehicle.js";

const mapper = new IMapper();
console.log(mapper);
mapper.vehicles = new Map();
mapper.routes = new Map();

new Promise(function(res, rej) {
  const req = new XMLHttpRequest();
  req.open("GET", "/api/vehicles");
  req.addEventListener("load", function() {
    console.log(this);
    res(
      JSON.parse(this.responseText)
    )
  });
  req.send();
}).then(function(vehicles) {
  for (let v = 0; v < vehicles.length; v++) {
    const vehicle = vehicles[v];
    mapper.vehicles.set(vehicle.id, new Vehicle(vehicle.id, vehicle.x, vehicle.y, vehicle.opts))
  }
  mapper.initMap(40,40,10);
  console.log(mapper);

  mapper.vehicles.forEach(vehicle => {
    mapper.addMarker(vehicle.id, vehicle.gps.pos.y, vehicle.gps.pos.x, vehicle.make+vehicle.id, "M.PIN_1", 70, 70,1)
  });

});