const lineDotNum = 200
function setup(){
	createCanvas(600,600)
	background(0)
	arrLineDots = []
	let y=20
	let x =0 
	for(let i = 1; i < lineDotNum; i++){
		arrLineDots.push(new LineDot(x, y,240))
		if(i*80%600===0){
			print(y)
			y+=80
		}
		x+=80
		if(i*80%600===0){
			print(y)
			x=0
		}
	}
}

function draw(){
	// translate(width/2, height/16)
	// rotate(PI / 3.0)
	for(let i = 0; i < lineDotNum; i++){
		arrLineDots[i].draw()
	}
}

class LineDot {
	constructor(xpos, ypos, color) {
		this.xpos = xpos
		this.ypos = ypos
		this.color = color
	}
	draw(){
		stroke(0)
		fill(this.color)
		rect(this.xpos, this.ypos, 50,5)
		rect(this.xpos+65, this.ypos, 5,5)
	}
	// methods
}