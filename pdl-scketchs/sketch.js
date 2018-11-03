//Guardar archivo
function setup() {
  // Create a new file in the sketch directory
  background(100)
  output = createWriter("positions.txt"); 
}

function draw() {
  point(mouseX, mouseY);
  output = (mouseX + "t" + mouseY); // Write the coordinate to the file
  createButton('save')
    .position(10, 10)
    .mousePressed(function() {
      var writer = createWriter('squares.txt');
      for (var i = 0; i < 10; i++) {
        writer.print(i * i);
      }
      writer.close();
      writer.clear();
    });
}

  //Leer archivo .json
/*var palabra

function perload(){
  //palabra = loadJson(mapas.txt)
}

function setup(){
  createCanvas(500,500)
  palabra = loadJSON('mapas.json','json');
  console.log(palabra)
}

function draw(){
  background(100)
  text('Palabra: '+ palabra,250,250)
}
*/


/*//Eliminiar elementos iguales de una lista con muchos for
var listaxa=[1,2,1,2,3,2,3,4,3]


function setup(){createCanvas(800,500)
}

function draw(){
  background(150)
  text('Lista: '+nfc(listaxa),400,250)
  text('Numero: '+nfc(element),400,270)
  text('Numero2: '+nfc(indexElement),400,290)
  filterList(listaxa)
}

function filterList(listax){
  for (var a = listax.length - 1; a >= 0; a--) {
    for (var i = listax.length - 1; i >= 0; i--) {
      element = listax[i] 
      indexElement = i
      for (var j = listax.length - 1; j >= 0; j--) {
        if (element == listax[j] && indexElement !== j) {
          listax.splice(j,1)
        }
      }
    }
  }
}
*/
/*//Poncer pleotas que rebotan
var proys = []
var index = 0

function setup() {createCanvas(800, 500)
  proys[index] = new Proy()
}

function draw() { 
  background(200)
  for(var i = 0; i < proys.length ;i++){
  proys[i].display()
  proys[i].move()
  }
  console.log(index)
  marco()
}

function Proy(){
  this.x = mouseX
  this.y = mouseY
  this.mov = 1
  this.display = function () {
    fill(200,0,0)
    ellipse(this.x,this.y,25,25)
  }
  this.move = function () {
    this.x += this.mov
    this.y += this.mov
      if(this.y >= height || this.y <= 0){
        this.mov *=-1
      }
      if(this.x >= width || this.x <= 0){
        this.x *= -1
      }
  }
}


function marco(){
  line(0,0,0,height)
  line(0,0,width,0)
  strokeWeight(4)
  line(width,0,width,height)
  line(0,height,width,height)
}

function mousePressed(){
  proys.push(new Proy())
}*/


