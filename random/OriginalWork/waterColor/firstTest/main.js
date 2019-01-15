
class Polygon {
	constructor(x, y, r, sides) {
		this.points = []
		this.center = {x : x,y: y}
		this.r = r
		this.side = sides
		let TWO_PI = Math.PI*2
		let angle = TWO_PI * sides

		for(let i=0;i<TWO_PI;i++){
			let sx = x + Math.cos(i) * r
			let sy = y + Math.sin(i) * r

			this.points.push({x:sx,y:sy})
		}
	}
	deform(depth, variance, varianceDivider){
		let newPoints = []
		for(let i=0; i<this.points.length; i++){
			let point1 = this.points[i % this.points.length] 
			let point2 = this.points[(i+1) % this.points.length]
			 newPoints.push(point1.x, point1.y);
    		 newPoints.push(this.subdivide(newPoints, point1.x, point1.y, point2.x, point2.y,
                depth, variance, varianceDivider))
		}
		this.points= newPoints
	}

	subdivide(newPoints, x1, y1, x2, y2, depth, variance, varianceDivider){
		if(depth >= 0){
			let midx = (x1 + x2) / 2
			let midy = (y1 + y2) / 2
			let newX = midx + random(-variance, variance)
			let newY = midy + random(-variance, variance)
			this.subdivide(newPoints,x1, y1,newX, newY,  depth-1, variance/varianceDivider, varianceDivider)
			newPoints.push({x:newX,y:newY})	
			this.subdivide(newPoints,newX, newY, x2, y2, depth-1, variance/varianceDivider, varianceDivider)
		
		}
	}
	update(){

	}

	draw(){
		stroke(0)
		fill('rgba(250,0,0,0.01)')
		strokeWeight(2)
		noStroke()
		beginShape()
		for(let i = 0; i < this.points.length; i++){
			if(this.points[i])
				vertex(this.points[i].x,this.points[i].y)
		}
		endShape()
	}

	// methods
}
let myPoly
function setup() {

  	createCanvas(640, 480);
	myPoly = new Polygon(300,200,150,7)
	let polyStack = []
	background(255)
	for (let i = 0; i < 100; i++){
		polyStack[i] = new Polygon(300,200,150,7)
		polyStack[i].deform(2, random(150/3, 150*0.8), 4);
		polyStack[i].draw()
	}
}

// function draw() {

// 	// myPoly.draw()

// }
