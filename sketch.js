
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer,plane,stone1,rubber,plane;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(350,350);
	plane = new Plane(600,height,1200,20);
	stone1 = new Stone(700,320,70,70);
	rubber = new Rubber(700,280);

	rubberBody = Bodies.circle(width/2 , 80 , 5 , {isStatic:true});
    World.add(world, rubberBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  rubberBody.x=rubberBody.rubber.x;
  rubberBody.y=rubberBody.rubber.y;
    
  hammer.display();
  plane.display();
  stone1.display();
  rubber.display();

  drawSprites();
 
}



