const PI_D2 = Math.PI / 2;
const easing = {
  easeInSine: function(t, b, c, d) {
    return -c * Math.cos((t / d) * PI_D2) + c + b;
  },
  easeOutSine: function(t, b, c, d) {
    return c * Math.sin((t / d) * PI_D2) + b;
  },
  easeInOutSine: function(t, b, c, d) {
    return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
  },
  easeOutBack: function(t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  }
};
