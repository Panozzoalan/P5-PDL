//Pelota que rebota por todos lados
var player_one_top = {
 x1: 40,
 y1: 100,
 x2: 20,
 y2: 100
}

var speed = {
 x:5,
 y:5
}
var ball = {
 x: 0 ,
 y: 250
}

function setup(){
 createCanvas(windowWidth,windowHeight)
}

function draw(){
 background(0)
 PDL()
 //fill(255)
 //rect(player_one_top.x1,player_one_top.y1,player_one_top.x2,player_one_top.y2)
 if (keyIsDown(UP_ARROW)) {
   player_one_top.y1 = player_one_top.y1 - 5
 }
 if (keyIsDown(DOWN_ARROW)) {
   player_one_top.y1 = player_one_top.y1 + 5
 }
 //fill(255,50,50)
 //rect(40,100,20,50)
 fill(255)
 ball.x = ball.x + speed.x
 ball.y = ball.y + speed.y
 ellipse(ball.x,ball.y,50)
 if(ball.x >= width){
   speed.x = -5
   speed.y = random(-5,5)
 } else if (ball.x <= 0) {
   speed.x = +5
   speed.y = random(-5,5)
 }else if(ball.y >= height){
   speed.y = -5
   speed.x = random(-5,5)
 }else if (ball.y <= 0){
   speed.y = +5
   speed.x = random(-5,5)
 }
}