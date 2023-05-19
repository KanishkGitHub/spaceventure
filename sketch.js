var spaceship
var space
var alien,alienG
var jet,jetG
var meteor,meteorG
var missile,missileG

function preload()
{
  spaceshipImg=loadImage("./Assets/spaceship.png")
  space_bg=loadImage("./Assets/Space 2.jpg")
  alienImg=loadImage("./Assets/Alienship.png")
  jetImg=loadImage("./Assets/spaceship2png.png")
  meteorImg=loadImage("./Assets/meteor.png")
  missileImg=loadImage("./Assets/missile.png")
}




function setup() {

  createCanvas(470,700);
  space=createSprite(200,500)
  space.addImage(space_bg)
  space.velocityY=2
  space.scale=1.2

  spaceship=createSprite(220, 600, 50, 50);
  spaceship.addImage(spaceshipImg)
  spaceship.scale=0.27
 
  meteorG= new Group()
  alienG = new Group()
  jetG = new Group()
  missileG = new Group()
}

function draw() {
  background(180);  
//space.velocityY=4
  if(space.y > 400){
    space.y = height/2
  } 

  if (keyDown("RIGHT_ARROW")){
    spaceship.x=spaceship.x+8
  }
  if (keyDown("LEFT_ARROW")){
    spaceship.x=spaceship.x-8
  }

  if (keyDown("UP_ARROW")){
    createMissile()
  }

  if (missileG.isTouching(alienG)){
      alienG.destroyEach()
      missileG.destroyEach()
  }
  if (missileG.isTouching(jetG)){
    jetG.destroyEach()
    missileG.destroyEach()
 }
 if (spaceship.isTouching(meteorG)){
     spaceship.destroy()
     meteorG.destroyEach()
 }
 if (spaceship.isTouching(jetG)){
  spaceship.destroy()
  jetG.destroyEach()
}
if (spaceship.isTouching(alienG)){
  spaceship.destroy()
  alienG.destroyEach()
}


createAlien()
createMeteor()
createjet()


  drawSprites();

  



}
function createMeteor(){
  if (World.frameCount % 120==0){
    meteor = createSprite(Math.round(random(5,470)),20,50,50)
  //meteor=createSprite(220,20,50,50)
  meteor.addImage(meteorImg)
  meteor.scale=0.05
  meteor.velocityY=5
  meteorG.add(meteor)
}
}
function createAlien(){
  if (World.frameCount % 385==0){
  alien = createSprite(Math.round(random(5,470)),20,50,50)
  //alien=createSprite(220,20,50,50)
  alien.addImage(alienImg)
  alien.scale=0.6
  alien.rotation=180
  alien.velocityY=7
  alienG.add(alien)
}
}

function createjet(){
  if (World.frameCount % 220==0){
  jet = createSprite(Math.round(random(5,470)),20,50,50)
  //alien=createSprite(220,20,50,50)
  jet.addImage(jetImg)
  jet.scale=0.2
  jet.rotation=180
  jet.velocityY=7
  jetG.add(jet)
}
}

function createMissile(){
  if (World.frameCount % 5==0){
  missile = createSprite(missileG.x=spaceship.x,600,50,50)
  missile.addImage(missileImg)
  missile.scale=0.025
  missile.velocityY=-7
  missileG.add(missile)
  }
}
