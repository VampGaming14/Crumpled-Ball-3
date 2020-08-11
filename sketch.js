var ground,paper,dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var roomim;

function preload(){
roomim=loadImage("sprites/room.jpg");
}
function setup() {
	createCanvas(1000, 700);
    
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	

	ground=new Ground(500,700,1000,30);
	paper=new Paper(50,580,50,50);

	
	
	box1=new Box(800,600);
	
	box2=new Ground(730,590,20,160);
	box3=new Ground(870,590,20,160);
    chain=new Slingshot(paper.body,{x:100,y:90});
}


function draw() {
 rectMode(CENTER);
  background(roomim);
  Engine.update(engine);
  //console.log(box1.body.position.x);
  
 
  paper.display();
 
  ground.display();
  box2.display();
  box3.display();
  box1.display();
 chain.display();
  
  
  fill("yellow");
  text("AIM AND THROW THE PAPER INTO THE BIN!",350,50);
  if(paper.body.position.x>800&&paper.body.position.x<900&&paper.body.position.y<700&&paper.body.position.y>600){
	  fill("blue");
	  textSize(20);
	  text("GOOD JOB!",400,390);
  }
  drawSprites();

 
}


function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	chain.fly();
}