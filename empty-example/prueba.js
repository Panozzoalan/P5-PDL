//Juego random
//Pantalla Game Over
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
var speed = {
	x:5,
	y:5
}

//Variables player
var playervar = {
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

//Tienen que ser el 800 y 500 menos uno
var limites ={
	ancho: 799 ,
	alto: 499
}

//Variables de los mapas
var mapanum = 2

var movmapa= {
	top:500,
	mspeed:5,
	height1:500,
	movtf:false,
	//Variables de animacion del mapanum 1.1
	m1_1open1x:200,
	m1_1open1y:300
}

var lightvars={
	mod:0 ,
	modsp:5 ,
	ligthdist:0
}


function setup(){
	createCanvas(1000, 800)

}

function draw(){
	mov_WASD()
	noStroke()
	mapas()
	player()
	menu_game()
	//maps_limits()
	//mouseXY()
	//mapa_info()
	//player_status()
	}

//menu
function menu_game(){
	fill(150)
	rect(800,0,100,500)
	fill(0)
	strokeWeight(2)
	stroke(10)
	line(800,0,800,500)
	line(800,1,900,1)
	line(900,0,900,500)
	line(800,499,900,499)
	
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
	//Indicador de vida
	if (mapanum >= 0 ) {
		//stroke(0)
		//strokeWeight(1)
		//fill(0,150,150)
		//rect(18,30,32,100)
	if (playervar.life >= 3) {
		playervar.life = 3
		fill(playervar.col1,0,0)
		stroke(255)
		strokeWeight(3)
		ellipse(35, 50, playervar.diam - 25)
		ellipse(35, 80, playervar.diam - 25)
		ellipse(35, 110, playervar.diam - 25)
	}else if (playervar.life == 2) {
		fill(playervar.col1,0,0)
		stroke(255)
		strokeWeight(3)
		ellipse(35, 50, playervar.diam - 25)
		ellipse(35, 80, playervar.diam - 25)
	}else if (playervar.life == 1) {
		fill(playervar.col1,0,0)
		stroke(255)
		strokeWeight(3)
		ellipse(35, 50, playervar.diam - 25)
	}else if (playervar.life <=0) {
		playervar.mov=false
		gameover()
	}else if (playervar.life == 0.1 && mapanum == 0.1 || mapanum == 1.1){
		fill(playervar.col1,playervar.col1,playervar.col1)
		stroke(255)
		strokeWeight(3)
		ellipse(35, 50, playervar.diam - 25)
	}
}
pop()
}

function mapas(){
	if (mapanum == -1) {
		menu_start()
	}
	fill(100)
	//Mapanum 0.1
	if(mapanum == 0.1){
		background(250)
		fill(100)
		//Carga del mapa
		loadMapa(0)
		stroke(0)
		strokeWeight(2)
		fill(0)
		rect(100,401,100,10)
		rect(201,100,10,100)
		rect(201,300,10,100)
		if(playervar.y < 0){
			mapanum = 1.1
			playervar.y = 500
		}
	}
	//Mapanum 0
	if(mapanum == 0){
		background(250)
		//Carga del mapa
		loadMapa(0)
		stroke(0)
		strokeWeight(2)
		fill(0)
		rect(100,401,100,10)
		rect(201,100,10,100)
		rect(221,401,10,1000)
		if(playervar.y < 0){
			mapanum = 1
			playervar.y = 500
		}
		if (playervar.x > 800) {
			mapanum = 2
			playervar.x = 0
		}
	}
	//Mapanum 1.1
	if(mapanum == 1.1){
		if (!movmapa.movtf) {
		background(255)
		//Cargar mapa
		loadMapa(1)
		push()
		stroke(0)
		strokeWeight(2)
		fill(playervar.col1,0,0)
		ellipse(150,250,30)
		pop()
		push()
		fill(200)
		stroke(0)
		strokeWeight(3)
		rect(210,50,560,240)
		stroke(250)
		fill(0)
		textAlign(CENTER);
		textSize(30)
		text("-This's a life, this's your money",465,100)
		text("and it's all you need to play.",445,145)
		text("-You can have a maximum of three.",495,200)
		text("-Go, take your life",378,250)
		strokeWeight(3)
		stroke(0)
		line(150,50,250,50)
		line(150,50,150,150)
		line(150,170,130,130)
		line(150,170,170,130)
		pop()
	}
		if(playervar.y < 265 ){
			movmapa.movtf = true
			playervar.life = 1
			if (movmapa.movtf) {
				playervar.mov = false
				background(255)
				fill(100)
				if (movmapa.height1>0 && movmapa.m1_1open1y < 402) {
				playervar.y -= movmapa.mspeed
				movmapa.height1 -= movmapa.mspeed
				rect(0,0,100,movmapa.height1 )
				rect(100,0,800,movmapa.height1-300)
				rect(200,0,800,movmapa.height1)
				//mapa0.1
				rect(0,movmapa.height1,100,500)
				rect(200,movmapa.height1,800,100)
				rect(200,((movmapa.height1+500)-300),800,100)
				rect(200,((movmapa.height1+500)-100),800,100)
				stroke(0)
				strokeWeight(2)
				fill(0)
				rect(100,((movmapa.height1+500)-99),100,10)
				rect(201,((movmapa.height1+500)-400),10,100)
				rect(201,((movmapa.height1+500)-200),10,100)
			}else if (movmapa.m1_1open1y < 402 && movmapa.height1 == 0) {
				rect(0,0,100,500)
				rect(200,0,800,100)
				rect(200,200,800,100)
				rect(200,400,800,100)
				stroke(0)
				strokeWeight(2)
				fill(0)
				rect(100,401,100,10)
				rect(201,100,10,100)
				rect(movmapa.m1_1open1x,movmapa.m1_1open1y,10,100)
				if (movmapa.m1_1open1x < 221) {
					movmapa.m1_1open1x += movmapa.mspeed -3
					}else if (movmapa.m1_1open1y <401) {
						movmapa.m1_1open1y += movmapa.mspeed -3
				}
			}else if (movmapa.m1_1open1y > 401 && movmapa.height1 >=0 && movmapa.height1 < 500) {
				playervar.y += movmapa.mspeed
				movmapa.height1 += movmapa.mspeed
				rect(0,0,100,movmapa.height1 )
				rect(100,0,800,movmapa.height1-300)
				rect(200,0,800,movmapa.height1)
				//mapa0.1
				rect(0,movmapa.height1,100,500)
				rect(200,movmapa.height1,800,100)
				rect(200,((movmapa.height1+500)-300),800,100)
				rect(200,((movmapa.height1+500)-100),800,100)
				stroke(0)
				strokeWeight(2)
				fill(0)
				rect(100,((movmapa.height1+500)-99),100,10)
				rect(201,((movmapa.height1+500)-400),10,100)
				rect(222,((movmapa.height1+500)-98),10,100)
				if (movmapa.height1 == 500) {
					mapanum = 1
					movmapa.movtf = false
					playervar.mov=true
				}
			}
			}

		}
		if(playervar.y > 500 ){
			mapanum = 0.1
			playervar.y = 0
		}
	}
	//Mapanum 1
	if(mapanum == 1){
		background(255)
		//Carga del mapa
		loadMapa(1)
		if(playervar.y > 500 ){
			mapanum = 0
			playervar.y = 0
		}
	}
	//Mapanum 2
	if(mapanum == 2){
		background(255)
		noStroke()
		//Carga del mapa
		loadMapa(2)
		if (playervar.x < 0) {
			mapanum = 0
			playervar.x = 800
		}
		if (playervar.x > 800) {
			playervar.x = 0
			mapanum = mapanum + 1
		}
	}
	//Mapanum 3
	if(mapanum == 3){
		background(255)
		noStroke()
		//Carga del mapa
		loadMapa(3)
		if (playervar.x < 0){
			mapanum = mapanum - 1
			playervar.x = 800
		}
		if (playervar.y > 500){
			mapanum = 4
			playervar.y = 0
		} 
	}
	//Mapanum 4
	if(mapanum == 4){
		background(255)
		//Carga del mapa
		loadMapa(4)
		if (playervar.y < 0) {
			mapanum = mapanum - 1
			playervar.y = 500
		}
		if (playervar.y > 500){
			mapanum = mapanum + 1
			playervar.y = 0
		} 
	}
	//Mapanum 5
	if (mapanum == 5) {
		background(255)
		//Carga del mapa
		loadMapa(5)
		if (playervar.y < 0) {
			mapanum = mapanum - 1
			playervar.y = 500
		}
	}

	//Mapanum 100 (Pruebas)
	if (mapanum == 100) {
		background(200)
		fill(100)
		loadMapa(0)
	}
}

function maps_limits(){
	if (playervar.mov) {
		//Limite mapanum 0.1
		if (mapanum == 0.1) {
			playervar.x = constrain(playervar.x,100+playervar.rad,200-playervar.rad)
			playervar.y = constrain(playervar.y,0,400-playervar.rad)
		//Limites mapanum 0
		}else if (mapanum == 0) {
			if (playervar.y < 300) {
				playervar.x = constrain(playervar.x,100+playervar.rad,200-playervar.rad)
			}else if (playervar.y > 300 && playervar.x < 200) {
				playervar.y = constrain(playervar.y,0,400-playervar.rad)
				playervar.x = constrain(playervar.x,100+playervar.rad,800)
			}else if (playervar.y > 300 && playervar.x > 200) {
				playervar.y = constrain(playervar.y,300+playervar.rad,400-playervar.rad)
			}
		//Limites mapanum 1.1	
		}else if(mapanum == 1.1) {
			playervar.x = constrain(playervar.x,100+playervar.rad,200-playervar.rad)
			playervar.y = constrain(playervar.y,200+playervar.rad,600)
		//Limites mapanum 1
		}else if(mapanum == 1) {
			playervar.x = constrain(playervar.x,100+playervar.rad,200-playervar.rad)
			playervar.y = constrain(playervar.y,200+playervar.rad,600)
		//Limites mapanum 2
		}else if (mapanum == 2) {
			playervar.y = constrain(playervar.y,300+playervar.rad,400-playervar.rad)
		//Limites mapanum 3
		}else if (mapanum == 3) {
			playervar.y = constrain(playervar.y,300+playervar.rad,400-playervar.rad)
		//Limites mapanum 4
		}else if (mapanum == 4) {
			if (playervar.x < 100) {
				playervar.y = constrain(playervar.y,300+playervar.rad,400-playervar.rad)
			}else if (playervar.x > 100 ) {
				playervar.y = constrain(playervar.y,100+playervar.rad,500)
				playervar.x = constrain(playervar.x,0,700-playervar.rad)
				if (playervar.y < 300 || playervar.y > 400) {
					playervar.x = constrain(playervar.x,100+playervar.rad,700-playervar.rad)
				}
			}
		//Limites mapanum 5	
		}else if (mapanum == 5) {
		}
	}
}

function gameover(){
	fill(150,210)
	stroke(0,150,150)
	quad(puntas.p1x,puntas.p1y,puntas.p3x,puntas.p3y,puntas.p4x,puntas.p4y,puntas.p2x,puntas.p2y)
	//Texto
	fill(200,0,0)
	textSize(48)
	stroke(255)
	strokeWeight(2)
	text('Game Over',260,150) 
	if (puntas.p1x >=50 ){
		//Crecimiento X
		puntas.p1x -=1.6*5 
		puntas.p2x -=1.6*5 
		puntas.p3x +=1.6*5 
		puntas.p4x +=1.6*5
		//Crecimiento Y
		puntas.p1y -=1*5
		puntas.p2y +=1*5  
		puntas.p3y -=1*5  
		puntas.p4y +=1*5
	}
}

function menu_start(){
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
	playervar.x = playervar.x + speed.x
	playervar.y = playervar.y + speed.y

	//Derecha
	if(playervar.x >= 800){
		speed.x = -10
		speed.y = random(-10,10)
	//Izquiera
	} else if (playervar.x <= 0) {
		speed.x = +10
		speed.y = random(-10,10)
	//Abajo
	}else if(playervar.y >= 500){
		speed.y = -10
		speed.x = random(-10,10)
	//Arriba
	}else if (playervar.y <= 0){
		speed.y = +10
		speed.x = random(-10,10)
	//Cartel abajo
	}else if((playervar.y <= 250+playervar.rad && playervar.y >= 225)  && (playervar.x > 350-playervar.rad && playervar.x < 450+playervar.rad)){
		speed.y = +10
		speed.x = random(-10,10)
	//Cartel arriba
	}else if ((playervar.y >= 200-playervar.rad && playervar.y <= 225) && (playervar.x > 350-playervar.rad && playervar.x < 450+playervar.rad) ) {
		speed.y = -10
		speed.x = random(-10,10)
	//Cartel izquierda
	}else if((playervar.x >= 350-playervar.rad && playervar.x <= 400) && ((playervar.y <= 250+playervar.rad && playervar.y >= 200+playervar.rad))){
		speed.x = -10
		speed.y = random(-10,10)
	}

	fill(255)
	stroke(0)
	strokeWeight(3)
	rect(350,205,100,45)
	fill(50)
	noStroke()
	textSize(40)
	text('Start',355,240)
	//Valores inciales
	if(mouseIsPressed && mouseX >=350 && mouseY <= 250 && mouseX <= 450 && mouseY >= 205){
		mapanum = 0.1
		playervar.x = 150
		playervar.y = 350
		life = 0.1
	}
}

function m_light(x,y){
	player()
	//Cambio de transparecia por distancia 
	lightvars.ligthdist = dist(playervar.x,playervar.y,x,y)
	playervar.trans = (((150-playervar.rad)+lightvars.mod)-lightvars.ligthdist)
	lightvars.mod += lightvars.modsp
	if (lightvars.mod <= 15) {
		lightvars.modsp= random(0.0001,0.15)
	}else if (lightvars.mod >= 30) {
		lightvars.modsp= random(-0.0001,-0.3)
	}
	//1
	fill(200+lightvars.mod*5,150-lightvars.mod*5,0)
	ellipse(x,y,15)
	//2
	fill(255,255,0,100)
	ellipse(x,y,25+(lightvars.mod-5))
	//3
	fill(250,250,100,lightvars.mod)
	ellipse(x,y,100+(lightvars.mod-5))
	//4
	fill(250,250,100,lightvars.mod-20)
	ellipse(x,y,150+(lightvars.mod-5))
	//5
	fill(250,250,100,lightvars.mod-15)
	ellipse(x,y,200+(lightvars.mod-5))
	//6
	fill(200,200,0,lightvars.mod-20)
	ellipse(x,y,230+(lightvars.mod))
	//7
	fill(200,200,0,15)
	ellipse(x,y,300+(lightvars.mod))
}

function mouseXY(){
	textSize(18)
	fill(0)
	noStroke()
	text('Mouse',10,20)
	text('X:'+nfc(mouseX),10,40)
	text('Y:'+nfc(mouseY),10,60)
}

function player_status(){
	textSize(18)
	fill(0)
	noStroke()
	text('Player',700,80)
	text('X:'+nfc(playervar.x),700,100)
	text('Y:'+nfc(playervar.y),700,120)
	text('Life:'+nfc(playervar.life),700,140)
}

function mapa_info(){
	textSize(18)
	fill(0)
	noStroke()
	text('Mapanum: '+nfc(mapanum),700,140)
	text('height1: '+nfc(movmapa.height1),700,160)
	text('open1y : '+nfc(movmapa.m1_1open1y),680,180)
	text('open1x : '+nfc(movmapa.m1_1open1x),680,200)
}

function grid(){
	//Cuadricula
	stroke(255,0,0)
	line(0,0,800,0)
	line(0,100,800,100)
	line(0,200,800,200)
	line(0,300,800,300)
	line(0,400,800,400)
	line(0,limites.alto,800,limites.alto)
	line(1,0,1,500)
	line(100,0,100,500)
	line(200,0,200,500)
	line(300,0,300,500)
	line(400,0,400,500)
	line(500,0,500,500)
	line(600,0,600,500)
	line(700,0,700,500)
	line(limites.ancho,0,limites.ancho,500)
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