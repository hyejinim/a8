class Player {

  constructor() {
    // this.emoji = '🐵'; //😈👶🙅🙆🤦‍🙋‍
    // this.size = 70;
    this.x = c.width * 1/7;
    this.y = c.height * 3/5;
    this.moved = false;
    this.jumped = false;
    this.image = new Image();
    this.image.src = 'images/bean-run1.png';


    // this.runStart = new Image();
    // this.runStart.src = "images/monkey_run_1.png";

    // let image = new Image();
    // let _this = this;
    // image.onload = function(e){
    //   _this.runStart = e.target;
    // }
    // image.src = "images/monkey_run_1.png";
    //
    // image = new Image();
    // // let _this = this;
    // image.onload = function(e){
    //   _this.runEnd = e.target;
    // }
    // image.src = "images/monkey_run_2.png";
  }
  draw(context) {
    // context.font = (this.size) + "px Helvetica";
    // context.fillText(this.emoji, this.x, this.y);
    let x = this.x;
    let y = this.y;
    let image = this.image;

    if (!gameStart) {
      this.image.src = 'images/bean-run3.png';
    }

    image.onload = function(){
      context.drawImage(image, x, y);
    }
    // console.log("draw player" + image);
  }
  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
  setJumped(jumped) {
    this.jumped = jumped;
  }
  // isInside(point) {
  //   var rect = new Rectangle((int) this.x,(int)  this.y, this.icon.getIconWidth(), this.icon.getIconHeight());
  //   return rect.contains(p);
  // }
  // bound() {
  //   var rect;
  //   gc.rect(this.x, this.y, this.width, this.height);
  //   console.log(rect);
  // }
  tick() {
    if (!this.moved) {
      this.image.src = 'images/bean-run3.png';
      this.moved = true;
      // console.log("draw run 2")
    } else if (this.moved) {
      this.image.src = 'images/bean-run4.png';
      this.moved = false;
    }
    if (this.jumped) {
      // Jumping animation
      if (this.y = c.height * 2.7/5) {
        this.image.src = 'images/bean-run4.png';
        this.y = this.y - 300;
      }
      this.jumped = false;
    } else {
      if (this.y < c.height * 2.7/5) {
        this.y = this.y + 10;
        // console.log("player position: ", this.y);
        this.image.src = 'images/bean-run4.png';
      }
    }
  }
}
