import { EventEmitter } from "events";
import { Route } from "./route.js";
import { Gastank } from "./gastank.js";

export class Vehicle extends EventEmitter {
  constructor(id, posX, posY, {make, gaslevel, speed, routeID, routeStart, routeEnd, infoDelay}) {
    super();
    this.vehID = id;
    if(gaslevel) this.gas = new Gastank(gaslevel);
    this.gps = {
     
      pos: {
        x: posX,
        y: posX
      },
     
      v: speed,
    
      route: route ? new Route(route) : (routeStart && routeEnd ? (function (rs, re) {
        const r = new Route();
        r.start = rs;
        r.end = re;
      })(routeStart, routeEnd) : undefined)
    }

    this.infoInterval = setInterval(this.getInfo, infoDelay ? infoDelay : 200);

    this.gas.on("low", () => this.emit("low", this.gas))
  }

  getInfo() {
    const href = `/api/vehicles/${this.vehID}`;
    const req = new XMLHttpRequest();
    req.open("GET", href, true);
    req.addEventListener("load", (xhr, ev) => {
      const info = JSON.parse(xhr.readText());
      this.emit("info", info, this);
      this.updateInfo(
        info.posX,
        info.posY,
        info
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
    this.gas.level = gaslevel;
  }
}