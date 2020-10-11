
var monkey , monkey_running;
var banana ,bananaImage,bananaGroup, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime=0;
var score=0;


function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}


function setup() {
  createCanvas(600,600)
  
monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
    ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
bananaGroup=new Group();
obstacleGroup=new Group();
  
}

function draw() {
  background("black");
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50);
  
   stroke("white");
  textSize(20);
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50)
  
  monkey.collide(ground)
  
if (ground.x >0){
      ground.x = ground.width/2;
    }
  
   if(keyDown("space")&& monkey.y >=155) { 
       monkey.velocityY = -12;
    }

monkey.velocityY=monkey.velocityY + 0.6; 
  
    if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score=score+2;
  }
  

  spawnBananas();
  spawnObstacles();
  drawSprites();
}

function spawnBananas() {
  
   if (frameCount % 80 === 0){
    banana=createSprite(300,330,20,20);
     banana.y=Math.round(random(120,200));
    banana.scale = 0.1;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 100;
 bananaGroup.add(banana);
   }
}

function spawnObstacles(){
  
   if (frameCount % 300 === 0){
 obstacle=createSprite(300,330,20,20);
 obstacle.y=Math.round(random(120,200));
 obstacle.scale = 0.1;
 obstacle.addImage(obstacleImage);
 obstacle.scale = 0.1;
 obstacle.velocityX = -3;
 obstacle.lifetime = 100;
 obstacleGroup.add(obstacle);
   }
}


 