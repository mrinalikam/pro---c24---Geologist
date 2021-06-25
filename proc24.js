const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone;
var rubber;
var iron;
var ball1,ball2,ball3,ball4,ball5;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(300,100);
    rubber = new Rubber(400,75,50);
  stone = new Stone(500,140);
iron = new Iron(550,65);

ball1 = new Ball(600,300,10);
ball2 = new Ball(700,400,10);
ball3 = new Ball(800,500,10);
ball4= new Ball (900,550,10);
ball5=new Ball (1000,600,10);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
stone.display();
iron.display();
ball1.display();
ball2.display();
ball3.display();    
 ball4.display();
 ball5.display();

}