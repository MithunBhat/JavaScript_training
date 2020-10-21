export class Clock {
  element;
  constructor(speed, timezone) {
    this.speed = speed;
    this.timezone = timezone;
    this.create();
  }
  create() {
    // you should create the html elements here
  }
  setRotation() {
    // take account of the starting time zone that means the starting position of the hands
  }
  run() {
    // then running the clock based on the speed
  }
  getElement() {
    return this.element; // the html element of the clock
  }
}
