class Pos{
	constructor(x,y) {

	
	  this.x = x
	  this.y = y
	}
}
class Maze {
	constructor(width, height, itemSize){
		this.width = width
		this.height = height
		this.size = itemSize
		this.allNodes = []
		// let fullMaze = new Graph()
		this.firstNode  = new Node(0,0,0)
		this.currentNode = this.firstNode
		this.nextNode
		this.mazeArray = []
		// this.start = new Pos(Math.floor(Math.random(0,width)*width), Math.floor(Math.random(0,height)*height))
		// this.end =  new Pos(Math.floor(Math.random(0,width)*width), Math.floor(Math.random(0,height)*height))
		this.start = new Pos(0,0)
		this.end = new Pos(width-1,height-1)
		console.log(this.start)
		console.log(this.end)
		for( let y = 0;  y < height; y++) {
			this.mazeArray.push([])
			for (let x = 0; x < width; x++) {
				this.mazeArray[y][x] = this.getRandomValue()
			}
		}
		this.mazeArray[this.start.y][this.start.x]=1
		this.mazeArray[this.end.y][this.end.x]=1

	}
	mazeToGraph(){

	}
	initialize(){
		// const currentNode = this.currentNode
		// if(this.currentNode.x == this.width-1){
		// 	if(this.currentNode.y === this.height-1){
		// 		// this is the end
		// 		return
		// 	}
		// 	const nextNode = new Node(0, currentNode.y+1,0)
		// 	this.currentNode.right = nextNode
		// }
		// const start = [Math.floor(Math.random(0,width)*width), Math.floor(Math.random(0,height)*height)]
		// const end =  [Math.floor(Math.random(0,width)*width), Math.floor(Math.random(0,height)*height)]
		
		// fullMaze[start[0]][start[1]] = 2
		// fullMaze[end[0]][end[1]] = 3
		// this.fullMaze = fullMaze
		// console.log(fullMaze)
	}
	getRandomValue(){
		const coin = Math.random()
		return coin>0.7 ? 0 : 1
	}
	display(){
		const s = this.size
		const start = this.start
		const end = this.end
		this.mazeArray.forEach((row,x)=>{
			row.forEach((col,y)=>{
				fill(0)
				stroke(0)
				strokeWeight(1)
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
				// console.log([x,y])
				// console.log(start)
				if(x == start.x && y == start.y)
					fill(255,0,0)
				if(x == end.x && y == end.y)
					fill(0,255,0)
					
				stroke(0)
				rect(y*s,x*s,s,s)				
			})
		})
	}
	createNodeMap(currentNode) {
		const allNodes = this.allNodes
		let nextNode
		const y = currentNode.y
		const x = currentNode.x
		if (allNodes.find(visitedNode => (visitedNode.x===x && visitedNode.y===y))){
			return
		}
		allNodes.push(currentNode)
	
		const mazeArray = maze.mazeArray

		const investigateNeighbourValue =  (nexty, nextx) => {
			let neighborNode = allNodes.find(visitedNode=>(visitedNode.x===nextx && visitedNode.y===nexty))
	
			if(neighborNode){
				currentNode.addNeighbour(neighborNode)
			}
			else{
				nextNode = new Node(nextx, nexty)
				currentNode.addNeighbour(nextNode)
				this.createNodeMap(nextNode)
			}
		}
		if(y!==0 && mazeArray[y-1][x]===1){
			investigateNeighbourValue(y-1, x)
		}  	
	
		 if(y!==mazeArray.length-1 && mazeArray[y+1][x]===1){
			investigateNeighbourValue(y+1 , x)
		}  	
		
		 if(x!==mazeArray[y].length-1 && mazeArray[y][x+1]===1){
			investigateNeighbourValue(y, x+1)
		}  	
		 if(x!==0 && mazeArray[y][x-1]===1){
			investigateNeighbourValue(y, x-1)
		}  	
		else 
			return
	  }
}
