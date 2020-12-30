var car,wall,speed,weight

function setup() {
  createCanvas(1600,400);
  car =createSprite(200,200,60,60)
  wall =createSprite(1500,200,60,height/2)
  wall.shapecolor(80,80,80)
}

function draw() {
  background (0,0,0);  
  drawSprites();
}