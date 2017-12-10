class Player {

  constructor() {
    this.x = c.width * 1/7;
    this.y = c.height * 2.7/5;
    this.moved = false;
    this.jumped = false;
    this.image = new Image();
    this.image.src = 'images/bean-run1.png';
    this.width = 170;
    this.height = 220;
    this.frontX = this.x + this.width - 25;
    this.middleY = this.y + (this.height/2);
    this.life = 3;
  }
  draw(context) {
        let x = this.x;
    let y = this.y;
    let width = this.width;
    let height = this.height;
    let image = this.image;

    if (!gameStart) {
      this.image.src = 'images/bean-run3.png';
    }
    image.onload = function(){
      context.drawImage(image, x, y, width, height);
    }
    // Check for collision point
    // gc.fillStyle = "#000000";
    // gc.beginPath();
    // gc.arc (this.frontX, this.middleY, 5, 0, Math.PI * 2);
    // gc.fill();
  }
  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
  setJumped(jumped) {
    this.jumped = jumped;
  }
  setScale(int){
    this.width = this.width * 1/int;
    this.frontX = this.x + this.width;
    // this.height = this.height * 1/int;
  }
  loseLife(){
    if (this.life > 0) {
      this.life = this.life -1;
    }
    this.setScale(2);
    console.log("lose one life (now: ", this.life, ")");
  }
  tick() {
    if (!this.moved) {
      this.image.src = 'images/bean-run3.png';
      this.moved = true;
    } else if (this.moved) {
      this.image.src = 'images/bean-run4.png';
      this.moved = false;
    }
    if (this.jumped) {
      // Jumping animation
      if (this.y = c.height * 2.5/5) {
        this.image.src = 'images/bean-run4.png';
        this.y = this.y - 300;
        this.middleY = this.y + (this.height/2);
      }
      this.jumped = false;
    } else {
      if (this.y < c.height * 2.5/5) {
        this.y = this.y + 10;
        this.middleY = this.y + (this.height/2);
        this.image.src = 'images/bean-run4.png';
      }
    }
  }
}
