class Parallel extends Shape {
  constructor() {
    super();
    this.type = "parallelogram";
    this.y = c.height * 3/5 + 15;
    this.width = this.size;
    this.height = this.size;
  }
  draw(context) {
    // super.draw();
    context.fillStyle = this.color;
    context.beginPath();

    context.moveTo(this.x + this.width*0.3, this.y);
    context.lineTo(this.x, this.y + this.height);
    context.lineTo(this.x + this.width*0.7, this.y + this.height);
    context.lineTo(this.x + this.width, this.y);
    context.lineTo(this.x + this.width*0.3, this.y);
    context.closePath();
    context.fill();

    this.drawOutliine(context);
    console.log("draw PARALLEL");
  }
  contains(px, py) {
    // console.log("rectan contains")
    // if ((this.x <= px && px <= this.x + this.width) && (this.y <= py && py <= this.y + this.height)) {
    //   console.log("-----------------------parallelogram");
    //   return true;
    // }
    // return false;
  }
}
