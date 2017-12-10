class Shape {
  constructor(type) {
    this.type = type;
    this.size = getRandomValue(70, 150); // radious for circle, width/height for rect
    // this.width = getRandomValue(70, 150);
    // this.height = getRandomValue(70, 150);
    this.speed = this.size / 20;
    this.x = c.width + 50;
    this.y = c.height * 3/5;
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
    this.x -= 20;
  }
}

class Circle extends Shape {
  constructor() {
    super();
    this.type = "circle";
    // this.x = c.width + 50;
    this.y = c.height * 3/5 + 50; // Adjust circle's y position
    this.r = this.size/2;
    // this.w = getRandomValue(10, 20);
    // console.log("make circle " + runningShapes.length);
  }
  draw(context) {
    gc.fillStyle = this.color;
    context.beginPath();
    context.arc (this.x, this.y, this.r, 0, Math.PI * 2);
    context.fill();
    // console.log("draw circle " + runningShapes.length);

  }
  contains(px, py) {
    if (Math.sqrt((px-this.x)*(px-this.x) + (py-this.y)*(py-this.y)) < this.r) {
      console.log("-----------------------Circle");
      return true;
    }
    return false;
  }

}

class Rectangle extends Shape {
  constructor() {
    super();
    this.type = "rectangle";
    this.y = c.height * 3/5 + 15;
    this.width = this.size; // for bounding box
    this.height = this.size; // for bounding box
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
  contains(px, py) {
    // console.log("rectan contains")
    if ((this.x <= px && px <= this.x + this.width) && (this.y <= py && py <= this.y + this.height)) {
      console.log("-----------------------Rect");
      return true;
    }
    return false;
  }
}

class Triangle extends Shape {
  constructor() {
    super();
    this.type = "triangle";
    this.y = c.height * 3/5 + 15;
    this.width = this.size; // for bounding box
    this.height = this.size; // for bounding box
    // this.width = getRandomValue(100, 200);
    // this.height = getRandomValue(100, 200);
    // console.log("make rect " + runningShapes.length);
  }
  draw(context) {
    gc.fillStyle = this.color;
    // context.beginPath();
    // context.fillRect(this.x, this.y, this.size, this.size);

    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(100, 300);
    context.lineTo(300, 300);
    context.closePath();

    // the outline
    context.lineWidth = 10;
    context.strokeStyle = '#666666';
    context.stroke();

    context.fill();
  }
  contains(px, py) {
    if ((this.x <= px && px <= this.x + this.width) && (this.y <= py && py <= this.y + this.height)) {
      console.log("-----------------------Triangle");
      return true;
    }
    return false;
  }
}
