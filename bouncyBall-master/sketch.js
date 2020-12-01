const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(200,380,400,20)
    box=new Box(200,100,50,50)
    box2=new Box(150,250,50,25)
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display()
    box.display()
    box2.display()
}