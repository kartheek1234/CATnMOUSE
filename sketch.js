var mouse,mouse1,mouse2mouseImg;
var cat,cat1,cat2,catImg;
var garden,gardenImg;

function preload() {
    //load the images here
    gardenImg = loadImage("garden.png")

    catImg1= loadAnimation("cat1.png");
    catImg2=loadAnimation("cat2.png","cat3.png");
    catImg3= loadAnimation("cat4.png");
    mouseImg1=loadAnimation("mouse1.png");
    mouseImg2= loadAnimation("mouse2.png","mouse3.png");
    mouseImg3=loadAnimation("mouse4.png");

}

function setup(){
    createCanvas(800,510);
    
    cat = createSprite(580,450);
    cat.addAnimation("catsleeping",catImg1);
    cat.scale = 0.12;

    mouse = createSprite(130,450);
    mouse.addAnimation("mousestanding",mouseImg1);
    mouse.scale = 0.12;
}

function draw() {

    background(gardenImg);
    
    if( cat.x - mouse.x < (cat.width - mouse.width)/2){
      cat.velocityX=0;
      cat.addAnimation("catLast", catImg3);
      cat.x =300;
      cat.scale=0.12;
      cat.changeAnimation("catLast");
      mouse.addAnimation("mouseLast", mouseImg3);
      mouse.scale=0.12;
      mouse.changeAnimation("mouseLast");
    }
   
    drawSprites();
}


function keyPressed(){
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catrunning",catImg2);
    cat.changeAnimation("catrunning");
    mouse.addAnimation("mouseteasing",mouseImg2);
    mouse.changeAnimation("mouseteasing");
    mouse.frameDelay = 25
  }
}
