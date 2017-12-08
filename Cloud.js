class Cloud {
  constructor() {
    // this.emoji = '☁️';
    // this.size = getRandomValue(40, 70);
    this.x = Math.random() * c.width;
    this.y = Math.random() * (c.height/3);
    this.image = new Image();
    this.image.src = 'images/cloud.png';

  }
  draw(context) {
    // context.font = (this.size) + "px Helvetica";
    // context.fillText(this.emoji, this.x, this.y);

    // For initial drawing
    let x = this.x;
    let y = this.y;
    let image = this.image;
    image.onload = function(){
      context.drawImage(image, x, y, 75, 40);
    }
    // For animation
    context.drawImage(image, x, y, 75, 40);
  }
  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
  tick() {

    if (this.x > -50) {
    this.x = this.x - 1;
    } else {
    this.x = c.width;
    }
  }
}
