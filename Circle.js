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
    // super.draw();
    context.fillStyle = this.color;
    context.beginPath();
    context.arc (this.x, this.y, this.r, 0, Math.PI * 2);
    context.fill();

    this.drawOutliine(context);
  }
  contains(px, py) {
    if (Math.sqrt((px-this.x)*(px-this.x) + (py-this.y)*(py-this.y)) < this.r) {
      console.log("-----------------------Circle");
      return true;
    }
    return false;
  }
}
