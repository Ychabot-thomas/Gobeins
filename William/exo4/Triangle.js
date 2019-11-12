class Triangle {
  constructor(position, size) {
    this.position = new Vector(position.x, position.y);
    // this.velocity = new Vector(0, 0);
    this.size = size;
  }

  //   update(mouse) {
  //     // Vector.subtract( mouse, this.position, this.velocity )
  //     // this.velocity.x *= 0.1
  //     // this.velocity.y *= 0.1
  //     // Vector.add(this.position, this.velocity, this.position)

  //     // let easing = 0.1;

  //     // this.velocity.x = (mouse.x - this.position.x) * easing;
  //     // this.velocity.y = (mouse.y - this.position.y) * easing;

  //     // t = currentTime
  //     // b = beginnig value
  //     // c = change value (delta between `from` and `to`)
  //     // d = duration

  //     // easing.easeOutSine(t, b, c, d);

  //     // this.position.x += this.velocity.x;
  //     // this.position.y += this.velocity.y;

  //     let dx = mouse.x - this.position.x;
  //     let dy = mouse.y - this.position.y;

  //     this.angle = Math.atan2(dy, dx);

  //     if (this.position.x > ctx.canvas.width) {
  //       this.position.x = 400;
  //     }

  //     if (this.position.x < 0) {
  //       this.position.x = 0;
  //     }

  //     if (this.position.y > ctx.canvas.height) {
  //       this.position.y = 400;
  //     }

  //     if (this.position.y < 0) {
  //       this.position.y = 0;
  //     }
  //   }

  moveTo(x, y) {
    this.position.x = x;
    this.position.y = y;
    if (this.position.x > ctx.canvas.width) {
      this.position.x = 400;
    }

    if (this.position.x < 0) {
      this.position.x = 0;
    }

    if (this.position.y > ctx.canvas.height) {
      this.position.y = 400;
    }

    if (this.position.y < 0) {
      this.position.y = 0;
    }
  }

  rotate(mouse) {
    let dx = mouse.x - this.position.x;
    let dy = mouse.y - this.position.y;
    this.angle = Math.atan2(dy, dx);
  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.angle + Math.PI / 2);
    ctx.moveTo(-this.size / 2, this.size / 2);
    ctx.lineTo(0, -this.size / 2);
    ctx.lineTo(this.size / 2, this.size / 2);
    ctx.lineTo(-this.size / 2, this.size / 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}
