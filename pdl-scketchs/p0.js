//Coloreador con circulos de color random
var y = 10
var x = 5
var res = true
function setup() { 
	createCanvas(windowWidth,windowHeight);
	background(255);
} 

function draw() { 
	PDL()
	if (res){
		fill(random(255),random(255),random(255))
		while(x < (windowWidth - 10)){
			x = x + 10;
			ellipse(x, y, 10 ,10);
		}
		if(x >= 390){
			x = 10
	 		y = y + 10
		}
		if(y > windowHeight){
			res = false
		}
	}else{
		x = 5
		y = 10
		background(255)
		res = true
	}

}


