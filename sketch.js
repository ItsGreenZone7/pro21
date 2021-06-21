var wall
var bullet
var speed
var weight
var thickness
function setup() {

  createCanvas(1600, 400);
  speed = random(55, 90)
  weight = random(400, 1500)
  bullet = createSprite(50, 200, 50, 10)
  wall = createSprite(1200, 200, thickness, height / 2)
  bullet.velocityX = speed
  thickness = random(22, 83)
  speed = random(30, 52)
  weight = random(223, 321)
  bullet.shapeColor = 'white'
  wall.shapeColor=(80, 80, 80)
}


function draw() {
  background('black');
  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0
    var deformation = 0.5 * weight * speed * speed / (thickness * thickness * thickness)

    if (deformation > 10) {
      wall.shapeColor = 'red'
    }

    if (deformation < 10) {
      wall.shapeColor = 'green'
    }

  }


  drawSprites();
}


function hasCollided(lbullet, lwall) {
  bulletRightEdge = bullet.x + bullet.width
  wallLeftEdge = lwall.x
  if (bulletRightEdge >= wallLeftEdge) {
    return true
  }
  return false
}