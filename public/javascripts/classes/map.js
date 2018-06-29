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
      9*1000
    );
  
  
  }

  addVehicle(data) {

    const newVehicle = new Vehicle(data.id, data.x, data.y, data.opts, this);
    this.vehicles.push(
      newVehicle 
    );

    this.map.addMarker(newVehicle.id+"", newVehicle.gps.pos.y, newVehicle.gps.pos.x, String(newVehicle.make + newVehicle.id), "M.PIN_1", 40, 40, ()=>{}, 1)
  }

  updatePins() {
    this.vehicles.forEach(vehicle => {
      this.map.moveMarker(""+vehicle.id, vehicle.gps.pos.y, vehicle.gps.pos.x);
    });
  }

  bindButtons(functions) {
    for (const methodName in functions) {
      if (functions.hasOwnProperty(methodName)) {
        const buttonToBind = functions[methodName];
        console.log(buttonToBind, this[methodName])
        try {
          buttonToBind.addEventListener("click", this[methodName].bind(this));
        } catch (e) {}
      }
    }
  }

  toggleTraffic() {
    if (this.isTrafficOn) this.map.hideTraficView(); else this.map.showTrafficView();
  }
  
  toggleWeather() {
    // do things
  }
  
  // BENI BURAYA IŞINLADI
  // you need to send a request to "/api/lb?Cons=KAMYON,FERIBOT&yp=JSON&Criteria=FAST&etc"
  // dont forget to use encodeURIComponent()
    
  toggleRoutes() {

    // bunu vehicles.forEach() yaparsan daha hızlı çalışır

    // görmedim onu lol undo yapsana bi    
    for (let i = 0; i < this.vehicles.length; i++) {
      const vehicle = this.vehicles[i]; 
      const data = vehicle.route.data;
      map.addRoute('route_'+ i, data.pathid, 'ROUTE_PATH', null); 

      return;
    }
  }
}