class Circle extends Shape {
  constructor() {
    super();
    this.type = "circle";
    this.y = c.height * 3/5 + 50; // Adjust circle's y position
    this.r = this.size/2;
  }
  draw(context) {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc (this.x, this.y, this.r, 0, Math.PI * 2);
    context.fill();

    this.drawOutliine(context);
  }
  contains(px, py) {
    if (Math.sqrt((px-this.x)*(px-this.x) + (py-this.y)*(py-this.y)) < this.r) {
      console.log("collided with Circle");
      return true;
    }
    return false;
  }
}
