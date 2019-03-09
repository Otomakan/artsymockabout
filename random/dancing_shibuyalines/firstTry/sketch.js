const lineDotNum = 120
const dotWidth = 10
const recLength = 70
const distanceEach  =dotWidth*3+recLength+recLength
const arrLineDots = []
const width = 600
const height = 600
const backgroundColor = 0
let scaleRate = 0.0001
let scaleRatio = 1


class ArrDots{
	constructor() {
	  this.values = []
	  this.incrementor = 0
	}
	next(){
		const final = this.values[this.incrementor]
		this.incrementor += 1
		return final
	}
	push(val){
		this.values.push(val)
	}
	reset(){
		this.incrementor = 0
	}
}

const arrDots = new ArrDots()


function setup(){

const stickColor = color(50,200,80)
	createCanvas(width,height)
	background(0)
	let y=20
	let x =0 
	let cross = false
	let linePerRow  = Math.ceil(width/distanceEach)
	// console.log(Math.ceil(linePerRow))
	for(let i = 1; i < lineDotNum; i++){

		if(cross){
			arrLineDots.push(new LineDot(x, y,stickColor))
			arrDots.push(new Dot(x, y,stickColor))
		}
		else
			arrLineDots.push(new DotLine(x, y,stickColor))
		
		x+=distanceEach
		if(i%linePerRow===0){
			console.log(y)
			y+=dotWidth*2
		}
		if(i%linePerRow===0){
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
	// translate(width/2, height/2)
	// rotate(PI / 3.0)

	// scale(scaleRatio)
	background(0)
	// scale(1)
	for(let i = 0; i < lineDotNum-1; i++){
		let tempLine = arrLineDots[i]
		if(tempLine instanceof LineDot){

			let tempDot = arrDots.next()
			tempLine.move()
			tempDot.move()
			tempDot.draw()
		}
		if(tempLine instanceof DotLine)
			tempLine.move()
		tempLine.draw()
	}
	scaleRatio += scaleRate
	arrDots.reset()
}

class LineDot {
	constructor(xpos, ypos, color) {
		this.xpos = xpos
		this.ypos = ypos
		this.color = color
	}
	move(){
		this.xpos+=1
		if(this.xpos>width+recLength+dotWidth*2)
			this.xpos=0
	}
	draw(){
		stroke(0)
		fill(this.color)
		rect(this.xpos, this.ypos, recLength,dotWidth)
			}
	// methods
}
class DotLine {
	constructor(xpos, ypos, color) {
		this.xpos = xpos
		this.ypos = ypos
		this.color = color
	}
	move(){
		this.xpos-=1
		if(this.xpos<-recLength-dotWidth*2)
			this.xpos=width
	}
	draw(){
		stroke(0)
		fill(this.color)
		rect(this.xpos+dotWidth, this.ypos, recLength,dotWidth)
		// rect(this.xpos-dotWidth, this.ypos, dotWidth,dotWidth)
	}
	// methods
}

class Dot{
	constructor(xpos, ypos, color) {
		this.initialxPos = xpos
		this.xpos = xpos
		this.ypos = ypos
		this.direction = 1
		this.color = color
	}
	move(){
		this.xpos+=this.direction
		if(this.xpos>width+recLength+dotWidth*2)
			this.xpos=0
		if((this.xpos%(this.initialxPos+recLength))==0){
			this.ypos+= dotWidth*2
			this.direction = this.direction *-1
		}
	}
	draw(){
		rect(this.xpos+recLength+dotWidth, this.ypos, dotWidth,dotWidth)
	}

}