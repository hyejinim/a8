class Gun {

  constructor(player, type) {
    this.type = type + " ▶";
    this.size = 25;
    this.x = player.x;
    this.y = player.y + 100;
    this.shooting = false;
    // this.hit = false;
  }
  draw(context) {
    context.fillStyle = "#000000";
    context.font = (this.size) + "px Helvetica";
    context.fillText(this.type, this.x, this.y);

    console.log("shot draw");
  }
  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
  setShooting(isShot) {
    this.shooting = isShot;
    // this.hit = true;
    // console.log();
  }
  tick() {
    if (this.shooting) {
      // if (!this.hit) {
        this.x += 20;
        console.log('shot tick')
        // this.shot = false;
      }
      else {

      }
    }
  }


// if (this.jumped) {
//   // Jumping animation
//   if (this.y = (c.height-15) * 2.3/4) {
//     this.image.src = 'images/monkey_jump_2.png';
//     this.y = this.y - 300;
//     console.log("player position: ", this.y);
//   }
//   this.jumped = false;
// } else {
//   if (this.y < (c.height-15) * 2.3/4) {
//     this.y = this.y + 20;
//     console.log("player position: ", this.y);
//     this.image.src = 'images/monkey_jump_2.png';
//   }
// }
