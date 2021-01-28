const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var plinkos = [];
var divisions = [];
var particle , count = 5;
var score = 0;
var gameState = 0;

function setup() {
  var canvas = createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,800,800,20);
}
function draw() {
  background("black");
  textSize(20)
  text("Score :"+ score ,20,30);

  textSize(20);
  text("Lives :"+ count,710,30);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, 650, 10, 300));
  }
   for (var j = 75; j <= width; j=j+50) {
      plinkos.push(new Plinko(j,75));
   }
   for (var j = 50; j <= width-10; j=j+50) {
      plinkos.push(new Plinko(j,175));
   }
    for (var j = 75; j <= width; j=j+50){
      plinkos.push(new Plinko(j,275));
   }
    for (var j = 50; j <= width-10; j=j+50){
      plinkos.push(new Plinko(j,375));
   }

   if(gameState === 0){
     fill("white");
     textSize(30);
     text("WELCOME", 320,430);

     textSize(30);
     text("Press Space To Start",260,460);
     if(keyCode === 32){
       gameState = 1;
     }
   }

   if(gameState === 1){
    Engine.update(engine);
    if(keyCode === 32){
      particle = new Particle(random(20,780),10,10,10);
     }
   }

   if(count === 0){
      gameState = 2
   }

   if(gameState === 2){
     particle.visible = false;
     textSize(30);
     text("GAMEOVER",320,430);
     text("Press Space to Restart");
   }

  for (var j = 0; j < plinkos.length; j++) {
     plinkos[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
   ground.display();
}

function score(){
    if(particle!=null){
      particle.display();

      if(particle.body.position.y > 760){
          if(particle.body.position.x < 300){
            score = score + 500;
            particle = null;
            count--
          }
      }
      if(particle.body.position.y > 760){
        if(particle.body.position.x > 301 && particle.body.position.x < 600){
          score = score + 100;
          particle = null;
          count--
        }
    }
    if(particle.body.position.y > 760){
      if(particle.body.position.x > 601 && particle.body.position.x < 900){
        score = score + 200;
        particle = null;
        count--
      }
    }
}
}

