import { Vehicle } from "./vehicle.js";
import { Route } from "./vehicle.js";
import { Gastank } from "./vehicle.js";

export class MapContainer {
  constructor() {
    this.map = new IMapper();
    this.vehicles = [];
    this.routes = new Map();
    this.mapDom = document.getElementById("map");
  }

  addVehicle(data) {
    this.vehicles.push(
      new Vehicle(data.id, data.pos.x, data.pos.y, data, this)
    );
    console.log("added vehicle id " + data.id)
  }

  bindButtons() {
    document.getElementById("add-vehicle-button")
  }

}