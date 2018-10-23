var paredes = []
var lugar={
  sector:0,
  fila:0,
  x:0,
  y:0
}

var mouse= {
  click_x:0 ,
  click_y:0
}

var grid= {
  x:'a',
  y:'a',
  sector:'a',
  fila:'a'
}

//Variables del guardado de mapa
var json = {}
var px = []
var py = []

var jugador = {
  x:150 ,
  y:400 ,
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

//Variables Filtro de lista
var element = 0 
var indexElement = 0

//Variables de los mapas
var mapa = -1


var distancia = 0

function setup() {
  createCanvas(800, 500)
}

function draw() {
  background(150)
  cargarMapa()
  guardarMapajson()

}

function cargarMapa(){
	for(var i = 0; i < paredes.length ;i++){
  		paredes[i].display()
  	}
}



//Guardar mapa como .json
function guardarMapajson(){
	createButton('save')
	.position(10, 10)
	.mousePressed(function() {
			
		for (var i = 0; i < paredes.length; i++) {
			px.push(paredes[i].x)
			py.push(paredes[i].y)
			json.x = px
			json.y = py
	}
		saveJSON(json, 'NewMap.json');
	})
}


function keyTyped() {
  if (key === ' ') {
  paredes = []
  }
  if (key === 'x') {
    mouse.click_x = mouseX
  	mouse.click_y = mouseY
 	select_s_f()
  	paredes.push(new Pared())
  }
}

function Pared(){
  this.x=grid.x;
  this.y=grid.y;
  this.display = function () {

    limites(this.x,this.y)
    fill(0)
    quad(this.x,this.y,this.x,this.y+100,this.x+100,this.y+100,this.x+100,this.y)
  }
}

function grids(){
  push()
  //Cuadricula
  stroke(255,0,0)
  line(0,0,width,0)
  line(0,100,width,100)
  line(0,200,width,200)
  line(0,300,width,300)
  line(0,400,width,400)
  line(0,height-1,width,height-1)
  line(1,0,1,height)
  line(100,0,100,height)
  line(200,0,200,height)
  line(300,0,300,height)
  line(400,0,400,height)
  line(500,0,500,height)
  line(600,0,600,height)
  line(700,0,700,height)
  line(width-1,0,width-1,height)
  pop()
}

function select_s_f(){
  //Sector
  if(mouse.click_x<=100){
    grid.sector=1
    grid.x=0
  }else if (mouse.click_x<=200) {
    grid.sector=2
    grid.x=100
  }else if (mouse.click_x<=300) {
    grid.sector=3
    grid.x=200
  }else if (mouse.click_x<=400) {
    grid.sector=4
    grid.x=300
  }else if (mouse.click_x<=500) {
    grid.sector=5
    grid.x=400
  }else if (mouse.click_x<=600) {
    grid.sector=6
    grid.x=500
  }else if (mouse.click_x<=700) {
    grid.sector=7
    grid.x=600
  }else if (mouse.click_x<=800) {
    grid.sector=8
    grid.x=700
  }
  //Fila
  if(mouse.click_y<=100){
    grid.fila=1
    grid.y=0
  }else if (mouse.click_y<=200) {
    grid.fila=2
    grid.y=100
  }else if (mouse.click_y<=300) {
    grid.fila=3
    grid.y=200
  }else if (mouse.click_y<=400) {
    grid.fila=4
    grid.y=300
  }else if (mouse.click_y<=500) {
    grid.fila=5
    grid.y=400
  }
}

function limites(x,y){
  var jx = jugador.x
  var jy = jugador.y
  //Limite lado izquierdo
  if(jx+jugador.rad>=x && jx+jugador.rad<= x+100 && jy>=y && jy<=y+100){
    jugador.x = constrain(jx,0,x-jugador.rad)
  //Limite lado derecho
  }else if (jx-jugador.rad<=x+100 && jx+jugador.rad>=x && jy>=y && jy<=y+100) {
    jugador.x = constrain(jx,x+100+jugador.rad,width)
  }
  //Limite lado de arriba
  if (jy+jugador.rad>=y && jy+jugador.rad<=y+25 && jx>=x && jx<=x+100) {
    jugador.y = constrain(jy,0,y-jugador.rad)
  //Limite lado inferior
  }else if (jy-jugador.rad<=y+100 && jy+jugador.rad>=y+75 && jx>=x && jx<=x+100) {
    jugador.y = constrain(jy,y+100+jugador.rad,height)
  }
}