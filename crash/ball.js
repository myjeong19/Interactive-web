export class Ball {
  constructor(stageWidth, stageHeight, radius, speed) {
    this.radius = radius; // 반지름

    this.vx = speed; // x축으로의 속도
    this.vy = speed; // y축으로의 속도

    const diameter = this.radius * 2;
    this.x = diameter + (Math.random() * stageWidth - diameter); // Random x position
    this.y = diameter + (Math.random() * stageHeight - diameter); // Random y position
  }

  //   context drawing function
  //   Moving the ball
  draw(ctx, stageWidth, stageHeight) {
    this.x += this.vx;
    this.y += this.vy;

    this.bounceWindow(stageWidth, stageHeight);
    ctx.fillStyle = '#fdd700';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  bounceWindow(stageWidth, stageHeight) {
    const minX = this.radius;
    const maxX = stageWidth - this.radius;
    const minY = this.radius;
    const maxY = stageHeight - this.radius;

    if (this.x <= minX || this.x >= maxX) {
      this.vx *= -1;
      this.x += this.vx;
    } else if (this.y <= minY || this.y >= maxY) {
      this.vy *= -1;
      this.y += this.vy;
    }
  }
}
