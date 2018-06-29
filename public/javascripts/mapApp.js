import { MapContainer } from "./classes/map.js"

const map = new MapContainer();
const vehiclesReq = new XMLHttpRequest();
vehiclesReq.open("GET", "/api/vehicles");
vehiclesReq.addEventListener("load", function() {
	JSON.parse(this.responseText).forEach((vehData) => map.addVehicle(vehData))
});
vehiclesReq.send();

const bindings = {
	"toggleTraffic": document.getElementById("traffic"),
	"toggleWeather": document.getElementById("weather"),
	"toggleRoutes": document.getElementById("route")
}
