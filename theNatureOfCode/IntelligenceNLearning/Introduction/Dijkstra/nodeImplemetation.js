class Graph {
	constructor(rootNode){
		this.nodes = []
		this.rootNode = rootNode
		this.currentNode = rootNode
		this.unvisited = []
		this.counter = 0
	}
	search(target){
		console.log(this.currentNode)
		console.log(this.unvisited)
		this.currentNode.findNeighbours()
		if (this.unvisited.length==0){
			console.log('no more to visit')
			console.log(this.currentNode)
			return this.currentNode
		}
		if (this.currentNode == target){
			console.log('target found')
			console.log(this.currentNode)
			// cp
			return this.currentNode
		}
		// console.log(this.unvisited)
		let index = this.unvisited.indexOf(this.currentNode)
		this.unvisited.splice(index,1)
		console.log(index)
		// console.log(this.unvisited)
		let smallest = null
		for (let i = 0; i<this.unvisited.length;i++){
			// console.log(smallest)
			if ((smallest == null || this.unvisited[i].tentativeDistance <smallest)&& this.unvisited[i].tentativeDistance!=null) {
				// console.log(this.unvisited[i].tentativeDi/stance)
				smallest = this.unvisited[i].tentativeDistance
				this.currentNode = this.unvisited[i]
			}
		}
		this.counter += 1
		this.search(target)
	}
}

class Node{
	constructor(val){
		this.val = val
		this.visited = false
		this.edges = []
		this.neighbours
		this.tentativeDistance = null
		this.parent
	}

	setNeighbours(neighbours){
		this.neighbours = neighbours
	}
	findNeighbours(){
		this.edges.map((edge)=>{
			let newWeight = this.tentativeDistance+edge.weight
			if (edge.p1==this){
				if(newWeight<edge.p2.tentativeDistance || edge.p2.tentativeDistance==null){
					edge.p2.tentativeDistance = newWeight
					edge.p2.parent = this
				}
			}
			else if(edge.p2==this){
				if(newWeight<edge.p1.tentativeDistance || edge.p1.tentativeDistance==null){
					edge.p1.tentativeDistance = newWeight
					edge.p1.parent = this
				}
			}
		})

		this.visited=true
	}
}

class Edge{
	constructor(val, p1,p2) {
	  this.weight = val
	  this.p1 = p1
	  this.p2 = p2
	  this.visited = false
	}

}

function createEdge(weight,p1,p2){
	let edge = new Edge(weight,p1,p2)
	p1.edges.push(edge)
	p2.edges.push(edge)
}

let allNodes ={
	A : new Node ('A'),
	B : new Node('B'),
 	C : new Node ('C'),
	D : new Node('D'),
	E : new Node ('E'),
	F : new Node('F')
} 
let {A,B,C,D,E,F} = allNodes

createEdge(5,A,D)
createEdge(3,A,B)
createEdge(1,E,B)
createEdge(6,D,E)
createEdge(2,E,C)
createEdge(2,D,C)
createEdge(4,C,F)


graph = new Graph(A)
for (let node in allNodes){
	this.graph.unvisited.push(allNodes[node])
}
graph.rootNode.tentativeDistance = 0
console.log(graph)
