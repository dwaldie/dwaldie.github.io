var ax, ay, vx, vy, px, py, s,vMultiplier;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ax = 0;
  ay = 0;
  vx = 0;
  vy = 0;
  px = windowWidth/2;
  py = windowHeight/2;
  s = 50;
  vMultiplier= 0.01;
}


function draw() {
  textSize(40);
  text("Rx: " + floor(rotationX), 100, 100);
  text("Ry: " + floor(rotationY), 100, 150);
  text("Rz: " + floor(rotationZ), 100, 200);
  drawBille();
}


function drawBille() {
  ax=rotationY*vMultiplier;
  vx+=ax;
  px+=vx;
  ay=rotationX*vMultiplier;
  vy+=ay;
  py+=vy;
  fill(100);
  ellipse(px, py, s, s);
}