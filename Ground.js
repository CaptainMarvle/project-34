class Ground{

    constructor(x,y,width,height){
    
     var options = {
    
       isStatic : true
    
     }
    
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      World.add(world,this.body);
    
    }
    
    display(){
    
    stroke("lightBlue");
    strokeWeight(0);  
    fill("#8ED8F2");
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height)
    //this.body.visible = 0;

    
    }
    
    
    }