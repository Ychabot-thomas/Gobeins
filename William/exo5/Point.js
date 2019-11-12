class Point {
  constructor(position, velocity) {
    this.position = new Vector(position.x, position.y);
    this.velocity = new Vector(velocity.x, velocity.y);
  }

  update(ctx) {
    // Vector.add(this.position, this.velocity, this.position);
    // if (this.position.x > ctx.canvas.width || this.position.x < 0) {
    //   this.velocity.x = -this.velocity.x;
    // }
    // if (this.position.y > ctx.canvas.height || this.position.y < 0) {
    //   this.velocity.y = -this.velocity.y;
    // }
  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}
