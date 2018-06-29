export class Route {
  constructor(id) {

    if(id) {
      const href = `/api/routes/${id}`;
      const req = new XMLHttpRequest();
      req.open("GET", href);
      req.send();
      const data = JSON.parse();
      this.start = data.start_dest;
      this.end = data.end_dest;
    }

    // load some data from the locationbox api...
  }

  set start({x, y}) {
    delete this.cache;
    console.log(x ,y)
  }

  set end({x, y}) {
    delete this.cache;
    console.log(x ,y)
  }

  get data() {
    if(!this.cache) {
    const q = `Points=${[
      `${this.start.y}/${this.start.x}`,
      `${this.end.x}/${this.end.y}`
    ].join(",")}`;
    const req = new XMLHttpRequest();
    req.open("GET", `/api/Rota?${q}`)
    req.send()
    this.cache = JSON.parse(req.responseText);
    }


    return this.cache
  }

}