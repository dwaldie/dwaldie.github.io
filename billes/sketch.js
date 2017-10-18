var ax, vx, px

deviceRotationY*vMultiplier;


function setup() {
 createCanvas(windowWidth,windowHeight); 
}


function draw()
{
ellipseMode(CENTER);  
fill(100);  
ellipse(50, 50, 30, 30); 
}

function touchStarted() {
 background(random(0,255),random(0,255),random(0,255));
}