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
		return coin>0.8 ? 0 : 1
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

}