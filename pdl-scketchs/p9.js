//Pelota que se mueve con WASD y corre con Shift
var circle = {
 x:400 ,
 y:250
}

var f = 0
var l = 5


function setup(){
 createCanvas(windowWidth,windowHeight)
}

function draw(){
 //Shift
 if (keyIsDown(16)){
   f = 5
 }else{
   f = 0
 }
 //A
 if (keyIsDown(65)){
   circle.x -= l + f
 }
 //D
 if (keyIsDown(68)){
   circle.x += l + f
 }
 //W
 if (keyIsDown(87)){
   circle.y -= l + f 
 }
 //S
 if (keyIsDown(83)){
   circle.y += l + f
 }
 background(0)
 PDL()
 noStroke()
 fill(255)
 textSize(30)
 text("Move: W, A, S, D and Shift ", 100,100)
 noFill()
 stroke(255)
 strokeWeight(5)
 ellipse(circle.x,circle.y,50)
}