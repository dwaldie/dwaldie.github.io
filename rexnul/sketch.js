var ax, ay, vx, vy, px, py, s, g, vMultiplier;
var value = 0;

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
  background(255);
  fill(0);
  textSize(40);
  text("Rx: " + floor(rotationX), 100, 100);
  text("Ry: " + floor(rotationY), 100, 150);
  text("Rz: " + floor(rotationZ), 100, 200);
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
  fill(value);
  ellipse(px, py, s, s);
  fill(150,150,150);
  ellipse(px, py-10, s/2, s/4);
  fill(75,75,75);
  ellipse(px, py+10, s/2, s/4);
  if (px > windowWidth) {
    px = windowWidth - s / 2;
    vx = -vx*g;
  }
  if (px < 0) {
    px = 0 + s / 2;
    vx = -vx*g;
  }

  if (py > windowHeight) {
    py = windowHeight - s / 2;
    vy = -vy*g;
  }
  if (py < 0) {
    py = 0 + s / 2;
    vy = -vy*g;
  }
}

function deviceShaken() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }

}