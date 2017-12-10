class Shape {
  constructor(type) {
    this.type = type;
    this.size = getRandomValue(70, 150);
    this.speed = this.size / 20;
    this.x = c.width + 50;
    this.y = c.height * 3/5;
    this.color = getRandomColor();
  }
  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
  setSize(x) {
    this.size = x;
  }
  tick() {
    this.x -= 20;
  }
  drawOutliine(context) {
    context.lineWidth = 5;
    context.strokeStyle = '#000000';
    context.stroke();
  }
}
