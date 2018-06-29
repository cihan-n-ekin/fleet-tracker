import { Route } from "./route.js";
import { Gastank } from "./gastank.js";

export class Vehicle {

  constructor(id, posX, posY, {make, gaslevel, speed, routeID, routeStart, routeEnd, infoDelay, gasMax}, map) {
    this.id = id;
    this.map = map;
    if(gaslevel) this.gas = new Gastank(gaslevel, {max: gasMax});
    this.gps = {
     
      pos: {
        x: posX,
        y: posY
        // no u
      },
      v: speed,
    
      route: routeID ? new Route(routeID) : (routeStart && routeEnd ? (function (rs, re) {
        const r = new Route();
        r.start = rs;
        r.end = re;
      })(routeStart, routeEnd) : undefined)
    }

    this.infoInterval = setInterval(this.getInfo.bind(this), infoDelay ? infoDelay : 10*1000);
  }

  getInfo() {
    const href = `/api/vehicles/${this.id}`;
    const req = new XMLHttpRequest();
    req.open("GET", href, true);
    const vehicle = this;
    req.addEventListener("load", function() {
      const info = JSON.parse(this.responseText);
      vehicle.updateInfo(
        info.x,
        info.x,
        info.opts
      );
    });
    req.addEventListener("error", (xhr, ev) => {
      console.error(ev);
    });
    req.open("GET", href, true);
    req.send();
  }

  updateInfo(posX, posY, {gaslevel, speed}) {
    this.gps.pos.x = posX || this.gps.pos.x;
    this.gps.pos.y = posY || this.gps.pos.y;
    this.gps.pos.speed = speed || this.gps.pos.speed;
    this.gas ? this.gas.level = gaslevel : this.gas = new Gastank(gaslevel);
  }
}