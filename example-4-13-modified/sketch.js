function setup() {
    //   createCanvas(480, 480);
    createCanvas(windowWidth, windowHeight);
    fill(255);
    stroke(102);
  }
  
  function draw() {
    background(255, 183, 197);
    fill(255, 247, 189);
    for (let y = 10; y <= height; y += 8) {
      for (let x = -width; x <= width; x += 15) {
        ellipse(x + y, y, 16 - y / 10.0, 16 - y / 10.0);
      }
    }
  }
  