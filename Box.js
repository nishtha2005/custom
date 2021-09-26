class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    var options = {
      'restitution':0.0,
      'friction':10000000.0,
      'density':4000000.0,
     
  }
    this.image = loadImage("sprites/rock.png");
    
  }
  display(){
    
    //console.log(this.body.speed);
    if(this.body.speed < 3){
     super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity -10;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 100, 100);
      pop();
    }
    }

    }
 
 


