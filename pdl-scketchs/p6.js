//Pinta el cuadrado cuando el mouse esta sobre el 
function setup(){
 createCanvas(windowWidth,windowHeight)
}

function draw(){
 background(100)
 PDL()
 textSize(30)
 text("Hey!",440,150)
 noFill()
 stroke(50,100,150)
 strokeWeight(5)
 if(mouseX >= 400 && mouseX <=480 && mouseY >=170 && mouseY <= 250  ) {
   fill(150,0,0)
 }
 quad(400,250,480,250,480,170,400,170)

}
