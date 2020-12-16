const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var topBar;
var line1, line2, line3, line4, line5;
var circle1, circle2, circle3, circle4, circle5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	topBar = new Trash(400, 200, 40, 500);
	//Matter.Body.setStatic(topBar, true);

	Engine.run(engine);
	
	circle1 = new Bob(100, 200, 60);
	circle2 = new Bob(200, 210, 60);
	circle3 = new Bob(300, 200, 60);
	circle4 = new Bob(400, 200, 60);
	circle5 = new Bob(500, 200, 60);
	line1 = new Chain({x:200, y:200}, circle1.body);
	line2 = new Chain({x:300, y:200}, circle2.body);
	line3 = new Chain({x:400, y:200}, circle3.body);
	line4 = new Chain({x:500, y:200}, circle4.body);
	line5 = new Chain({x:600, y:200}, circle5.body);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  

  topBar.display();
  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();
}