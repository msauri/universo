let mic;
let minVol = 0;
let maxVol = 0;
let minReg = Infinity; // inicializo en valor alto para poder actualizar
let maxReg = 0;

let minInput, maxInput, confirmButton, volverButton;
let sensitivitySet = false;
let started = false;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();

  minInput = createInput(minVol.toString());
  minInput.position(20, 20);
  minInput.size(60);

  maxInput = createInput(maxVol.toString());
  maxInput.position(100, 20);
  maxInput.size(60);

  confirmButton = createButton("Confirmar");
  confirmButton.position(180, 20);
  confirmButton.mousePressed(() => {
    minVol = parseFloat(minInput.value());
    maxVol = parseFloat(maxInput.value());
    sensitivitySet = true;

    // Reiniciar registros cuando confirmás sensibilidad
    minReg = Infinity;
    maxReg = 0;
  });

  volverButton = createButton("Volver");
  volverButton.position(260, 20);
  volverButton.mousePressed(() => {
    localStorage.setItem('minVol', minVol);
    localStorage.setItem('maxVol', maxVol);
    window.location.href = 'index.html';

  });
}

function draw() {
  background(0);

  let vol = mic.getLevel();

  if (started) {
    if (!sensitivitySet) {
      if (vol > maxReg) maxReg = vol;
      if (vol < minReg && vol > 0.0001) minReg = vol;
    }
  }

  let norm = map(vol, minVol, maxVol, 2, 10);
  norm = constrain(norm, 2, 10);

  fill(255, 100, 200);
  ellipse(width / 2, height / 2, norm * 30);

  fill(255);
  textSize(14);
  textAlign(CENTER);
  text("Volumen: " + vol.toFixed(4), width / 2, height - 20);

  textSize(12);
  textAlign(LEFT);
  // Si minReg es Infinity, mostrar "-" para que no confunda
  text("Volumen actual: " + vol.toFixed(5), 10, 60);
  text("Volumen mínimo: " + (minReg === Infinity ? "-" : minReg.toFixed(5)), 10, 80);
  text("Volumen máximo: " + maxReg.toFixed(5), 10, 100);

  if (!sensitivitySet) {
    textAlign(CENTER);
    text("Ajustá sensibilidad y confirmá", width / 2, height - 40);
  }
}

function mousePressed() {
  if (!started) {
    started = true;
    userStartAudio();
  }
}
