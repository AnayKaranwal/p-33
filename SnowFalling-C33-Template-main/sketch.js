 const Engine=Matter.Engine
 const World=Matter.World
 const Bodies=Matter.Bodies


var bg,snowBall,snowImg,boy1,boy1Create
var snow=[]
function preload() {
  bg = loadImage("snow3.jpg");
  snowImg = loadImage("snow5.webp");
  

}

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  
  
}

function draw() {
  Engine.update(engine)

  background(bg);
  if(frameCount%1===0){
    snow.push(new Snow(random(1,800),10,30))
  }
  for(var i=0;i<snow.length;i++){
    snow[i].display()
  }

  
  
  

  spawnSnow()  
  drawSprites();
}

function spawnSnow(){
}