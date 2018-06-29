export class Route {
  constructor(id) {

    if(id) {
      const href = `/api/routes/${id}`;
      const req = new XMLHttpRequest();
      req.open("GET", href);
      req.send();
      req.addEventListener("load", ({target: req}) => {
        const data = JSON.parse(req.responseText);
        this.start = data.start_dest;
        this.end = data.end_dest;
      });
    }
    
    // load some data from the locationbox api...
  }
  
  set start({x, y}) {
    delete this.cache;
    this.startX = x;
    this.startY = y;
    if(this.endX && this.endY) {this.data}
  }
  
  get start() {
    return {x: this.startX, y: this.startY};
  }
  
  set end({x, y}) {
    delete this.cache;
    this.endX = x;
    this.endY = y;
    if(this.startX && this.startY) {this.data}
  }
  
  get end() {
    return {
      x: this.endX,
      y: this.endY
    };
  }
  
  get data() {
    return new Promise( (res, rej) => {
      
      if(!this.cache) {
        const q = `Points=${[
          `${this.start.y}/${this.start.x}`,
          `${this.end.x}/${this.end.y}`
        ].join(",")}`;
        const req = new XMLHttpRequest();
        req.open("GET", `/api/Rota?${q}`)
        req.addEventListener("load", ({target: req}) => {
          console.log(req);
          this.cache = JSON.parse(req.responseText).rota;
          res(this.cache)
        });
        req.send()
      } else res(this.cache)
    });
  }
}