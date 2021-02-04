class Hero{

  constructor(x,y,w,h){

     var options = {

        'frictionAir' : 0.005,
        'density' : 1

     }

     this.x = x;
     this.y = y;
     this.w = w;
     this.h = h;

      this.body = Bodies.rectangle(this.x, this.y, this.w,this.h, options);
     this.image = loadImage("images/Superhero-01.png");
    
     World.add(world,this.body);


  }

  display(){

    var pos = this.body.position
    var angle = this.body.angle

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, 350, 100);
    pop();

  }

}