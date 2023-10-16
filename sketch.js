let x = 300;
let y = 0;
let score = 0;
let speed = 2;
let screen = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (screen === 0) {
    startScreen();
  } else if (screen === 1) {
    startGame();
  } else if (screen === 2) {
    endGame();
  }
}

function mousePressed() {
  if (screen === 0) {
    screen = 1;
  } else if (screen === 2) {
    screen = 0;
    restart();
  }
}

function startScreen() {
  background(69);
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text("Welcome To The Game!", width / 2, height / 2);
  text("Click To Start", width / 2, height / 2 + 30);

  restart();
}

function startGame() {
  background(0); 
  rectMode(CENTER);
  fill(255);
  rect(mouseX, height - 20, 30, 30);

  fill(255);
  noStroke();
  textStyle(NORMAL);
  text("Score: " + score, 50, 20);

  y += speed;

  fill(255);
  stroke(255);
  strokeWeight(5);
  ellipse(x, y, 25, 25);

  if (y > height) {
    screen = 2;
  }


  if (y > height - 15 && x > mouseX - 15 && x < mouseX + 15) {
    y = 0;
    score++;
    speed += 0.5;
    x = random(width);
  }
}

function endGame() {
  background(255, 0, 0);
  noStroke();
  textAlign(CENTER);
  text("Lol You Lost", width / 2, height / 2);
  text("Score: " + score, width / 2, height / 2 + 20);
  text("Click To Play Again", width / 2, height / 2 + 40);
}

function restart() {
  y = 0;
  speed = 2;
  score = 0;
}
