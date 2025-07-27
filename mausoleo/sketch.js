var video
let f= "f"
let img
let icono
let minVolOtro

function preload(){
  img= loadImage("img/prueba2.jpg")
  icono= loadImage("img/mausoleo.png")
  minVolOtro = parseFloat(localStorage.getItem('minVol'));
}
var vScale= 10 // vScale is the scale factor for the video pixels
function setup(){
  createCanvas(windowWidth,windowHeight)
  pixelDensity(1);
  video= createCapture(VIDEO)
  video.hide()
  video.size(width/vScale, height/vScale)
  mic = new p5.AudioIn();
  mic.start();
  frameRate(12);
  console.log("min>"+minVolOtro);


}
let am = 1
let bm = 7
let minVol = 0.008;
let maxVol = 0.1;
function draw(){
  //clear()
  background(0,0,0);

  let vol = mic.getLevel();
  console.log("vol:", vol);

  let norm = map(vol, minVol, maxVol, am, bm);
  norm = constrain(norm, am, bm);
  let rounded = round(norm);
  push();
  //translate(width, 0);
  //rotate(HALF_PI);

//  console.log("norm:", norm.toFixed(2), "→", rounded);
if (video.width > 0 && video.height > 0) {
  video.loadPixels();
  //loadPixels();
  for (var y=0; y < video.height;y ++){
    for (var x=0; x < video.width ;x ++){
      var index= (x+y*video.width)*4;
      var r = video.pixels[index+0]
      var g = video.pixels[index+1]
      var b = video.pixels[index+2]

      var bright= (r+g+b)/2;

      var alfa
      if (bright<150){
         alfa = rounded
      }else{
        alfa=rounded*255
      }


      var w = map(bright, 0, 255, 0, vScale*rounded);

      let color = [250,91,250, bright]
      strellita(w/2,w/6, x*vScale, y*vScale, color);


    }

  }
  pop();
  cosScale = 6
  sx = 1391/cosScale
  sy = 1129/cosScale
  let deg = -90

  push();
    angleMode(DEGREES);
    translate(windowWidth / 2, windowHeight / 2); // Mover el origen al centro
    rotate(deg); // Rotar en base al tiempo (o podés usar un valor fijo)
    imageMode(CENTER);
    image(icono, 0, 0, sx, sy);
pop();




}
}
function strellita(sx, sy, px, py, color){
  let innerRadius = sx;
  let outerRadius = sy;
  push();
  translate(px, py);

  noStroke(); // Sin contorno
  fill(color); // Color aleatorio
  // Draw the star shape.
  beginShape();
  vertex(-innerRadius, innerRadius);
  vertex(0, outerRadius);
  vertex(innerRadius, innerRadius);
  vertex(outerRadius, 0);
  vertex(innerRadius, -innerRadius);
  vertex(0, -outerRadius);
  vertex(-innerRadius, -innerRadius);
  vertex(-outerRadius, 0);
  endShape(CLOSE);

  pop()
}
