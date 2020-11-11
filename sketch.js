var car ,wall, thickness
var speed,wheigt

function setup() {
createCanvas(1600,400);

 bullet= createSprite(50,200,50,50);
 wall= createSprite(1500,200,60,height/2);

speed=random(223,321);
wheigt=random(30,52);
thickness=random(22,83);

bullet.velocityX=speed;

}

function draw() {
  background('black');  
  drawSprites();

  bullet.depth=wall.depth;
  bullet.depth=bullet.depth+1;

  if(hasCollided(bullet,car)){

bullet.velocityX=0;
var damage=0.5 * wheigt * speed *speed / (thickness *thickness *thickness)

if(damage>10){
wall . shapeColor=color(255,0,0);
}

if(damage<10){
  wall.shapeColor=color(0,255,0);
}

  }
}


function hasCollided(lbullet,lwall){

bulletRightEdges=lbulet.x +lbullet.width;
wallLeftEdges=lwall.x;

if(bulletRightEdges>=wallLeftEdges){
  return true;
}
  return false;
 }








