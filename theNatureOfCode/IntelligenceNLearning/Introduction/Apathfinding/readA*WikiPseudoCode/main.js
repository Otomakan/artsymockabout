class Path{
	constructor(startNode) {
	  this.startNode = startNode;
	}
}
class Node {
	constructor(x, y, value, fscore){
		this.x = x
		this.y = y
		// this.value = 10
		this.neighbours = []
		this.g = false
		this.f = 0
		this.h = 0
		this.predecessor
	}
	addNeighbour(node){
		if(this.x===0 && this.y === 0){
			console.log("CHECKING FIRST NODE")
		}
		if(!this.neighbourExists(node))
			this.neighbours.push(node)
		if(!node.neighbourExists(this))
			node.neighbours.push(this)
	}
	neighbourExists(node){
		if(this.neighbours.isThereNode(node))
			return true
		
		else 
			return false
	}
	display(mazeSize){
		const s = mazeSize
		// noStroke()

		// fill(0,0,255)
		strokeWeight(0)
		noFill()
		if(this.value ===1){
			fill(196,224,249)
		}
		if(this.value===2){
			fill(185,95,137)
		}
		// if(this.value===2){
			// fill(0,0,250)
		// }
		if(this.value===4){
			fill(103,170,249)
		}
		// ellipse(this.x*s+(s*14), this.y *s +40,s,s)	
		ellipse(this.x*s, this.y *s,s,s)	

	}
}

const shortestPath = (start,end)=> Math.abs(start.x-end.x) + Math.abs(start.y-end.y)

const heuristic = (start, end)=> shortestPath(start,end)*10

let openSet = []
let visitedSet = []
let allNodes = []
let firstNode 
let initialFScore, start


document.getElementById('start').onclick=()=>{
	start=true
}
const treeOfPaths = {}
const maze = new Maze(100,100,5)
console.log(maze)

function setup() {
  createCanvas(640, 640)
  background(250)
  maze.initialize()

  firstNode = new Node(maze.start.x,maze.start.y, maze.start.value)
  firstNode.g = 0
  maze.createNodeMap(firstNode)
  allNodes  = maze.allNodes


  frameRate(1000)

	//   Calculating fscore aka shortest possible path between start and end
	initialFScore = shortestPath(maze.start, maze.end)
	//   openSet.push(firstNode)
	openSet.push(firstNode)

}



function draw() {
	background(250)
	if(!start){
		maze.display()
	}
	if(openSet.length>0 && start){
		// Pick the lowest f valued node at the beggining of the set
		const currentNode = openSet[0]
		// console.log(currentNode)
		if(currentNode.x === maze.end.x && currentNode.y === maze.end.y){
			start  = false
			console.log(currentNode)

		}
		openSet.shift()
		currentNode.value = 2
		const getPredecessor = (node)=>{
			if(node.predecessor){
				node.predecessor.value = 4
				getPredecessor(node.predecessor)
			}
			return
		}
		getPredecessor(currentNode)
		// Checking if we already visited the node with the lowest value if not we are pushing it to the visiting set
		if(!visitedSet.isThereNode(currentNode)){
			visitedSet.push(currentNode)
		}
		// console.log(currentNode)
		currentNode.neighbours.forEach((neighbour)=>{
			// console.log(neighbour)
			neighbour.value = 1
			if(neighbour.g > currentNode.g+1 || neighbour.g === false){
				neighbour.g  = currentNode.g +1
				neighbour.predecessor = currentNode
			}
			neighbour.h = heuristic(neighbour, maze.end)
			neighbour.f = neighbour.h + neighbour.g

			if(!visitedSet.isThereNode(neighbour) && !openSet.isThereNode(neighbour) ){
				openSet.push(neighbour)
			}
			// ca
		})
		// console.log(visitedSet)
	}
	openSet.sort((curr, next)=>curr.f - next.f)


	allNodes.forEach(node=>{node.display(maze.size)})
}

function mouseClicked() {
	const mazeArray =  maze.mazeArray
	const size = maze.size
	// console.log(mazeArray)
	if(mouseX<size*mazeArray.length && mouseY<size*mazeArray.length){
		const xPos = Math.floor(mouseX/(size))
		const yPos  = Math.floor(mouseY/(size))
		console.log(mazeArray[yPos][xPos])
		if(mazeArray[yPos][xPos] === 0)
			mazeArray[yPos][xPos] = 1

		else if(mazeArray[yPos][xPos] === 1)
			mazeArray[yPos][xPos]=0

		// Recrete the node map accordingly
		maze.allNodes = []
		firstNode = new Node(maze.start.x,maze.start.y, maze.start.value)
		firstNode.g = 0
		maze.createNodeMap(firstNode)
		allNodes = []
		allNodes  = maze.allNodes
		openSet = []
		openSet.push(firstNode)
	}
}



// This function checks in the array if our node (which presumably has unique coordinate) already is there
Array.prototype.isThereNode = function (node) {
	return this.find(currentNode=>(currentNode.x===node.x&&currentNode.y===node.y))
}
