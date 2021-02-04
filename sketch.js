const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var monster1;
var hero, rope;
var backgroundImage;
var ground;
var rope;

function preload() {
//preload the images here
//heroImage = loadImage("images/Superhero-01.png");
//monster1Image = loadImage("images/Monster-01.png");
backgroundImage = loadImage("images/GamingBackground.png")

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  monster1 = new Monster(600,100,100,100);

  box1 = new Box(900, 130, 70, 70);
  box2 = new Box(900, 200, 70, 70);
  box3 = new Box(900, 270, 70, 70);
  box4 = new Box(900, 340, 70, 70);
  box5 = new Box(900, 410, 70, 70);
  box6 = new Box(900, 480, 70, 70);
  box7 = new Box(900, 550, 70, 70);

  box8 = new Box(800, 130, 70, 70);
  box9 = new Box(800, 200, 70, 70);
  box10 = new Box(800, 270, 70, 70);
  box11 = new Box(800, 340, 70, 70);
  box12 = new Box(800, 410, 70, 70);
  box13 = new Box(800, 480, 70, 70);
  box14 = new Box(800, 550, 70, 70);

  box15 = new Box(700, 200, 70, 70);
  box16 = new Box(700, 270, 70, 70);
  box17 = new Box(700, 340, 70, 70);
  box18 = new Box(700, 410, 70, 70);
  box19 = new Box(700, 480, 70, 70);
  box20 = new Box(700, 550, 70, 70);

  hero = new Hero(100,75,350, 100);

  rope = new Rope(hero.body, {x: 200, y: 75});


}

function draw() {
  background(backgroundImage);

  ground.display();
  monster1.display();
  hero.display();

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

  rope.display();

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}

