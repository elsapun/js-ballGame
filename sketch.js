
//variaveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 20
let raio = diametro /2


//velocidade da bolinha
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6


//variaveis raquete
let xRect = 5
let yRect = 150
let wRect = 10
let hRect = 90

//var rect enemy
let xRectEnemy = 585;
let yRectEnemy = 150;
let veloYEnemy;

//verify collision
let hit = false

//placar
let myPoints = 0;
let enemyPoints = 0;

//game sounds
let trilha;
let points;
let raq;

function preload(){
  trilha = loadSound("trilha.mp3");
  points = loadSound("ponto.mp3");
  raq = loadSound("raquetada.mp3"); 
}

//plano do fundo
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoDaBolinha();
  verificaBordas();
  mostraRect(xRect, yRect);
  moveRect();
//verifyCollisionRect();
  collision(xRect, yRect);
  mostraRect(xRectEnemy, yRectEnemy);
  moveEnemyRect();
  collision(xRectEnemy, yRectEnemy);
  showPlacar();
  setPoint();
}

function  mostraBolinha() {
    circle(xBolinha, yBolinha, diametro)
}


function movimentoDaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaBordas(){
  
    if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1
  }
}

function mostraRect(x,y){
  rect (x, y, wRect, hRect)
}

function moveRect(){
  if (keyIsDown(87)){
      yRect -= 6
      }
  
  if (keyIsDown(83)){
      yRect += 6
      
}
}

function verifyCollisionRect(){
  
  if (xBolinha - raio < xRect + wRect && yBolinha - raio < yRect +  hRect && yBolinha + raio > yRect){
    
      velocidadeXBolinha *= -1
    
      }
}

function collision(x,y){
  colidiu = 
  collideRectCircle(x, y, wRect, hRect, xBolinha, yBolinha, raio)
  
  if(colidiu){
    
 velocidadeXBolinha *= -1
    raq.play();

  }
}

function moveEnemyRect(){
   if (keyIsDown (UP_ARROW)){
      yRectEnemy -= 6
      }

  if (keyIsDown (DOWN_ARROW)){
      yRectEnemy += 6
}
  
}

function showPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 135, 0))
  rect(150, 10, 40, 20)
  fill (255);
  text (myPoints, 170, 26);
  fill (color(255, 135, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text (enemyPoints, 470, 26);
  
  
}

function setPoint(){
  if(xBolinha > 590){
    myPoints += 1
    points.play();
  }
  
  if(xBolinha < 10){
    enemyPoints += 1
    points.play();
  }
}


