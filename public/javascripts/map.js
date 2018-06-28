function onloadmap() {
  class Route {
    constructor(id) {
      //do xhr request
    }

    set end({
      x,
      y
    }) {
      console.log(x, y)
    }

    set start({
      x,
      y
    }) {
      console.log(x, y)
    }
  }

  class Gastank {
    constructor(level, {
      max,
      critical
    }) {

      if (!level) throw new TypeError("level needs to be a float between 0 and 1");

      this.level = level;
      if (max) this.max = max;
      this.amount = max ? max * level : undefined;
      this.amount = critical ? critical : 0.2;

      this.gasCheck = setInterval(() => {
        if (this.level < this.critical) try {
          this.onlow(this.level)
        } catch (e) {}
      }, 2000)
    }

    set max(x) {
      this.amount = x * this.level;
    }

    get max() {
      return this.amount / this.level;
    }
  }

  class Vehicle {
    constructor(id, posX, posY, {
      make,
      gaslevel,
      speed,
      routeID,
      routeStart,
      routeEnd,
      infoDelay,
      gasMax
    }) {
      this.vehID = id;
      if (gaslevel) this.gas = new Gastank(gaslevel, {
        max: gasMax
      });
      this.gps = {

        pos: {
          x: posX,
          y: posX
        },

        v: speed,

        route: routeID ? new Route(routeID) : (routeStart && routeEnd ? (function (rs, re) {
          const r = new Route();
          r.start = rs;
          r.end = re;
        })(routeStart, routeEnd) : undefined)
      }

      this.infoInterval = setInterval(this.getInfo, infoDelay ? infoDelay : 200, this);

      this.gas.onlow = () => this.onlow(this.gas)
    }

    getInfo(thisArg) {
      const href = `/api/vehicles/${thisArg.vehID}`;
      const req = new XMLHttpRequest();
      req.open("GET", href, true);
      req.addEventListener("load", function () {
        const info = JSON.parse(this.responseText);
        thisArg.updateInfo(
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

    updateInfo(posX, posY, {
      gaslevel,
      speed
    }) {
      this.gps.pos.x = posX || this.gps.pos.x;
      this.gps.pos.y = posY || this.gps.pos.y;
      this.gps.pos.speed = speed || this.gps.pos.speed;
      this.gas.level = gaslevel;
    }
  }

  window.mapper = new IMapper();
  window.mapper.initMap(40,40,10);
  console.log(window.mapper);
  window.mapper.vehicles = [];
  window.mapper.routes = [];

  const req = new XMLHttpRequest();
  req.open("GET", "/api/vehicles");
  req.addEventListener("load", function(){
    console.log(req.responseText)
    const vehicles = JSON.parse(req.responseText)

    for (let v = 0; v < vehicles.length; v++) {
      const vehicle = new Vehicle(vehicles[v].id, vehicles[v].x, vehicles[v].y, vehicles[v].opts);
      window.mapper.vehicles.push(vehicle)
    }
    
    window.mapper.vehicles.forEach(vehicle =>
      window.mapper.addMarker(vehicle.vehID+"", vehicle.gps.pos.y, vehicle.gps.pos.x, this.make + this.id, "M.PIN_1", 40, 40, function(){}, 1)
    )
    function updatemarkers() {
      window.mapper.vehicles.forEach(vehicle =>
        window.mapper.animateMarker(vehicle.vehID+"", [vehicle.gps.pos.y, vehicle.gps.pos.x], 5) );
    }

    window.markerupdate = setInterval(updatemarkers, 400);

  });
  req.send()
}