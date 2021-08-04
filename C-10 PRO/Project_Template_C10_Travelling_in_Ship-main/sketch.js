var ship;
var sea;
function preload(){
shipImg=loadAnimation("ship-1.png","ship-2.png");
seaImg=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  ship=createSprite(200,200,20,50);
  ship.addAnimation("moving",ship_moving);

  sea=createSprite(100,90,200,20)
  sea.addImage("sea",seaImg);
  sea.x=sea.width/2;

}


function draw() {
  background("blue");

  sea.velocity.x=-2;

  if(sea.x<0) {
    sea.x=sea.width/2;
    }
  
 drawSprites();
}