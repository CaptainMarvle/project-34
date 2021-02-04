class Monster{

  constructor(x,y,w,h){

    var options = {

    'friction' : 1.0,
    'density' : 0.04,
    'restitution' : 0.8

   }

   this.x = x;
   this.y = y;
   this.w = w;
   this.h = h;
   this.image = loadImage("images/Monster-02.png");
   this.body = Bodies.rectangle(this.x, this.y, this.w, this.height, options);
   
   World.add(world,this.body);

  }

  display(){

    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, 100, 100);
    pop();

  }


}