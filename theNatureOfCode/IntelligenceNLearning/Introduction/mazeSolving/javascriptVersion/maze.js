
class Graph{
	constructor(input, rootNode,targetNode){
		this.rootNode = rootNode
		this.currentNode = rootNode
		this.input = input
		this.unvisited = []
		this.targetNode = targetNode
		this.allEdges = []
		this.toVisit = []
		this.unvisited = []
	}
	generateGraph(target){
		let input = this.input
		for(let y=0;y<input.length;y++){
			for(let x=0;x<input[y].length;x++){
					let edgeCounter = []

					//We use this functon to check:
					// 1. If the current index is a dot
					// 2. If the current index is a dot if it has more than 2 dot neighbours
					// 3. (Skipping this step for now) If it has more than two dot neighbours substract the number of neighbours which are existing nodes
					// 4. If neighbours still >2 then create a node				

					if(input[y][x]=="."){

						if(input[y][x-1]==".")
							edgeCounter.push([y,x-1])
						if (input[y][x+1]==".")
							edgeCounter.push([y,x+1])
						if(input[y+1]){
							if(input[y+1][x]==".")
								edgeCounter.push([y+1,x])
						}
						if(input[y-1]){
							if(input[y-1][x]==".")
								edgeCounter.push([y-1,x])
						}
						if(y ==this.targetNode[0] && x ==this.targetNode[1]||y ==this.rootNode[0] && x ==this.rootNode[1])
							edgeCounter.push(y,x)
						
						let nodeEdges = []
						edgeCounter.forEach((pos)=> {
							// let edges = this.unvisited.filter(
							// 	(node)=> { return node.pos[0] ==pos[0]&&node.pos[1] ==pos[1]}
							// 	)
							// if(edges.length>0)
							// 	nodeEdges.push(edges[0])
						})
					
						if (edgeCounter.length > 1){
							let newNode = new Node([y,x])
							if(y ==this.rootNode[0] && x ==this.rootNode[1])
								this.rootNode = newNode
							if(y ==this.targetNode[0] && x ==this.targetNode[1])
								this.targetNode = newNode
							this.unvisited.push(newNode)
							// Creating theedges if we found a neighbour node
							let that = this
							// nodeEdges.forEach(function (neighbourNode) {
							// 	let currentEdge = new Edge(newNode,neighbourNode)
							// 	newNode.edges.push(currentEdge)
							// 	neighbourNode.edges.push(currentEdge)
							// 	that.allEdges.push(currentEdge)
							// })
					}
				}
			}
		}
		this.cutGraph()
	}


	checkIfNodeExists(pos){
		return this.unvisited.filter((node)=> { return node.pos[0] ==pos[0]&&node.pos[1] ==pos[1]}).length>0
	}
	// createEdges(){
	// 	this.unvisited.forEach( (node) => {
			
