////Pantalla de START
var circle = {
 x:400 ,
 y:250
}

var f = 0
var l = 5
////Variables de cursor()
var cursor = {
   x1: 0,
   y1: 0,
   x2: 0,
   y2: 0,
   x3: 0,
   y3: 0
 }

//Variables de bg_menu()
var bg = {
 col1:50,
 col2:0,
 col3:0
}
var bg_spped = {
 s1: 0.9,
 s2: 0.6,
 s3: 0.3
}
//Variables de grid()
var limites ={
 ancho: 799 ,
 alto: 499
}

var mapa = 0

function setup(){
 createCanvas(windowWidth,windowHeight)
 noCursor()
}

function draw(){
 mapas()


 //Cursor
 cursor.x1 = mouseX
 cursor.y1 = mouseY
 cursor.x2 = mouseX + 7
 cursor.y2 = mouseY + 22
 cursor.x3 = mouseX + 17
 cursor.y3 = mouseY + 17
 fill(255)
 stroke(100)
 strokeWeight(1)
 triangle(cursor.x1,cursor.y1,cursor.x2,cursor.y2,cursor.x3,cursor.y3)
 strokeWeight(6)
 line(mouseX, mouseY, pmouseX, pmouseY)
 print(pmouseX + ' ------> ' + mouseX)
}

function mapas(){
 if (mapa == 0) {
   menu()
 }
 if (mapa == 10) {
   mapa1()
 }
}

function mapa1(){
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
background(bg.col1,bg.col2,bg.col3)
 PDL()
 noStroke()
 fill(255)
 textSize(30)
 text("Move: W, A, S, D and Shift ", 100,100)
 fill(0)
 stroke(255)
 strokeWeight(5)
 ellipse(circle.x,circle.y,50)
}

function menu(){
 background(bg.col1,bg.col2,bg.col3)
 bg.col1 += bg_spped.s1
 bg.col2 += bg_spped.s2
 bg.col3 += bg_spped.s3
 if (bg.col1 >= 100 && bg.col2 >= 20 && bg.col3 >= 10 ) {
   bg_spped.s1 = -0.9
   bg_spped.s2 = -0.6
   bg_spped.s3 = -0.3
 }else if (bg.col1 <= 40 && bg.col2 <= 5 && bg.col3 <= 5) {
   bg_spped.s1 = 0.9
   bg_spped.s2 = 0.6
   bg_spped.s3 = 0.3
 }
 PDL()
 fill(255)
 stroke(0)
 strokeWeight(3)
 rect(350,205,110,45)
 fill(50)
 noStroke()
 textSize(40)
 text('Start',355,240)
 if(mouseIsPressed && mouseX >=350 && mouseY <= 250 && mouseX <= 450 && mouseY >= 205){
   mapa = 10
 }

}