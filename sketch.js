var bananaImage, obstacleImage, obstacleGroup,background,player,player_running,banana,invisground, bananaGroup,obstacle, scene;
var score = 0;
var gameState = 1;
function preload()  {
  scene1 = loadImage("jungle.jpg");
  player_dead = ("Monkey_01.png");
   player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 player_dead = ("Monkey_01.png")
 
  bananaImage = loadImage("banana.png");
  obstacle_img = loadImage("stone.png");
}


function setup() {
  createCanvas(400, 400);  
  scene = createSprite(200,200,400,400);
    scene.x = scene.width /2;
  scene.velocityX = -4;
  scene.addImage("scenei",scene1);
  monkey = createSprite(100,250,50,50);
  monkey.addAnimation("moving", player_running);
  monkey.scale = 0.10;
  randomHeight = (random(100,700));
  bananaImage.scale = 0.1;
invisground = createSprite(200,350,400,20);
  invisground.visible = true;
  bananaGroup = createGroup();
  obstacleGroup = createGroup();

  
}

function draw() {
  
  console.log(score);
  text("Score: "+score, 300,50); 
  drawSprites();
  randomHeight = (random(100,200));
    text("Score: "+score, 300,50); 
  if (gameState ===1) {
  monkey.collide(invisground)
     bananaSpawn();
  obstacleSpawn();
  monkey.velocityY = monkey.velocityY + 2; 
  if(keyDown("space")&&monkey.y>284) {
    monkey.velocityY  = monkey.velocityY-30;
  } 
  if(monkey.isTouching(bananaGroup)&&monkey.scale<.18) {
 score = score+2;
    bananaGroup.destroyEach();
    monkey.scale = monkey.scale +0.01; 
  }
      if (scene.x < 0){
    scene.x = scene.width/2;
  }   
  if(monkey.isTouching(obstacleGroup)) {

    score = 0;
    gameState = 0;
  }
  else if(monkey.isTouching(bananaGroup)){
     
    score = score+2
    bananaGroup.destroyEach();
  }}
  else if(gameState === 0) {
    monkey.velocityX = 0;
     monkey.velocityY = 0;
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.velocityX = 0;
    obstacleGroup.velocityY = 0;
    score = 0;
    scene.velocityX = 0;
 
  }
}
function bananaSpawn() {
  if(frameCount % 60 === 0) {
  var banana = createSprite(400,randomHeight,20,20);
  banana.addImage("bananai",bananaImage);
  banana.scale = 0.05;
  banana.velocityX = -8; 
    banana.lifetime = 50;
    if(monkey.x>300) {
      monkey.x = 300;
    }
    bananaGroup.add(banana);
}} function bananabreak() {
  bananaGroup.visible = false;
}
function obstacleSpawn() {
   if(frameCount % 180 === 0) {
  var obstacle = createSprite(400,325,20,20);
  obstacle.addImage("obstaclei",obstacle_img);
  obstacle.scale = 0.10;
  obstacle.velocityX = -10; 
    obstacleGroup.add(obstacle);
}}