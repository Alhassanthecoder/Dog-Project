
function preload() {
  jump_startImage = loadImage("assets/jump_start.png")
  jump_endImage = loadImage("assets/jump_end.png")
  run1Img = loadImage("assets/run_1.png")
  run2Img = loadImage("assets/run_2.png")
  backgroundImg = loadImage("./assets/background.png");
  dog_boneImg = loadImage("assets/dog_bone.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  dog = createSprite(300,735,50,50)
  dog.addImage(run1Img,"run")

}

function draw() {
  background(backgroundImg);
 if(keyDown("space")){
  dog.velocityX = -10
  console.log(dog.y)
  
  

 }
  drawSprites();
}

function createObstacles(){


}