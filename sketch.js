//DECLARING VARIABLES AND CONSTANTS
var helicopter_moving, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	//LOADING ANIMATIONS AND IMAGES
	helicopter_moving = loadAnimation("helicopter1.png", "helicopter2.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//CREATING SPRITES
	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addAnimation("helicopter", helicopter_moving);
	helicopterSprite.scale = 1.3;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255);

	//CREATING ENGINE AND WORLD
	engine = Engine.create();
	world = engine.world;

	//CREATING PACKAGE
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	//adding package to world
	World.add(world, packageBody);
	

	//CREATING A GROUND
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false)
  }
}



