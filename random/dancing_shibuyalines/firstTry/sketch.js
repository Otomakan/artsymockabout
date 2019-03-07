const lineDotNum = 80
const dotWidth = 10
const recLength = 70
const distanceEach  =dotWidth*3+recLength+recLength
const arrLineDots = []
function setup(){
	createCanvas(600,600)
	background(0)
	let y=20
	let x =0 
	let cross = false
	for(let i = 1; i < lineDotNum; i++){

		if(cross)
			arrLineDots.push(new LineDot(x, y,240))
		else
			arrLineDots.push(new DotLine(x, y,240))
		if(i*distanceEach%25===0){
			console.log(y)
			y+=dotWidth*2
		}
		x+=distanceEach
		if(i*distanceEach%25===0){
			if(cross)
				x=0
			else
				x=-recLength
			cross = !cross
		}
	}
	console.log(arrLineDots)
	console.log(arrLineDots.length)
}

function draw(){
	// translate(width/2, height/16)
	// rotate(PI / 3.0)
	for(let i = 0; i < lineDotNum-1; i++){
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
		rect(this.xpos, this.ypos, recLength,dotWidth)
		rect(this.xpos+recLength+dotWidth, this.ypos, dotWidth,dotWidth)
	}
	// methods
}
class DotLine {
	constructor(xpos, ypos, color) {
		this.xpos = xpos
		this.ypos = ypos
		this.color = color
	}
	draw(){
		stroke(0)
		fill(this.color)
		rect(this.xpos+dotWidth, this.ypos, recLength,dotWidth)
		rect(this.xpos-dotWidth, this.ypos, dotWidth,dotWidth)
	}
	// methods
}