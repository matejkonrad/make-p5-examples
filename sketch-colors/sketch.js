let step = 3;
function setup() {
    createCanvas(720, 480);
    strokeWeight(step);
    ellipseMode(RADIUS);
}

let counter = 0;
function draw() {
    stroke(random(255), random(255), random(255));

    line(counter, 0, counter, height);
    counter+=3;
    if (counter > width) {
        counter = 0;
    }
}
