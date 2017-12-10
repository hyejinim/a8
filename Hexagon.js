class Hexagon extends Shape {
  constructor() {
    super();
    this.type = "hexagon";
    this.y = c.height * 3/5 + 15;
    this.width = this.size;
    this.height = this.size;
  }
  draw(context) {
    // super.draw();
    context.fillStyle = this.color;
    var facShort = 0.225;
    var facLong = 1 - facShort;


    context.beginPath();
    context.moveTo(this.x + this.width*0.5, this.y);
    context.lineTo(this.x, this.y + this.height*facShort);
    context.lineTo(this.x, this.y + this.height*facLong);
    context.lineTo(this.x + this.width*0.5, this.y + this.height);
    context.lineTo(this.x + this.width, this.y + this.height*facLong);
    context.lineTo(this.x + this.width, this.y + this.height*facShort);
    context.lineTo(this.x + this.width*0.5, this.y);
    context.closePath();
    context.fill();

    this.drawOutliine(context);


  }
  contains(px, py) {
    // console.log("rectan contains")
    if ((this.x <= px && px <= this.x + this.width) && (this.y <= py && py <= this.y + this.height)) {
      console.log("-----------------------Rhombus");
      return true;
    }
    return false;
  }
}
