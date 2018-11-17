let storeX = []
let storeY = []
let nodeList = []
class Node  {
	constructor(x,y) {
		this.visited = 0
		this.x = x
		this.y = y
		// this.edges
		this.parent;
		this.rightChild;
		this.leftChild
	}
	createChildren(w,h){
		console.log('recursing')
		if(this.x>=w && this.y>=h){
			console.log('blo')
			return
		}
		nodeList.push(this)
		nodeList.forEach((node)=>{
			console.log(node)
		})

		if(this.x<w){
			this.leftChild = new Node(this.x+1,this.y)
			// this.leftChild.display()
			this.leftChild.createChildren(w,h)
			
		}
		if(this.y<h){
			this.rightChild = new Node(this.x, this.y+1)
			// this.rightChild.display
			this.rightChild.createChildren(w,h)
		}
		// else 
		// 	return
	}
	display(){
		push()
		fill(255,0,0)
		ellipse(this.x*10,this.y,10*10)
		pop()
	}
}

// class Edge {
// 	constructor(props) {
// 	  super(props);
// 		this.open = 0
// 	  this.state = {};
// 	}
// }

let gridWidth = 30
let gridHeight = 25
// let grid = new Grid(gridWidth,gridHeight)

let pathExplored = []

createGraph(3,3)
function createGraph(w,h){
	let rootNode = new Node(0,0)
	rootNode.createChildren(3,3)
	console.log(rootNode)
	console.log(nodeList)
	// console.log(s)
	// for (let i = 0; i<w; i++){
	// 	for(let ii=0; ii<h;ii++){

	// 	}
	// }
}
// for (let i = 0; i<gridWidth; i++){
// 	grid.cells.push([])
// 	for(let ii=0; ii<gridHeight;ii++){
// 		grid.cells[i][ii]= new Cell()	
// 		if(i>1){

// 		}
// 	}
// }