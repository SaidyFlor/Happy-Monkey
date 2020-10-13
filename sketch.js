var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
 
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
   monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
    ground.velocityX=-4;
    ground.x=ground.width/2;
  console.log(ground.x);

    obstaclesGroup=new Group();
  foodGroup=new Group();
}


function draw() {
   background("lightgray")
  
  
if(keyDown("space")&& monkey.y>100){
  monkey.velocityY=-13;
}
  //add Gravity
  monkey.velocityY = monkey.velocityY+0.8
  
monkey.collide(ground);
  if(ground.x <0){
    ground.x=ground.width/2;
  }
  
  var survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time : "+ survivalTime, 100,50);
  

  food();
  obstacle();
  
  drawSprites();
  if(obstaclesGroup.isTouching(monkey)){
    
    ground.velocityX=0;
    monkey.velocityY=0;
    obstaclesGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    
    obstaclesGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
  }
}

function obstacle(){
  if(frameCount %200 === 0){
    var obstacle = createSprite(600,320,40,10);
    obstacle.addImage(obstacleImage);
     obstacle.velocityX = -6;
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
  
}

function food(){
  if(frameCount %80 ===0){
    var banana = createSprite(600,200,10,20)
    banana.y=random(120,200);
    banana.addImage(bananaImage);
    banana.velocityX=-3;
    
    banana.scale=0.1
  banana.lifetime = 300;
    
     foodGroup.add(banana);
  }
  
}







