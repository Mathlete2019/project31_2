const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World =  Matter.World;
var world, engine, ground;
var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(400,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground();

  for (var k= 0; k <=400; k = k+80) {
    divisions.push(new Division(k, 800 - divisionHeight/2, 10, divisionHeight))
  }

  for (var j = 40; j <= 400; j = j+50) {
    plinkos.push(new Plinko(j,75,10))
  } 
    
  for (var j = 15; j <= 400-10; j = j+50) { 
    plinkos.push(new Plinko(j, 175,10))
  }  

  for (var j = 40; j <= 400; j = j+50) {
    plinkos.push(new Plinko(j,275,10))
  } 
    
  for (var j = 15; j <= 400-10; j = j+50) {
    plinkos.push(new Plinko(j, 375,10))
  }

}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();

  if (frameCount%60 === 0) {
    particles.push(new Particle(random(190, 210), 10))
  }

  for (var arrayNum = 0; arrayNum < divisions.length; arrayNum = arrayNum+1) {
    divisions[arrayNum].display();
  }  

  for (var arrayNum2 = 0; arrayNum2 < plinkos.length; arrayNum2 = arrayNum2+1) {
    plinkos[arrayNum2].display();
  }  

  for (var arrayNum3 = 0; arrayNum3 < particles.length; arrayNum3 = arrayNum3+1) {
    particles[arrayNum3].display();
  }
  
}

