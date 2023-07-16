var angle = 0;
var cameraY = 0;
var cameraZ = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  var rotationSpeed = 0.5; 

  var targetCameraY = sin(frameCount * rotationSpeed) * 200; 
  var targetCameraZ = cos(frameCount * rotationSpeed) * 200; 

  
  cameraY = lerp(cameraY, targetCameraY, 0.05);
  cameraZ = lerp(cameraZ, targetCameraZ, 0.05);

  camera(0, cameraY, cameraZ, 1, 0, 0, 0, 1, 0); 

  noFill();

  for (var i = 0; i < 50; i++) {
    var hue = (frameCount + i * (360 / 90)) % 360; 

    stroke(hue, 255, 255); 

    rotate(angle);

    beginShape();
    for (var j = 0; j < 360; j += 60) {
      var rad = i * 3;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = sin(frameCount * 2 + i * 5) * 60;

      vertex(x, y, z);
    }
    angle += 0.001;
    endShape(CLOSE);
  }
}
