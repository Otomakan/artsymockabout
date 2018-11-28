class Graph{
	constructor(){
		this.nodes = []
		this.openSet = []
		this.closeSet = []
		this.meta = []
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
	constructor(val, group,parent) {
	  this.marked = false
	  this.val = val
	  this.neighbours = []
	  this.group = group
	  // useles for referenc
	  this.parent = []
	  // this.created = true

	}
//Probably don't need rootkey, just use this.val
	setConnections(rootkey, list, levelDone){
		this.marked =  true
		// Search the values's neighbours and create nodes accordingly if the value hasn't been visited yet
		if(!this.group.nodes.includes(this.val)){
			for(let i= 0; i<list[this.val].length;i++){
			
				// before creating a node, check if it has been created already
				let neigh = this.group.findNode(list[this.val][i])
				// console.log(neigh)
				if(neigh!=undefined){
					this.neighbours.push(neigh)
					neigh.parent.push(this)
				}
				else {
					neigh = new Node(list[this.val][i], this.group)
					this.group.addNode(neigh)
					this.neighbours.push(neigh)
					neigh.parent.push (this)
					// neigh.neighbours.push(this)
				}

			}
		}
		//Redundant but I'm tired and careful
		else {
			console.log('there is a problem')
			// this.neighbours.push(this.group.findNode(rootkey))
		}
		//Check if all the children have been checked
		if(this.neighbours.length>0){
			if(this.neighbours[this.neighbours.length-1].marked ==true){
				console.log(this.val)
				console.log('all marked')
				for(let i=0;i<this.neighbours.length;i++){
					// If we explored the children, don't do it again
					let neigh = this.neighbours[i]
					neigh.setConnections(neigh.val, list)
					console.log(neigh.neighbours[i])
					for (let ii=0; ii< neigh.neighbours.length;ii++){
						neigh.neighbours[i].setConnections(neigh.val,list, true)
					}
				}
			}
			else{
				// if(levelDone){
					for(let i=0;i<this.neighbours.length;i++){
									// If we explored the children, don't do it again
			
					console.log(`the val is ${this.val} and we are setting ${list[rootkey][i]} `)
					
					let neigh = this.neighbours[i]
					if(!neigh.marked)
						neigh.setConnections(neigh.val, list)
					}
				// }
				// else
				// 	return
			}
		}
		// Now we are checking if the element is marked to go through it
	}
}