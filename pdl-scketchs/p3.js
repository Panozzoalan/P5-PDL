//Cambiador de color en base al lugar del circulo
var col1 = 0
var col2 = 0

function setup(){
 createCanvas(windowWidth,windowHeight)
 //noCursor()
}

function draw(){
 noCursor()
 col = map(mouseX,0,840,0,255)
 col2 = map(mouseX,0,840,255,0)
 background(col)
 PDL()
 fill(col2)
 ellipse(mouseX,mouseY,50)
}
