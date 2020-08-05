var slingshot,ground1,ground2,ground3,polygon1,polygon_img;

var box24, box1,box2,box3,box4,box5,box6,box7,box8,box9, 
box25,box10,box11,box12,box13,box14,box23,box15,box16,box17, 
box22,box18,box19,box20,box21;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload(){
  polygon_img = loadImage("polygon.jpg")
  
}

function setup() {
	createCanvas(1200, 700);

  
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
 
  ground1= new Ground(600,690,width,30);
  ground2= new Ground(1000,400,290,30);
  ground3= new Ground(600,500,350,30);

  
  box1= new Box(895+20,350 );
  box2= new Box(935+20,350 );
	box3= new Box(975+20,350 );
  box4= new Box(1035,350 ); 
  box5= new Box(1055+20,350 );
	box6= new Box(935+20,330 );
	box7= new Box(975+20,330 );
  box8= new Box(1035,330 );
  box9= new Box(975+20,310 );
  
  box10= new Box(485,470 );
  box11= new Box(525,470 );
  box12= new Box(565,470 );
  box13= new Box(605,470 );
  box14= new Box(645,470 );
  box15= new Box(685,470 );
  box16= new Box(725,470 );

  box17= new Box(525,450 );
  box18= new Box(565,450 );
  box19= new Box(605,450 );
  box20= new Box(645,450 );
  box21= new Box(685,450 );

  box22= new Box(565,430 );
  box23= new Box(605,430 );
  box24= new Box(645,430 );

  box25= new Box(605,410 );
  
  
  polygon1 = Bodies.circle(50,200,20);
  
  World.add(world,polygon1);
  slingshot = new SlingShot(this.polygon1,{x:100, y:200});

  	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(234, 242, 0);
  
  ground1.display();
  ground2.display();
  ground3.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  imageMode(CENTER)
  image(polygon_img,polygon1.position.x,polygon1.position.y,40,40);
  slingshot.display();
   
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===32){
      console.log ("pressed space key");
      slingshot.attach(this.polygon1);
  }
  }
  

function mouseDragged(){
    Matter.Body.setPosition(polygon1, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

