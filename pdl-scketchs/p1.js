//Cursor con colres y formas cambiantes
var col1= 0
var col2= 50 
var col3= 50
var tam = 0
var tam2 = 1000
function setup() {
	 createCanvas(windowWidth,windowHeight)
	 noCursor()
	 background(200)
}

function draw() {
  PDL()
 //noStroke()
 fill(random(255),random(255),random(255))
 if (tam < 1000){
   tam = tam + 0.1
   col1 = col1 + 0.1
   ellipse(mouseX,mouseY,tam,tam)
   if (col1 > 255){
     col1 = 50
     col2 = 100
     col3 = 20
   }
  }else{
   tam2 = tam2 - 0.1
   rect(mouseX,mouseY,tam2,tam2)
  }
}

