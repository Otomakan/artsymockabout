

class Graph{
	constructor(width,height) {
	  this.rootNode = new Node(0,0,0)
	  this.allNodes = []
	  this.width = width
	  this.height = height
	  this.edges = []
	}
	createGraph(rootNode){
		if(rootNode.x>this.width && rootNode.y>this.height){
			console.log('blo')
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
		this.edges[((this.edges.findIndex((e)=> e==edge)))] = null
		// bob = null
		edge = null
	}
}
class Edge{
	constructor(parent,child){
		this.parent = parent
		this.child = child
	}
	display(){
		push()
		stroke(250)
		strokeWeight(2)
		line(20+this.child.x*100,20+this.child.y*100,20+this.parent.x*100+100,20+this.parent.y*100+100)
	
		pop()
	}
}
class Node  {
	constructor(x,y,parent) {
		this.visited = 0
		this.x = x
		this.y = y
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
	displayNode(){
		push()
		fill(255,0,0)
		stroke(0)
		strokeWeight(2)
		rect(20+this.x*100,20+this.y*100,100,100)

		point(20+this.x*100,20+this.y*100)
		
		pop()
	}
	displayWalls(){
		push()
		stroke(250)
		strokeWeight(2)
		if(this.rightChild)
			line(20+this.rightChild.x*100+100,20+this.rightChild.y*100, 20+this.rightChild.x*100+100,20+this.rightChild.y*100+100)
		if(this.leftChild){
			stroke(0,234,0)
			line(20+this.leftChild.x*100,20+this.leftChild.y*100+100, 20+this.leftChild.x*100+100+100,20+this.leftChild.y*100)
		}
		pop()
	}
}
