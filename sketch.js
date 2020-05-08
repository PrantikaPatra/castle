const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground;

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14;



function setup() {
  createCanvas(700,600);
  engine = Engine.create();
    world = engine.world;

    wall1=createSprite(350, 400, 150,500);
    wall2=createSprite(460,450,50,300);
    wall3=createSprite(240,450,50,300);
    wall4=createSprite(175,400,65,400);
    wall5=createSprite(525,400,65,400);
    wall8=createSprite(90,350,20,500);
    wall9=createSprite(610,350,20,500);

    
var wall15_options={
  isStatic:true
}

    wall15=Bodies.circle(350,150,80,wall15_options);
    World.add(world,wall15);


    var wall6_options={
      isStatic:true
    }
    
        wall6=Bodies.circle(525,180,40,wall6_options);
        World.add(world,wall6);

        var wall7_options={
          isStatic:true
        }
        
            wall7=Bodies.circle(175,180,40,wall7_options);
            World.add(world,wall7);

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(350,590,700,20,ground_options);
    World.add(world,ground);
   


}

function draw() {
  background(0); 

  ground.shapeColor="brown";
  wall1.shapeColor="yellow"
  wall2.shapeColor="violet"
  wall3.shapeColor="violet"
  wall4.shapeColor="pink"
  wall5.shapeColor="pink"
  wall8.shapeColor="blue"
  wall9.shapeColor="blue"



  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,700,20);
  ellipseMode(RADIUS);
  ellipse(wall15.position.x,wall15.position.y,80,80);
  ellipse(wall6.position.x,wall6.position.y,40,40);
  ellipse(wall7.position.x,wall7.position.y,40,40);
  drawSprites();
}
