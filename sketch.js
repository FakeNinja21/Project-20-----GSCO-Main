var car, wall, speed, weight;

function setup() {
  createCanvas(1200,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "white";

  wall = createSprite(1100,200,60,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);  

  if(wall.x - car.x < (car.width + wall.width)/2){
      car.velocityX = 0;

    var deformation = (0.5 * weight * speed * speed)/22500;
    if(deformation < 80){
      car.shapeColor = "green";
    }
    if(deformation > 80 && deformation < 180){
      car.shapeColor = color(230,230,0);
    }
    if(deformation > 180){
      car.shapeColor = "red";
    }
  }

  drawSprites();
}