/*//Intento de primera persona
var puntas= {
  p1x:300 ,
  p1y:187.5 ,
  p2x:300 ,
  p2y:312.5 ,
  p3x:500 ,
  p3y:187.5 ,
  p4x:500 ,
  p4y:312.5
}

var puntas2= {
  p1x:350 ,
  p1y:218.75 ,
  p2x:350 ,
  p2y:281.25,
  p3x:450 ,
  p3y:218.75 ,
  p4x:450 ,
  p4y:281.25
}

var puntas3= {
  p1x:0 ,
  p1y:0 ,
  p2x:0 ,
  p2y:500,
  p3x:800 ,
  p3y:0 ,
  p4x:800 ,
  p4y:500
}


var ventana= {
  p1x:220 ,
  p1y:215 ,
  p2x:280 ,
  p2y:230 ,
  p3x:280 ,
  p3y:270 ,
  p4x:220 ,
  p4y:285
}


function setup(){
  createCanvas(800,500)
}

function draw(){
  background(200)
  //rect(250,125,200,125)
  //mov_WASD_centro()
  mov_WASD_avance()
  fondo()
}

function fondo(){
  //Paredes
  fill(250)
  quad(0,0,puntas.p1x,puntas.p1y,puntas.p2x,puntas.p2y,0,height)
  quad(width,0,width,height,puntas.p4x,puntas.p4y,puntas.p3x,puntas.p3y)
  //ventana
  //fill(148,77,6)
  //quad(ventana.p1x -4 ,ventana.p1y -5 ,ventana.p2x +4 ,ventana.p2y -4 ,ventana.p3x +4 ,ventana.p3y +4 ,ventana.p4x -4 ,ventana.p4y +5)
  //fill(166,223,255)
  //quad(ventana.p1x ,ventana.p1y ,ventana.p2x ,ventana.p2y ,ventana.p3x ,ventana.p3y ,ventana.p4x ,ventana.p4y)


  //fondo1
  point(puntas.p1x,puntas.p1y)
  point(puntas.p2x,puntas.p2y)
  point(puntas.p3x,puntas.p3y)
  point(puntas.p4x,puntas.p4y)
  line(0,0,puntas.p1x,puntas.p1y)
  line(0,height,puntas.p2x,puntas.p2y)
  line(width,0,puntas.p3x,puntas.p3y)
  line(width,height,puntas.p4x,puntas.p4y)
  fill(50)
  quad(puntas.p1x,puntas.p1y,puntas.p3x,puntas.p3y,puntas.p4x,puntas.p4y,puntas.p2x,puntas.p2y)

  //fondo2
  point(puntas2.p1x,puntas2.p1y)
  point(puntas2.p2x,puntas2.p2y)
  point(puntas2.p3x,puntas2.p3y)
  point(puntas2.p4x,puntas2.p4y)
  stroke(255,0,0)
  line(0,0,puntas2.p1x,puntas2.p1y)
  line(0,height,puntas2.p2x,puntas2.p2y)
  line(width,0,puntas2.p3x,puntas2.p3y)
  line(width,height,puntas2.p4x,puntas2.p4y)
  stroke(0)
  fill(200,0,0)
  quad(puntas2.p1x,puntas2.p1y,puntas2.p3x,puntas2.p3y,puntas2.p4x,puntas2.p4y,puntas2.p2x,puntas2.p2y)

  //fondo0
  //fill(255,50,150,100)
  //point(puntas3.p1x,puntas3.p1y)
  //point(puntas3.p2x,puntas3.p2y)
  //point(puntas3.p3x,puntas3.p3y)
  //point(puntas3.p4x,puntas3.p4y)
  //line(0,0,puntas3.p1x,puntas3.p1y)
  //line(0,height,puntas3.p2x,puntas3.p2y)
  //line(width,0,puntas3.p3x,puntas3.p3y)
  //line(width,height,puntas3.p4x,puntas3.p4y)
  //quad(puntas3.p1x,puntas3.p1y,puntas3.p3x,puntas3.p3y,puntas3.p4x,puntas3.p4y,puntas3.p2x,puntas3.p2y)
  ////Lineas que avanzan
  //line(puntas2.p1x,puntas2.p1y,puntas2.p2x,puntas2.p2y)
}

function mov_WASD_avance(){
  //W
  if (keyIsDown(87)){
    puntas.p1x -=1.6 
    puntas.p2x -=1.6 
    puntas.p3x +=1.6 
    puntas.p4x +=1.6

    puntas.p1y -=1
    puntas.p2y +=1  
    puntas.p3y -=1  
    puntas.p4y +=1 

    puntas3.p1x +=1.75 
    puntas3.p2x +=1.75 
    puntas3.p3x -=1.75 
    puntas3.p4x -=1.75

    puntas3.p1y +=1 
    puntas3.p2y -=1  
    puntas3.p3y +=1  
    puntas3.p4y -=1 
  }
  //S
  if (keyIsDown(83)){
    ventana.p1x += 5
    ventana.p2x += 5
    ventana.p3x += 5
    ventana.p4x += 5
  }
}

function mov_WASD_centro(){
  //A
  if (keyIsDown(65)){
    puntas.p1x -= 5 
    puntas.p2x -= 5 
    puntas.p3x -= 5 
    puntas.p4x -= 5 
  }
  //D
  if (keyIsDown(68)){
    puntas.p1x += 5 
    puntas.p2x += 5 
    puntas.p3x += 5 
    puntas.p4x += 5 
  }
  //W
  if (keyIsDown(87)){
    puntas.p1y -= 5 
    puntas.p2y -= 5 
    puntas.p3y -= 5 
    puntas.p4y -= 5  
  }
  //S
  if (keyIsDown(83)){
    puntas.p1y += 5 
    puntas.p2y += 5 
    puntas.p3y += 5 
    puntas.p4y += 5 
  }
}*/

