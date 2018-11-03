//Pantalla con puntos random 
function setup(){
 createCanvas(windowWidth,windowHeight)
 background(200)
}

function draw(){
 PDL()
 noStroke()
 fill(random(200),50,random(200),100)
 ellipse(random(width),random(height),20,20,20)

}