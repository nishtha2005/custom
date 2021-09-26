class Log extends BaseClass{
  constructor(x, y, width, height, angle) {
    super(x,y,width,height);
    var options = {
      'restitution':0.1,
      'friction':1000000000000000000000.0,
      'density':1.0,
    
    
    }
   
    this.body = Bodies.rectangle(x, y, width, height, options);
   this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
    Matter.Body.setAngle(this.body, angle);
  }

}