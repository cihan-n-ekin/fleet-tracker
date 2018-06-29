import { Vehicle } from "./vehicle.js";
import { Route } from "./route.js";
import { Gastank } from "./gastank.js";

export class MapContainer {
  constructor() {
    this.map = new IMapper();
    this.map.initMap(40, 40, 7);
    this.vehicles = [];
    this.routes = new Map();
    this.mapDom = document.getElementById("map");

    this.pinUpdater = setInterval(
      (function (self) { //Self-executing func which takes 'this' as self
        return function () { //Return a function in the context of 'self'
          self.updatePins(); //Thing you wanted to run as non-window 'this'
        }})(this),
      400
    );
  
  
  }

  addVehicle(data) {

  const newVehicle = new Vehicle(data.id, data.pos.x, data.pos.y, data, this);
  this.vehicles.push(
    newVehicle 
  );

  this.map.addMarker()
  console.log("added vehicle id " + data.id)

  }

  updatePins() {
    this.vehicles.forEach(vehicle => {
      this.map.moveMarker(vehicle.id, vehicle.gps.pos.y, vehicle.gps.pos.x);
    });
  }

  bindButtons() {
    document.getElementById("add-vehicle-button")
  }

}