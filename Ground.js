// Hyejin Im, hyejin.im@tufts.edu
// Kam Chan Kang, Kamchan.Kang@tufts.edu 

class Ground {
  constructor() {
    this.x = 0;
    this.y = c.height * 3.5/5;
    this.x2 = this.x + c.width;
    this.image = new Image();
    this.image.src = 'images/ground.png';
  }
  draw(context) {
    let x = this.x;
    let x2 = this.x2;
    let y = this.y;
    let image = this.image;
    image.onload = function(){
      context.drawImage(image, x, y, c.width, 70);
      context.drawImage(image, x2, y, c.width, 70);
    }
    context.drawImage(image, x, y, c.width, 70);
    context.drawImage(image, x2, y, c.width, 70);
  }
  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
  tick() {
    if (this.x > -c.width) {
    this.x = this.x - 1;
    } else {
    this.x = c.width;
    }
    if (this.x2 > -c.width) {
    this.x2 = this.x2 - 1;
    } else {
    this.x2 = c.width;
    }
  }
}
