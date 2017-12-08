class Shape {
  constructor(type) {
    this.type = type;
    this.size = getRandomValue(70, 150); // radious for circle, width/height for rect
    // this.width = getRandomValue(70, 150);
    // this.height = getRandomValue(70, 150);
    this.speed = this.size / 20;
    this.x = c.width + 50;
    this.y = c.height * 2/3;
    this.color = getRandomColor();
    // console.log("make shape " + runningShapes.length);
  }
  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
  setSize(x) {
    this.size = x;
  }
  tick() {
    this.x -= 10;
  }
}

class Circle extends Shape {
  constructor() {
    super();
    this.type = "circle";
    // this.x = c.width + 50;
    this.y = c.height * 2.25/3;
    this.width = this.size; // for bounding box
    this.height = this.size; // for bounding box
    // this.w = getRandomValue(10, 20);
    // console.log("make circle " + runningShapes.length);
  }
  draw(context) {
    gc.fillStyle = this.color;
    context.beginPath();
    context.arc (this.x, this.y, this.size/2, 0, Math.PI * 2);
    context.fill();
    // console.log("draw circle " + runningShapes.length);
  }
}

class Rectangle extends Shape {
  constructor() {
    super();
    this.type = "rectangle";
    // this.width = getRandomValue(100, 200);
    // this.height = getRandomValue(100, 200);
    // console.log("make rect " + runningShapes.length);
  }
  draw(context) {
    gc.fillStyle = this.color;
    context.beginPath();
    context.fillRect(this.x, this.y, this.size, this.size);
    // console.log("draw rect " + runningShapes.length);
  }
}
