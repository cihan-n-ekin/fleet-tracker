import { EventEmitter } from 'events';

export class Gastank extends EventEmitter {
  constructor(level, {max, critical}) {
    
    if(!level) throw new TypeError("level needs to be a float between 0 and 1");
    
    this.level = level;
    if (max) this.max = max;
    this.amount = max ? max*level : undefined;
    this.amount = critical ? critical : 0.2;

    this.gasCheck = setInterval(() => {
      if (this.level < this.critical) this.emit("low", this, this.level)
    }, 2000)
  }

  set max(x) {
    this.amount = x*this.level;
  }

  get max() {
    return this.amount/this.level;
  }
}