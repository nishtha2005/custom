const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot,bg,bg1;
var score = 0;
var shots=3;
var gameState = "play";

function preload() {
   
    bg=loadImage("sprites/bg2.jpg")
    bgm=loadSound("sprites/URI BGM.mp3")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //bgm.play();
    //bgm.loop();
   
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    sold=new Soldier(100,150,100,100)
    pig1 = new Pig(800, 350);
    pig3 = new Pig(810,350);
   
    log1 = new Log(650,350,200,30,PI/2);
    log3 = new Log(790,50,450,10,PI*0);
    log2 = new Log(870,300,200,30,PI/2);
    //pig2=new Pig(750,350)

    bird = new Bird(200,50);

  
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(bg)
    ground.display();
  if(gameState==="play"){
     
   
        textSize(35)
        fill("white")
        text("Shots: " + shots, width-150, 50)
        textSize(35)
        fill("white")
        text("Score: " + score, width-300, 50)
 
    Engine.update(engine);
    //strokeWeight(4);
            log1.display(); 
            log2.display()
            log3.display(); 
            bird.display();
            platform.display();
         
            sold.display();
            //log6.display();
            slingshot.display(); 
            
                pig1.display();
                pig1.score();
               
                pig3.display();
                pig3.score();
                textSize(10);
                fill("white")
                text("press 'space' to get the bomb back",20,340)
                //mouseDragged();
                //mouseReleased();
                //keyPressed();
                if(score===2){
                    gameState="won";
                }
                if(shots===0){
                  gameState="end"
                }
             }
                if(gameState==="won"){
                    fill("red")
                    textSize(35)
                    text("You won",600,200)   
                    log1.visible=0;
                    log2.visible=0;
                    log3.visible=0;
                    platform.visible=0;
                    slingShot=0;
                    sold.visible=0;
                }
        
          if(gameState==="end"){
              fill("red")
              textSize(35)
              text("You Lost",600,200)   
              log1.visible=0;
              log2.visible=0;
              log3.visible=0;
              platform.visible=0;
              slingShot=0;
              sold.visible=0;
              
              if(keyCode===65){
                gameState="reset"
            }
          }
          if(gameState==="reset"){
              gameState="play"
            log1.x=650;
            log1.y=350;
            log3.x=790;
            log3.y=50;
            log2.x=870;
            log2.y=300;
            log1.width=150;
            log1.height=30;
            log2.width=150;
            log2.height=30;
            log3.width=450;
            log3.height=10;
            log1.angle=PI/2;
            log2.angle=PI/2;
            log1.angle=PI/0;
            score=0;
            
          }
    
   
}

function mouseDragged(){
    // if (gameState!=="launched"){
         Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    // }
 }
 
 
 function mouseReleased(){
     slingshot.fly();
     //gameState = "launched";
 }
 
 function keyPressed(){
     if(keyCode === 32){
  slingshot.attach(bird.body);
   bird.trajectory=[]
   Matter.Body.setPosition(bird.body, {x: 200 , y: 50});
   shots-=1
     }
 }


 

  
