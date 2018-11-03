//Cursor
var cursor = {
 x1: 0,
 y1: 0,
 x2: 0,
 y2: 0,
 x3: 0,
 y3: 0
}

function setup(){
 createCanvas(windowWidth,windowHeight)
 noCursor()
}

function draw(){
 background(50)
 textSize(50)
 text("It's only a custom cursor :)",50,50)
 cursor.x1 = mouseX
 cursor.y1 = mouseY
 cursor.x2 = mouseX + 7
 cursor.y2 = mouseY +22
 cursor.x3 = mouseX +17
 cursor.y3 = mouseY +17
 triangle(cursor.x1,cursor.y1,cursor.x2,cursor.y2,cursor.x3,cursor.y3)
}