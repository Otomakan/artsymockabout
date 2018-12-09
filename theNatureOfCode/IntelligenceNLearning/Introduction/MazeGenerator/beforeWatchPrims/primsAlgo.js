

class Graph{
	constructor(width,height) {
	  this.rootNode = new Node(0,0,0)
	  this.allNodes = []
	  this.width = width
	  this.height = height
	  this.edges = []
	  this.mazeNode = []
	  this.wallList = []
	  this.start = true
	}
	createGraph(rootNode){
		if(rootNode.x>this.width && rootNode.y>this.height){
			return
		}
		this.allNodes.push(rootNode)
		let leftExists = false
		let rightExists = false
		this.allNodes.forEach((node)=>{
			if(node.x ==rootNode.x+1 && node.y ==rootNode.y){
				rootNode.leftChild = node 
				let edge = new Edge(rootNode, rootNode.leftChild)
				rootNode.leftChild.parent.push(rootNode)
				rootNode.leftChild.edges.bottom = edge
				this.edges.push(edge)
				leftExists =true
			}
			if(node.y == rootNode.y+1 && node.x == rootNode.x){
				rootNode.rightChild = node
				let edge = new Edge(rootNode, rootNode.rightChild)
				rootNode.rightChild.parent.push(rootNode)
				rootNode.rightChild.edges.bottom = edge
				this.edges.push(edge)
				rightExists=true
			}
		})
		if(rootNode.x<this.width && !leftExists){
			rootNode.leftChild = new Node(rootNode.x+1,rootNode.y,rootNode)
			// this.leftChild.display()
			let edge = new Edge(rootNode, rootNode.leftChild)
			rootNode.leftChild.edges.top = edge
			rootNode.edges.left = edge
			this.edges.push(edge)
			this.createGraph(rootNode.leftChild)
			
		}
		if(rootNode.y<this.height && !rightExists){
			rootNode.rightChild = new Node(rootNode.x, rootNode.y+1,rootNode)
			let edge = new Edge(rootNode, rootNode.rightChild)
			rootNode.rightChild.edges.top = edge
			rootNode.edges.right = edge
			this.edges.push(edge)
			// this.rightChild.display
			this.createGraph(rootNode.rightChild)
		}
		
		// else 
		// 	return
	}
	refreshGraph(){

	}

	removeEdge(edge){
		// edge = null
		this.edges[((this.edges.findIndex((e)=> e==edge)))].up = false
		// bob = null
		edge = null
	}
	pimsAlgo(){
		//Select random edge
		let wallList = this.wallList
		if(this.start){
			let startNode = this.allNodes[floor(random(0,this.allNodes.length))];
			this.start = false
			startNode.included = true
			for (let ed in startNode.edges){
				if(!startNode.edges[ed])
					continue
				
				else
					wallList.push(startNode.edges[ed])
			}
		}
		if(wallList.length>0){
			let selectedWallIndex = floor(random(0,wallList.length))
			let selectedWall = wallList[selectedWallIndex]
			if((selectedWall.parent.included && !selectedWall.child.included)|| (selectedWall.child.included && !selectedWall.parent.included)){
				selectedWall.up = false
				if(!selectedWall.parent.included){
					selectedWall.parent.included = true
					for (let ed in selectedWall.parent.edges){
						if(!selectedWall.parent.edges[ed])
							continue			
						else
							wallList.push(selectedWall.parent.edges[ed])
					}
				}
				else {
					selectedWall.child.included = true
					for (let ed in selectedWall.child.edges){
						if(!selectedWall.child.edges[ed])
							continue
						else
							wallList.push(selectedWall.child.edges[ed])
					}
				}
			}
			wallList.splice(selectedWallIndex,1)
		}
	}
}
class Edge{
	constructor(parent,child){
		this.parent = parent
		this.child = child
		this.up = true
	}
	display(graphWidth, graphHeight){
		if(this.up){
			push()
			stroke(250)
			strokeWeight(2)
			line(this.child.x*(width/graphWidth),this.child.y*(height/graphHeight),this.parent.x*(width/graphWidth)+(width/graphWidth),this.parent.y*(height/graphHeight)+(height/graphHeight))		
			pop()
		}
	}
}
class Node  {
	constructor(x,y,parent) {
		this.x = x
		this.y = y
		this.included = false
		// this.edges
		this.parent =[parent]
		this.rightChild
		this.leftChild
		this.edges = {
			top:null,
			right:null,
			bottom:null,
			left:null
		}
	}
	createChildren(w,h, nodeList){
		
	}
	displayNode(graphWidth,graphHeight){
		if(!this.included){
			push()
			fill(255,0,0)
			stroke(0)
			strokeWeight(2)
			rect(this.x*(width/graphWidth),this.y*(height/graphHeight),width/graphWidth,height/graphHeight)
			// point(this.x*(width/graphWidth),this.y*(height/graphHeight))
			
			pop()
		}
	}

}
