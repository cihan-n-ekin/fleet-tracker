export class Route {
  constructor(id) {

    if(id) {
      const href = `/api/routes/${id}`;
      const req = new XMLHttpRequest();
      req.open("GET", href);
      req.send();
    }

    // load some data from the locationbox api...
  }

  set end({x, y}) {
    console.log(x ,y)
  }

  set start({x, y}) {
    console.log(x ,y)
  }
}