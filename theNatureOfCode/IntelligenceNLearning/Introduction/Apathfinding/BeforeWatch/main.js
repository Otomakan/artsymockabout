
class Path{
	constructor(startNode) {
	  this.startNode = startNode;
	}
}
class Node {
	constructor(x, y, value){
		this.position = new Pos(x,y)
		this.value = 0
		this.neighbors{
			up:null,
			down:null,
			right:null,
			left:null
		}
	}
}

class Maze {
	constructor(width, height, itemSize){
		this.width = width
		this.height = height
		this.size = itemSize
		// let fullMaze = new Graph()
		this.firstNode  = new Node(0,0,0)
		this.currentNode = this.firstNode
		this.nextNode
	}
	initialize(){
		// const currentNode = this.currentNode
		if(this.currentNode.x == this.width-1){
			if(this.currentNode.y === this.height-1){
				// this is the end
				return
			}
			const nextNode = new Node(0, currentNode.y+1,0)
			this.currentNode.right = nextNode
		}
		const start = [Math.floor(Math.random(0,width)*width), Math.floor(Math.random(0,height)*height)]
		const end =  [Math.floor(Math.random(0,width)*width), Math.floor(Math.random(0,height)*height)]
		
		fullMaze[start[0]][start[1]] = 2
		fullMaze[end[0]][end[1]] = 3
		this.fullMaze = fullMaze
	}
	getRandomValue(){
		const coin = Math.random()
		return coin>0.8 ? 0 : 1
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




function whatIsDirectLine(start, end){
	// eg A = 0,0
	//B = 10,10
	// Function =  fn(x) = ax + b
	//f(x) = x + 0
	const slope = (start.x-start.y)/(end.x-end.y)
	// y = slopex + b
	// pointA[1] = slope*pointA[0] +b 
	// b = pointA[1]-(pointA[0]*slope)
	return {
		slope,
		intercept: start.y-(start.x*slope)
	}
}



class Pos {
	constructor(x,y){
		this.x = x
		this.y = y 
	}
}

const treeOfPaths = {}
const maze = new Maze(50,50,5)
console.log(maz)

function setup() {
  createCanvas(640, 480)
  background(250)

}
function draw() {
	maze.display()
}





// class Maze {
// 	constructor(width, height, itemSize){
// 		this.width = width
// 		this.height = height
// 		this.size = itemSize
// 		let fullMaze = []
// 		for(let y = 0; y < height; y++){
// 			fullMaze.push([])
// 			for(let x = 0; x < width; x++){
// 				const coin = Math.random()
// 				coin>0.8 ?
// 				fullMaze[y].push(0)
// 				:fullMaze[y].push(1)
// 			}
// 		}
// 		const start = [Math.floor(Math.random(0,width)*width), Math.floor(Math.random(0,height)*height)]
// 		const end =  [Math.floor(Math.random(0,width)*width), Math.floor(Math.random(0,height)*height)]
		
// 		fullMaze[start[0]][start[1]] = 2
// 		fullMaze[end[0]][end[1]] = 3
// 		this.fullMaze = fullMaze
// 	}
// 	display(){
// 		const s = this.size
// 		this.fullMaze.forEach((row,y)=>{
// 			row.forEach((col,x)=>{
// 				fill(0)
// 				switch(col){
// 					case 1:
// 						fill(255)
// 						break
// 					case 2:
// 						fill(255,0,0)
// 						break

// 					case 3:
// 						fill(0,255,0)
// 						break

// 					default:
// 						fill(0)
// 				}
// 				stroke(255)
// 				rect(y*s,x*s,s,s)				
// 			})
// 		})
// 	}

// }

