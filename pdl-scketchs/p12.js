//Poncer pleotas que rebotan
var proys = []
var index = 0

function setup() {createCanvas(windowWidth,windowHeight)
  proys[index] = new Proy()
}

function draw() { 
  background(200)
  for(var i = 0; i < proys.length ;i++){
  proys[i].display()
  proys[i].move()
  }
  //console.log(index)
  marco()
  fill(0)
  textSize(25)
  text("Click!",random(0,windowWidth),random(0,windowHeight))
  PDL()
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
}