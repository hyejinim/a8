// Hyejin Im, hyejin.im@tufts.edu
// Kam Chan Kang, Kamchan.Kang@tufts.edu

class Triangle extends Shape {
  constructor() {
    super();
    this.type = "triangle";
    this.y = c.height * 3/5 + 15;
    this.size = this.size * 1.5; // Adjust scale
    this.width = this.size; // for bounding box
    this.height = this.size * 3/4; // for bounding box
  }
  draw(context) {
    context.fillStyle = this.color;
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo(this.x + this.width/2, this.y + this.height);
    context.lineTo(this.x - this.width/2, this.y + this.height);
    context.closePath();
    context.fill();

    this.drawOutliine(context);
  }
  contains(px, py) {
    if ((this.x - this.width/2 <= px && px <= this.x + this.width/2) && (this.y <= py && py <= this.y + this.height)) {
      console.log("collided with Triangle");
      return true;
    }
    return false;
  }
}