////Pantalla de START
////Variables de cursor()
//var cursor = {
//    x1: 0,
//    y1: 0,
//    x2: 0,
//    y2: 0,
//    x3: 0,
//    y3: 0
//  }
//
////Variables de bg_menu()
//var bg = {
//  col1:50,
//  col2:0,
//  col3:0
//}
//var bg_spped = {
//  s1: 0.9,
//  s2: 0.6,
//  s3: 0.3
//}
////Variables de grid()
//var limites ={
//  ancho: 799 ,
//  alto: 499
//}
//
//var mapa = 0
//
//function setup(){
//  createCanvas(800,500)
//  noCursor()
//}
//
//function draw(){
//  mapas()
//
//
//  //Cursor
//  cursor.x1 = mouseX
//  cursor.y1 = mouseY
//  cursor.x2 = mouseX + 7
//  cursor.y2 = mouseY + 22
//  cursor.x3 = mouseX + 17
//  cursor.y3 = mouseY + 17
//  fill(255)
//  stroke(100)
//  strokeWeight(1)
//  triangle(cursor.x1,cursor.y1,cursor.x2,cursor.y2,cursor.x3,cursor.y3)
//  strokeWeight(6)
//  line(mouseX, mouseY, pmouseX, pmouseY)
//  print(pmouseX + ' ------> ' + mouseX)
//}
//
//function mapas(){
//  if (mapa == 0) {
//    menu()
//  }
//  if (mapa == 10) {
//    grid()
//  }
//}
//
//function mapa1(){
//
//}
//
//function menu(){
//  background(bg.col1,bg.col2,bg.col3)
//  bg.col1 += bg_spped.s1
//  bg.col2 += bg_spped.s2
//  bg.col3 += bg_spped.s3
//  if (bg.col1 >= 100 && bg.col2 >= 20 && bg.col3 >= 10 ) {
//    bg_spped.s1 = -0.9
//    bg_spped.s2 = -0.6
//    bg_spped.s3 = -0.3
//  }else if (bg.col1 <= 40 && bg.col2 <= 5 && bg.col3 <= 5) {
//    bg_spped.s1 = 0.9
//    bg_spped.s2 = 0.6
//    bg_spped.s3 = 0.3
//  }
//  fill(255)
//  stroke(0)
//  strokeWeight(3)
//  rect(350,205,100,45)
//  fill(50)
//  noStroke()
//  textSize(40)
//  text('Start',355,240)
//  if(mouseIsPressed && mouseX >=350 && mouseY <= 250 && mouseX <= 450 && mouseY >= 205){
//    mapa = 10
//  }
//
//}
//
////Cuadricula
//function grid(){
//  strokeWeight(1)
//  stroke(255,0,0)
//  line(0,0,width,0)
//  line(0,100,width,100)
//  line(0,200,width,200)
//  line(0,300,width,300)
//  line(0,400,width,400)
//  line(0,limites.alto,width,limites.alto)
//  line(1,0,1,height)
//  line(100,0,100,height)
//  line(200,0,200,height)
//  line(300,0,300,height)
//  line(400,0,400,height)
//  line(500,0,500,height)
//  line(600,0,600,height)
//  line(700,0,700,height)
//  line(limites.ancho,0,limites.ancho,height)
//}

//Pelota que se mueve con WASD y corre con Shift
//var circle = {
//  x:400 ,
//  y:250
//}
//
//var f = 0
//var l = 5
//
//
//function setup(){
//  createCanvas(800,500)
//}
//
//function draw(){
//  //Shift
//  if (keyIsDown(16)){
//    f = 5
//  }else{
//    f = 0
//  }
//  //A
//  if (keyIsDown(65)){
//    circle.x -= l + f
//  }
//  //D
//  if (keyIsDown(68)){
//    circle.x += l + f
//  }
//  //W
//  if (keyIsDown(87)){
//    circle.y -= l + f 
//  }
//  //S
//  if (keyIsDown(83)){
//    circle.y += l + f
//  }
//  background(0)
//  noFill()
//  stroke(255)
//  strokeWeight(5)
//  ellipse(circle.x,circle.y,50)
//}

//Pelota que rebota por todos lados
//var player_one_top = {
//  x1: 40,
//  y1: 100,
//  x2: 20,
//  y2: 100
//}
//
//var speed = {
//  x:5,
//  y:5
//}
//var ball = {
//  x: 0 ,
//  y: 250
//}
//
//function setup(){
//  createCanvas(800,500)
//}
//
//function draw(){
//  background(0)
//  //fill(255)
//  //rect(player_one_top.x1,player_one_top.y1,player_one_top.x2,player_one_top.y2)
//  if (keyIsDown(UP_ARROW)) {
//    player_one_top.y1 = player_one_top.y1 - 5
//  }
//  if (keyIsDown(DOWN_ARROW)) {
//    player_one_top.y1 = player_one_top.y1 + 5
//  }
//  //fill(255,50,50)
//  //rect(40,100,20,50)
//  fill(255)
//  ball.x = ball.x + speed.x
//  ball.y = ball.y + speed.y
//  ellipse(ball.x,ball.y,50)
//  if(ball.x >= width){
//    speed.x = -5
//    speed.y = random(-5,5)
//  } else if (ball.x <= 0) {
//    speed.x = +5
//    speed.y = random(-5,5)
//  }else if(ball.y >= height){
//    speed.y = -5
//    speed.x = random(-5,5)
//  }else if (ball.y <= 0){
//    speed.y = +5
//    speed.x = random(-5,5)
//  }
//}

//Prender apagar luz
//var on = true
//
//function setup(){
//  createCanvas(800,500)
//}
//
//function draw(){
//  if(on) {
//    background(0)
//  } else{
//    background(255)
//  }
//
//}
//
//function mousePressed(){
//  on = !on
//}

//Pinta el cuadrado cuando el mouse esta sobre el 
//function setup(){
//  createCanvas(800,500)
//}
//
//function draw(){
//  background(100)
//  noFill()
//  stroke(50,100,150)
//  strokeWeight(5)
//  if(mouseX >= 400 && mouseX <=480 && mouseY >=170 && mouseY <= 250  ) {
//    fill(150,0,0)
//  }
//  quad(400,250,480,250,480,170,400,170)
//
//}



//Bouncing Ball
//var y = 0
//var speed = 5
//
//function setup(){
//  createCanvas(800,500)
//}
//
//function draw(){
//  background(200)
//  y = y + speed
//  if (y >= height) 
//    speed = -5
//  if (y <= 0)
//    speed = + 5
//  ellipse(400,y,50)
//}





