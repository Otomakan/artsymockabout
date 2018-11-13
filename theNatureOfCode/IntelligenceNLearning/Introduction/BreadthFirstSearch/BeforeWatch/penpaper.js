class AllNodes{
	constructor(){
		this.nodes = []
	}
	addNode(node){
		this.nodes.push(node)
	}
	findNode(targetName){
		return this.nodes.find((node)=>{
			return node.val === targetName
		})
	}
}

class Node{
	constructor(val, group) {
	  this.marked = false
	  this.val = val
	  this.neighbours = []
	  this.group = group
	  // useles for reference
	  // this.created = true

	}
//Probably don't need rootkey, just use this.val
	setConnections(rootkey, list){
		// Search the values's neighbours and create nodes accordingly if the value hasn't been visited yet
		if(!this.group.nodes.includes(this.val)){
			for(let i= 0; i<list[this.val].length;i++){
			
				console.log(`the val is ${this.val} and we are setting ${list[rootkey][i]} `)
				// before creating a node, check if it has been created already
				let neigh = this.group.findNode(list[rootkey][i])
				// console.log(neigh)
				if(neigh!=undefined){
					this.neighbours.push(neigh)
				}
				else {
					neigh = new Node(list[rootkey][i], this.group)
					this.group.addNode(neigh)
					this.neighbours.push(neigh)
				}
				// If we explored the children, don't do it again
				if(!neigh.marked){
					neigh.setConnections(neigh.val, list)
					this.marked = true
				}
			}
		}
		//Redundant but I'm tired and careful
		else if(this.group.nodes.includes(rootkey)){
			console.log('there is a problem')
			// this.neighbours.push(this.group.findNode(rootkey))
		}
		// Now we are checking if the element is marked to go through it
	}
}