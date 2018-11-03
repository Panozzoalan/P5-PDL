//Circulo en mov constante
var circle = {
 x: 0,
 y: 230,
 diam: 50
}

function setup() {
 createCanvas(windowWidth,windowHeight)
 //noCursor()
}


function draw(){
 background(200)
 PDL()
 fill(random(255),random(255),random(255))
 ellipse(circle.x, circle.y, circle.diam)
 circle.x = circle.x + 10 
 //circle.diam = circle.diam + 1 
 while(circle.x > windowWidth) {
   circle.x = 0
 }
}

