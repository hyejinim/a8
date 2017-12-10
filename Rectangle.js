// Hyejin Im, hyejin.im@tufts.edu
// Kam Chan Kang, Kamchan.Kang@tufts.edu

class Rectangle extends Shape {
  constructor() {
    super();
    this.type = "rectangle";
    this.y = c.height * 3/5 + 15;
    this.width = this.size * 1.4;
    this.height = this.size;
  }
  draw(context) {
    context.fillStyle = this.color;
    context.beginPath();
    context.fillRect(this.x, this.y, this.width, this.height);

    // the outline
    context.lineWidth = 5;
    context.strokeStyle = '#000000';
    context.strokeRect(this.x, this.y, this.width, this.height);
  }
  contains(px, py) {
    if ((this.x <= px && px <= this.x + this.width) && (this.y <= py && py <= this.y + this.height)) {
      console.log("collided with Rectangle");
      return true;
    }
    return false;
  }
}
