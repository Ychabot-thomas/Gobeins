var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

function suivis() {
  triangle();
  souris();
}

suivis();

function triangle() {
  ctx.beginPath();
  ctx.moveTo(25, 25);
  ctx.lineTo(55, 35);
  ctx.lineTo(35, 55);
  ctx.fill();
  ctx.save();
  ctx.closePath();
  ctx.stroke();
}

function souris() {
  document.getElementById("mycanvas").onmousemove = event => {
    console.log(`X = ${event.clientX} | Y = ${event.clientY}`);
  };
}
