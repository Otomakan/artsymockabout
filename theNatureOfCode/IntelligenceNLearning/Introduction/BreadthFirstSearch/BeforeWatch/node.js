


class Node  {
	constructor(xpos,ypos) {
		this.children =[]
		this.val
		this.xpos = xpos
		this.ypos = ypos
		this.col
		this.neighbours = []
	}
	setChildren(rootkey,graph){
		this.val = rootkey
		this.displayNode()

		//First we check if there are children
		if(graph[rootkey].length>0){
			let that = this
			//Then we iterate through the values of the root given in the graph
			graph[rootkey].forEach(function (subval, i) {

				//We check if some of the other children have that value as a child
				that.children.forEach((child)=>{
					if(child.val)
				})

				that.children.push(new Node(that.xpos+(120*i),that.ypos+120))
				that.children[i].setChildren(subval,graph)
				that.displayConnections()
			})
		}		
	}
	setChildrenNeighbours(){
		let that=this
		this.children.forEach((child)=>{
			//Setting all the neighbours by using the root's children minus the current value with filter 
			child.neighbours = that.children.filter((each)=> each !== child.val)
		})
	}
	checkNeighbourChildren(){

	}
	traverse(obj){
		let that = this
		this.children.forEach((child,i)=>{
			if(child.val==obj){
				// console.log('success')
				child.col=10
			child.displayNode()
			}
		})
		this.children.forEach((child)=>{
			return child.traverse(obj);
		})

	}
	displayNode(){
		push();
			if(this.col)
				fill(this.col)
			
			else
				fill(230,0,0)
			ellipse(this.xpos,this.ypos,60,60);
			stroke(255)
			fill(255)
			text(this.val,this.xpos-10,this.ypos)
		pop();
	}
	displayConnections(){
		push()
		let that=this
		stroke(255)
		if(this.children)
			this.children.forEach((child)=>{
				line(that.xpos,that.ypos, 
					child.xpos, child.ypos)
			})
		pop()
	}
}