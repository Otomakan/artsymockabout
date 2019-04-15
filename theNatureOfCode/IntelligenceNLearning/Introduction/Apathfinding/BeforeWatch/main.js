class Maze {
	constructor(width, height, itemSize){
		this.width = width
		this.height = height
		this.size = itemSize
		let fullMaze = []
		for(let y = 0; y < height; y++){
			fullMaze.push([])
			for(let x = 0; x < width; x++){
				const coin = Math.random()
				coin>0.8 ?
				fullMaze[y].push(0)
				:fullMaze[y].push(1)
			}
		}
		const start = [Math.floor(Math.random(0,width)*width), Math.floor(Math.random(0,height)*height)]
		const end =  [Math.floor(Math.random(0,width)*width), Math.floor(Math.random(0,height)*height)]
		
		fullMaze[start[0]][start[1]] = 2
		fullMaze[end[0]][end[1]] = 3
		this.fullMaze = fullMaze
	}
	display(){
		const s = this.size
		this.fullMaze.forEach((row,y)=>{
			row.forEach((col,x)=>{
				fill(0)
				switch(col){
					case 1:
						fill(255)
						break
					case 2:
						fill(255,0,0)
						break

					case 3:
						fill(0,255,0)
						break

					default:
						fill(0)
				}
				stroke(255)
				rect(y*s,x*s,s,s)				
			})
		})
	}

}

const maze = new Maze(50,50,5)


function whatIsDirectLine(pointA, pointB){
	// eg A = 0,0
	//B = 10,10
	// Function =  fn(x) = ax + b
	//f(x) = x + 0
	const slope = (pointA[0]-pointA[1])/(pointB[0]-pointB[1])
	return {
		slope,
		intercept: 
	}
}

function setup() {
  createCanvas(640, 480)
  background(250)
}
function draw() {
	maze.display()
}
