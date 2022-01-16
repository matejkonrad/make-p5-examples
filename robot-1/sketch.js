function setup() {
    createCanvas(720, 480);
    strokeWeight(2);
    ellipseMode(RADIUS);
}

function draw() {
    background(204);

    // NECK
    stroke(102);
    line(266, 257, 266, 162);
    line(276, 257, 276, 162);

    // ANTENNE
    line(276, 155, 246, 112);
    line(276, 155, 306, 56);
    line(276, 155, 342, 170);

    // BODY
    noStroke();
    fill(102);
    ellipse(264, 377, 33, 33);
    fill(0);
    rect(214, 257, 90, 120);
    fill(102);
    rect(219, 274, 90, 6);
    
    // HEAD
    fill(0);
    ellipse(276, 155, 45, 45);
    fill(255);
    ellipse(288, 150, 14, 14);
    fill(0);
    ellipse(288, 150, 3, 3);
    fill(153);
    ellipse(263, 148, 5, 5);
    ellipse(296, 130, 4, 4);
    ellipse(305, 162, 3, 3)
}