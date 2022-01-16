let step = 3;
function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeWeight(step);
    ellipseMode(RADIUS);
    background(0)
}

let counter = 0;
let counter2 = 0;
function draw() {
    stroke(random(255), random(255), random(255));
    fill(100);
    circle(counter, counter, counter2, counter2)
    counter2+=1;
    counter+=3;
    if (counter > width) {
        counter = 0;
    }
    if (counter2 >  10) { 
      coutner = 0 
    }
}
