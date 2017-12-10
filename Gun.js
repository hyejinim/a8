class Gun {
  constructor(player, type) {
    this.type = type;
    this.text = type + " >>"; //▶
    this.size = 30;
    this.x = player.x + 200;
    this.y = player.y + 120;
    this.shooting = false;
    this.width = gc.measureText(type).width;
    this.height = gc.measureText(type).height;
  }
  draw(context) {
    context.fillStyle = "#000000";
    context.font = (this.size) + "px Helvetica";
    context.textAlign="right";
    context.fillText(this.text, this.x, this.y);
  }
  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
  setShooting(isShot) {
    this.shooting = isShot;
  }
  tick() {
    if (this.shooting) {
        this.x += 20;
      }
    }
  }