	// 	})
	// }
	findNode(y,x){
		return this.unvisited.filter((node)=> node.pos[0] ==y&&node.pos[1] ==x)[0]
	}
	checkNeighbours(y,x){

	}
	cutGraph(){
		//Eliminating Useless nodes on Y axis
		let allYStack = []
		for(let y=0;y<input.length;y++){
			let currentYStack = []
			for(let x=0;x<input[y].length;x++){
			let currentNode = this.findNode(y,x)
			let right = this.findNode(y,x+1)
			if(currentNode){
				currentYStack.push(currentNode)
					while(right){
						currentYStack.push(right)
						x+=1
						right = (this.findNode(y,x+1))
					}
					if(currentYStack.length>1){

						let first = currentYStack.shift()
						let last = currentYStack.pop()
						let that = this
						currentYStack.forEach(function (node,i) {
							let top = that.findNode(node.pos[0]-1,node.pos[1])
							let bottom = that.findNode(node.pos[0]+1,node.pos[1])
					
							if(bottom==undefined && top==undefined){
								let i = that.unvisited.indexOf(node)
								that.unvisited.splice(i,1)
							}
							else{
								if(currentYStack[i-1]){
									let newEdge = new Edge(node, currentYStack[i-1])
									node.edges.push(newEdge)
									currentYStack[i-1].edges.push(newEdge)
								}
								else{
									console.log(node)
									console.log(first)
									let newEdge = new Edge(node, first)
									node.edges.push(newEdge)
									first.edges.push(newEdge)
								}
							}
						})
						let newEdge = new Edge(first,last)
						first.edges.push(newEdge)
						last.edges.push(newEdge)
						if(currentYStack.length>1){
							let secondLastEdge = new Edge(last, currentYStack[currentYStack.length-1])
							last.edges.push(secondLastEdge)
							currentYStack[currentYStack.length-1].edges.push(secondLastEdge)
						}
					}
				}
			}
			if(currentYStack.length>0)
				allYStack.push(currentYStack)
		} 
		// Elminiating the useless node on X axis
		let allXStack = []
		for(let x=0;x<input.length;x++){
			let currentXStack = []
			for(let y=0;y<input[x].length;y++){
			let currentNode = this.findNode(y,x)
			let bottom = this.findNode(y+1,x)
			if(currentNode){
				currentXStack.push(currentNode)
					while(bottom){
						currentXStack.push(bottom)
						y+=1
						bottom = (this.findNode(y+1,x))
					}
					if(currentXStack.length>1){
						let first= currentXStack.shift()
						let last = currentXStack.pop()
						let that = this
						currentXStack.forEach(function (node) {
							let left = that.findNode(node.pos[0],node.pos[1]-1)
							let right = that.findNode(node.pos[0],node.pos[1]+1)
					
							if(left==undefined && right==undefined){
								let i = that.unvisited.indexOf(node)
								that.unvisited.splice(i,1)
							}
						})

						let newEdge = new Edge(first,last)
						first.edges.push(newEdge)
						last.edges.push(newEdge)
					}
					else{
						currentXStack = []
					}
				}
			}
			if(currentXStack.length>0)
				allXStack.push(currentXStack)
		}
	}

	findTarget(){
		let currentNode = this.rootNode
		currentNode.weight = 0
		this.toVisit = []
		this.toVisit.push(currentNode)
		while(this.toVisit.length>0){

			console.log(currentNode)
			if(currentNode == this.targetNode)
				return this.targetNode.dist

			currentNode.edges.forEach(function (edge) {
				// console.log(edge)
				if(currentNode==edge.n1){
					edge.n2.dist = edge.n1.dist+1
				}
				else if(currentNode ==edge.n2){
					edge.n1.dist = edge.n2.dist+1
				}
			})
			let currentI = this.unvisited.indexOf(currentNode)
			this.unvisited.splice(currentI,1)
			let smallestDist = null
			let smallestDistNode
			this.unvisited.forEach(function (node) {
				if((smallestDist==null || node.dist<smallestDist) && node.dist!=null ){
					smallestDist = node.dist
					smallestDistNode = node
				}
			})
			currentNode = smallestDistNode
		}
		console.log('hmm pickle')
	}
}

class Node{
	constructor(pos){
		this.pos = pos
		this.up 
		this.right
		this.down
		this.left
		this.dist = null
		this.edges = []
	}
}

class Edge{
	constructor(n1,n2) {
	  this.n1 = n1
	  this.n2 = n2
	}
}
input = [[".","X","."],
		[".","X","."],
		[".",".","."]]
		graph = new Graph(input,[0,0],[0,2])
		graph.generateGraph([0,0],[0,2])
input = [[".",'.',"X",".",'.'],
		[".", '.',"X",'X',"."],
		[".", 'X',".",'.',"."],
		[".", '.',".",'.',"X"],
		[".", 'X',".",'X',"."]]

graph = new Graph(input,[0,0],[0,4])
graph.generateGraph([0,0],[0,4])
console.log(graph.unvisited)

