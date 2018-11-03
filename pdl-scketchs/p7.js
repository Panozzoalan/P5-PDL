//Prender apagar luz
var on = true

function setup(){
 createCanvas(windowWidth,windowHeight)
}

function draw(){
 if(on) {
   background(0)
   fill(255)
   textSize(30)
   text("Click for turn on",100,100)
 } else{
   background(255)
   fill(0)
   textSize(30)  
   text("Click for turn off",100,100)
 }
 PDL()

}

function mousePressed(){
 on = !on
}
