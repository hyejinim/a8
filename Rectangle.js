class Rectangle extends Shape {
  constructor() {
    super();
    this.type = "rectangle";
    this.y = c.height * 3/5 + 15;
    this.width = this.size;
    this.height = this.size;
  }
  draw(context) {
    // super.draw();
    context.fillStyle = this.color;
    context.beginPath();
    context.fillRect(this.x, this.y, this.size, this.size);
    // console.log("draw rect " + runningShapes.length);

    // the outline
    context.lineWidth = 5;
    context.strokeStyle = '#000000';
    context.strokeRect(this.x, this.y, this.size, this.size);
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
