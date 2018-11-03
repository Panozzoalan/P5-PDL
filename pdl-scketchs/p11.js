//Intento de primera persona
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
  createCanvas(windowWidth,windowHeight)
}

function draw(){
  background(200)
  //rect(250,125,200,125)
  //mov_WASD_centro()
  mov_WASD_avance()
  fondo()
  fill(0)
  noStroke()
  textSize(20)
  text("It's a fail of first person", 10,100)
  PDL()
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
}