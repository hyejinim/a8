// Hyejin Im, hyejin.im@tufts.edu
// Kam Chan Kang, Kamchan.Kang@tufts.edu 

class Parallel extends Shape {
  constructor() {
    super();
    this.type = "parallelogram";
    this.y = c.height * 3/5 + 15;
    this.width = this.size;
    this.height = this.size;
  }
  draw(context) {
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
  }
  contains(px, py) {
    if ((this.x <= px && px <= this.x + this.width) && (this.y <= py && py <= this.y + this.height)) {
      console.log("collided with Parallelogram");
      return true;
    }
    return false;
  }
}
