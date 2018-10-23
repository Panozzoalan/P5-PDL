
//Variables player
var playervar = {
	x:400 ,
	y:250 ,
	life:0.1,
	speed: 10,
	spmod: 0,
	spmodtime:100,
	diam: 46,
	rad: 23,
	col1:50,
	colt:100,
	trans: 255,
	mov: true
}
var mapanum = -2

// gui params
var numShapes = 1;
var strokeWidth = 4;
var strokeColor = '#00ddff';
var fillColor = [180, 255, 255];
var drawStroke = true;
var	drawFill = true;
var radius = 20;
var shape = 'circle'
var Nickname= '';

// gui
var gui, gui2;

// dynamic parameters
var bigRadius;

function setup() {

  createCanvas(800, 500);

  // Calculate big radius
  bigRadius = height / 3.0;

  // Create Layout GUI
  gui = createGui('Player');
  gui.addGlobals('Nickname', 'radius',
  'drawFill', 'fillColor', 'drawStroke', 'strokeColor', 'strokeWidth');

  // Don't loop automatically
  //noLoop();
}


function draw() {
	background(150)
	cuadro()
	fill(150,0,0)
	ellipse(400,400,50)
	mov_WASD()
	player()
}

function cuadro(){
	x = playervar.x
	y = playervar.y

  // clear all
  //clear();

	// set fill style
	if(drawFill) {
		fill(fillColor);
	} else {
	  noFill();
	}

	// set stroke style
	if(drawStroke) {
	  stroke(strokeColor);
	  strokeWeight(strokeWidth);
	} else {
	  noStroke();
	}

	// draw circles arranged in a circle
	for(var i = 0; i < numShapes; i++) {

		var x =400;
		var y =250;
		var d = 2 * radius;

    // pick a shape
		switch(shape) {

		  case 'circle':
		    ellipse(x, y, d, d);
		    break;

		}

    // draw a Nickname below the shape
	push();
	noStroke();
	fill(0);
	textAlign(CENTER);
	text(Nickname, x, y + radius + 15);
	pop();
}

}


// draw a regular n-gon with n sides
function ngon(n, x, y, d) {
  beginShape();
  for(var i = 0; i < n; i++) {
    var angle = TWO_PI / n * i;
    var px = x + sin(angle) * d / 2;
    var py = y - cos(angle) * d / 2;
    vertex(px, py);
  }
  endShape(CLOSE);
}


// draw a regular n-pointed star
function star(n, x, y, d1, d2) {
  beginShape();
  for(var i = 0; i < 2 * n; i++) {
    var d = (i % 2 === 1) ? d1 : d2;
    var angle = PI / n * i;
    var px = x + sin(angle) * d / 2;
    var py = y - cos(angle) * d / 2;
    vertex(px, py);
  }
  endShape(CLOSE);
}



//Jugador estetica
function player(){
	push()
	//Cirsculo grande
	stroke(0)
	fill(0,150,150,playervar.trans)
	ellipse(playervar.x, playervar.y, playervar.diam)
	//Cirsculo centro
	if (playervar.life > 0.1) {
		fill(playervar.col1,0,0,playervar.trans)
		stroke(255,255,255,playervar.trans)
		strokeWeight(3)
		ellipse(playervar.x, playervar.y, playervar.diam - 20)
	}else if (playervar.life == 0.1) {
		fill(playervar.col1,playervar.col1,playervar.col1,playervar.trans)
		stroke(255,255,255,playervar.trans)
		strokeWeight(3)
		ellipse(playervar.x, playervar.y, playervar.diam - 20)
	}
	playervar.col1 += playervar.colt 
	if (playervar.col1 >= 180 ) {
		playervar.colt = -5
	}else if (playervar.col1 <= 40) {
		playervar.colt = 5
}
	pop()
}

//Movimiento con WASD
function mov_WASD(){
	if (playervar.mov) {
		//Shift
		if (keyIsDown(16)){
			playervar.spmod = 5
		}else{
			playervar.spmod = 0 
		}
		//A
		if (keyIsDown(65)){
			playervar.x -= playervar.speed + playervar.spmod
		}
		//D
		if (keyIsDown(68)){
			playervar.x += playervar.speed + playervar.spmod
		}
		//W
		if (keyIsDown(87)){
			playervar.y -= playervar.speed + playervar.spmod
		}
		//S
		if (keyIsDown(83)){
			playervar.y += playervar.speed + playervar.spmod
		}
	}
}