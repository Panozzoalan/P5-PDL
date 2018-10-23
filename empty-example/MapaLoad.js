// Cargar mapa guarado
var walls = []

//Variables del guardado de mapa
var wx
var wy

//Variables de los mapas
var mapaload = false
var totalmaps = 5

//Lista con los mapas cargados
var data = []

function preload(){
	for (var i = 0; i <= totalmaps; i++) {
		let mapxy
		mapxy = loadJSON('maps/map'+ i +'.json')
		data.push(mapxy) 
	}
}

function loadMapa(n){
	for (var i = data[n].x.length - 1; i >= 0; i--) {	
  		downloadMapa(data[n])
	}
	for(var i = 0; i < walls.length ;i++){
  		walls[i].display()
  	}
}

function downloadMapa(datamapa){
	walls = []
	for (var i = 0; i <= datamapa.x.length; i++) {	
		wx = datamapa.x[i]
		wy = datamapa.y[i]
	  	walls.push(new Wall(wx,wy))
	}
}

function Wall(x,y){
  this.x=x;
  this.y=y;
  this.display = function () {

    limitsWall(this.x,this.y)
    quad(this.x,this.y,this.x,this.y+100,this.x+100,this.y+100,this.x+100,this.y)
  }
}

function limitsWall(x,y){
  var px = playervar.x
  var py = playervar.y
  //Limite lado izquierdo
  if(px+playervar.rad>=x && px+playervar.rad<= x+100 && py>=y && py<=y+100){
    playervar.x = constrain(px,0,x-playervar.rad)
  //Limite lado derecho
  }else if (px-playervar.rad<=x+100 && px+playervar.rad>=x && py>=y && py<=y+100) {
    playervar.x = constrain(px,x+100+playervar.rad,width)
  }
  //Limite lado de arriba
  if (py+playervar.rad>=y && py+playervar.rad<=y+25 && px>=x && px<=x+100) {
    playervar.y = constrain(py,0,y-playervar.rad)
  //Limite lado inferior
  }else if (py-playervar.rad<=y+100 && py+playervar.rad>=y+75 && px>=x && px<=x+100) {
    playervar.y = constrain(py,y+100+playervar.rad,height)
  }
}