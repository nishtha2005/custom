class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,100,100);
    this.image = loadImage("sprites/terrorist.png");
    this.sound=loadSound("sprites/lose.mp3");
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 1){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity -20;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 100, 100);
     pop();
   }
  }

 score(){
    if (this.Visiblity < 0 && this.Visiblity > -10){
      score+=1;
      this.sound.play()
    }
  }



}