
class Graph{
	constructor(input, rootNode){
		this.currentNode = rootNode
		this.input = input
		this.unvisited = []
	}
	generateGraph(rootNodeIndex){
		let input = this.input
		for(let y=0;y<input.length;y++){
			for(let x=0;x<input[y].length;x++){
				// Check for the corners and create node

				// if((y==0&&x==0) || (y==0&&x==input[y].length-1) || (y == input.length-1 && x ==0) || (x==input[y].length-1)){
				// 		let newNode = new Node([x,y])
				// 		this.unvisited.push(newNode)
				// 	}
				
				if(input[y][x]=="."){
					if(input[y][x-1]=="."|| input[y][x+1]=="."){
						let newNode = new Node([x,y])
						this.unvisited.push(newNode)
					}
				}
			}
		}
		for(let x=0;x<input.length;x++){
			for(let y=0;y<input[y].length;y++){
				// Check for the corners and create node
				// if((y==0&&x==0) || (y==0&&x==input[y].length-1) || (y == input.length-1 && x ==0) || (x==input[y].length-1))
				// 	new Node([x,y])
				console.log(x +" " + y)
				if(input[y][x]=="."){
					if((input[y+1]&&(input[y+1][x]=="X"|| input[y+1][x]==undefined))|| (input[y-1] &&(input[y-1][x]=="X"||input[y+1][x]==undefined))){
						console.log(`new Node x: ${x}, y: ${y}`)
						let newNode = new Node([x,y])
						this.unvisited.push(newNode)
					}
				}
			}
			console.log("")
		}
	}
	checkNeighbours(y,x){

	}
	cutGraph(){

	}
}

class Node{
	constructor(pos){
		this.pos = pos
		this.up 
		this.right
		this.down
		this.left
		this.distance
	}
}


input = [[".","X","."],
		[".","X","."],
		[".",".","."]]
graph = new Graph(input)
graph.generateGraph()
