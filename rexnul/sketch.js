var ax, ay, vx, vy, px, py, s, g, vMultiplier;
var r = 50;
var g = 125;
var b = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ax = 0;
  ay = 0;
  vx = 0;
  vy = 0;
  px = windowWidth / 2;
  py = windowHeight / 2;
  s = 50;
  g = 0.4;
}


function draw() {
  background(r,g,b);
  fill(0);
  textSize(18);
  text("Rx: " + floor(rotationX), 5, 15);
  text("Ry: " + floor(rotationY), 5, 35);
  text("Rz: " + floor(rotationZ), 5, 55);
  drawBille();
}


function drawBille() {
  vMultiplier = 0.01;
  ax = rotationY * vMultiplier;
  vx += ax;
  px += vx;
  ay = rotationX * vMultiplier;
  vy += ay;
  py += vy;
  fill(0);
  ellipse(px, py, s, s);
  fill(150);
  ellipse(px, py - 10, s / 2, s / 4);
  fill(75);
  ellipse(px, py + 10, s / 2, s / 4);
  if (px > windowWidth - s / 2) {
    px = windowWidth - s / 2;
    vx = -vx * g;
  }
  if (px < 0 + s / 2) {
    px = 0 + s / 2;
    vx = -vx * g;
  }

  if (py > windowHeight - s / 2) {
    py = windowHeight - s / 2;
    vy = -vy * g;
  }
  if (py < 0 + s / 2) {
    py = 0 + s / 2;
    vy = -vy * g;
  }
}

function deviceShaken() {
 r = r + 5;
  if (r > 255) {
    r = 50;
  }
 g = g + 5;
  if (g > 255) {
    g = 50;
  }
 b = b + 5;
  if (b > 255) {
    b = 50;
  }

}