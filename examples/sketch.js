function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
  colorMode(HSB, 100);
}

function draw() {
  fill(random(100), 100, 100, 50);
  circle(random(width), random(height), random(10, 100));
}