function Particle(x, y, radius) {
  this.init(x, y, radius);
}

Particle.prototype = {
  init: function(x, y, radius) {
    this.alive = true;

    this.radius = radius || 1;
    this.wander = 0.15;
    this.theta = random(TWO_PI);
    this.drag = 0.82;
    this.color = "#fff";

    this.x = x || 0.0;
    this.y = y || 0.0;

    this.vx = 0.0;
    this.vy = 0.0;
  },
  move: function() {
    this.x += this.vx;
    this.y += this.vy;

    this.vx *= this.drag;
    this.vy *= this.drag;

    this.theta += random(-0.5, 0.5) * this.wander;
    this.vx += sin(this.theta) * 0.1;
    this.vy += cos(this.theta) * 0.1;

    this.radius *= 0.96;
    this.alive = this.radius > 0.5;
    // etoile.play();
  },

  draw: function(ctx) {
    ctx.beginPath();
    // ctx.rotate((45 * Math.PI) / 180);

    ctx.rect(this.x, this.y, 10, 10);
    // ctx.arc(this.x, this.y, this.radius, 0, TWO_PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
};

// Couleur rond

var MAX_PARTICLES = 100;
var COLOURS = [
  "#fe3308",
  "#ff3f02",
  "#fcb005",
  "#fcb005",
  "#c5de4f",
  "#6ed17e",
  "#61ca9f",
  "#01b5c3",
  "#1391dd",
  "#4787e1",
  "#817eef",
  "#9581f4",
  "#d5a4f6",
  "#f5c7f6",
  "#e8d4e0"
];

var particles = [];
var pool = [];

var rondCouleur = Sketch.create({
  container: document.getElementById("container")
});

rondCouleur.setup = function() {
  var i, x, y;

  for (i = 0; i < 10; i++) {
    x = rondCouleur.width * 0.5 + random(-100, 100);
    y = rondCouleur.height * 0.5 + random(-100, 100);
    rondCouleur.spawn(x, y);
  }
};

rondCouleur.spawn = function(x, y) {
  if (particles.length >= MAX_PARTICLES) pool.push(particles.shift());

  particle = pool.length ? pool.pop() : new Particle();
  particle.init(x, y, random(5, 40));

  particle.wander = random(0.5, 2.0);
  particle.color = random(COLOURS);
  particle.drag = random(0.9, 0.99);

  theta = random(TWO_PI);
  force = random(2, 8);

  particle.vx = sin(theta) * force;
  particle.vy = cos(theta) * force;

  particles.push(particle);
};

let now = new Date();
let lastTime;
let deltaTime;

rondCouleur.update = function() {
  now = Date.now();
  let deltaTime = now - lastTime;

  var i, particle;

  for (i = particles.length - 1; i >= 0; i--) {
    particle = particles[i];

    if (particle.alive) particle.move();
    else pool.push(particles.splice(i, 1)[0]);
  }
  // etoile.play();

  lastTime = now;
  document.getElementById("FPS").innerText = "FPS : " + 1000 / deltaTime;
};

rondCouleur.draw = function() {
  rondCouleur.globalCompositeOperation = "lighter";

  for (var i = particles.length - 1; i >= 0; i--) {
    particles[i].draw(rondCouleur);
  }
};

rondCouleur.mousemove = function() {
  var particle, theta, force, touch, max, i, j, n;

  for (i = 0, n = rondCouleur.touches.length; i < n; i++) {
    (touch = rondCouleur.touches[i]), (max = random(1, 4));
    for (j = 0; j < max; j++) rondCouleur.spawn(touch.x, touch.y);
  }
};

/* ---- particles.js config ---- */

particlesJS("particles-js", {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800
      }
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#ffffff"
      },
      polygon: {
        nb_sides: 6
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#fff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 1
      },
      remove: {
        particles_nb: 1
      }
    }
  },
  retina_detect: true
});

// Animation

// var ctx = Sketch.create();
