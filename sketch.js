
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperObj,paperImg;


function preload(){
paperImg=loadImage("paper.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObj=createSprite(200,645);
	paperObj.addImage(paperImg);
	paperObj.scale=0.2;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  groundObject.display();
  dustbinObj.display();
  paperObj.display();
  drawSprites();
  keyPressed();
  destroy()
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		paperObj.velocityY-=0.01;
		paperObj.velocityX=4;
	}
}

function destroy(){
if(paperObj.x-dustbinObj.x>0){
	paperObj.destroy();
  }
}