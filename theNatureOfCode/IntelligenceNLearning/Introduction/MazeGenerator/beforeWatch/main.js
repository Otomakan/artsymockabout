
class Cell {
	constructor(){
		this.top= 0
		this.right= 0
		this.bottom= 0
		this.left= 0
		this.maze = 0
	}

}
class Wall {
	constructor(props) {
	  this.a;
	  this.b;
	}
}
class Edge{
	constructor(){
		this.nodeA;
		this.nodeB;
	}
}
class Grid{
	constructor(width,height) {
	  this.width = width
	  this.height = height
	  this.cells = []
	  this.edges
	  this.wallsList = []
	  this.maze = []
	}
	addAdjacentWalls(x,y){
		if(this.cells[x+1][y].maze===0)
	  		this.wallsList.push([x+1,y])
	  	if(this.cells[x][y+1].maze===0)
	  		this.wallsList.push([x,y+1])
	  	if(this.calls[x-1][y].maze===0)
	  		this.wallsList.push([x-1,y])
	  	if(this.calls[x][y-1].maze===0)
	  		this.wallsList.push([x,y-1])
	}

}
let gridWidth = 30
let gridHeight = 25
let grid = new Grid(gridWidth,gridHeight)

for (let i = 0; i<gridWidth; i++){
	grid.cells.push([])
	for(let ii=0; ii<gridHeight;ii++){
		grid.cells[i][ii]= new Cell()	
		if(i>1){

		}
	}
}

for (let i=0; i<gridWidth;i++){
	for(let ii=0; ii<gridHeight;ii++){
		grid.cells[i][ii].top = new Edge(grid.cells[i][ii+1])		
		grid.cells[i][ii].right = new Edge(grid.cells[i+1][ii])
		grid.cells[i][ii].bottom = new Edge(grid.cells[i][ii-1])
		grid.cells[i][ii].left = new Edge(grid.cells[i-1][ii])
	}
}

Array.prototype.equals = (target, bob)=>{
	console.log(bob)
	if(!Array.isArray(target)){
		console.log('not an array')
		return false
	}
	if(this.length != target.length){
		console.log(this)
		console.log(target.length)
		console.log('different length')
		return false
	}
	target.forEach((el,i)=>{
		console.log(el)
		console.log(i)
		if(el!=this[i])
			return false
	})

	return true
}


console.log(grid)