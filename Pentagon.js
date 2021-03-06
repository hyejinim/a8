// Hyejin Im, hyejin.im@tufts.edu
// Kam Chan Kang, Kamchan.Kang@tufts.edu 

class Pentagon extends Shape {
  constructor() {
    super();
    this.type = "pentagon";
    this.y = c.height * 3/5 + 15;
    this.width = this.size;
    this.height = this.size;
  }
  draw(context) {
    context.fillStyle = this.color;
    context.beginPath();
    context.moveTo(this.x + this.width/2, this.y);
    context.lineTo(this.x, this.y + this.height*0.4);
    context.lineTo(this.x + this.width*0.2, this.y + this.height);
    context.lineTo(this.x + this.width*0.8, this.y + this.height);
    context.lineTo(this.x + this.width, this.y + this.height*0.4);
    context.lineTo(this.x + this.width/2, this.y);
    context.closePath();
    context.fill();

    this.drawOutliine(context);
  }
  contains(px, py) {
    if ((this.x <= px && px <= this.x + this.width) && (this.y <= py && py <= this.y + this.height)) {
      console.log("collided with Pentagon");
      return true;
    }
    return false;
  }
}
