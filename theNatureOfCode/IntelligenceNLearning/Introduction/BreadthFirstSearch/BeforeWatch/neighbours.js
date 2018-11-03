// class Group{
// 	constructor(list) {
// 		this.elements = []
// 		for (let key in list){
// 			this.elements.push(new Node(val,list[key]))
// 		}
// 	}
// 	connectNodes(){
// 		this.elements.forEach(()=>{})
// 	}
// 	checkForNode(){

// 	}
// }

// class Node{
// 	constructor(val,parent) {
// 		if(parent){
// 			this.neighbours = [parent]
// 		}
// 		else 
// 			this.neighbours = []
// 		this.parent=parent
// 		this.val = val
// 		this.marked = false
// 	}
// 	keepRootOut(root){

// 	}
// 	setConnections(rootkey, list,seen_val){
// 		if(seen_val==undefined){
// 			seen_val=[]
// 			seen_val.push(rootkey)}

// 		this.val=rootkey
// 		// let that=this
// 		// console.log(this)

// 		// if(list[rootkey].length>0){
// 		// if(list[rootkey].length==this.neighbours.length)
// 		// 	return
// 		for(let i =0; i<list[rootkey].length;i++){
// 			let subval = list[rootkey][i]
// 			// console.log(subval)/
// 			if(!seen_val.includes(subval)){
// 				seen_val.push(subval)
// 				this.neighbours.push(new Node(subval,this))
// 				console.log(new Node(subval,this))
// 			}
// 			else{
// 				console.log('in else')
// 				this.neighbours.push(this.findNeighbour(subval))
// 				console.log('out else')
// 				}
// 		}
		
// 		// if(!seen_valthis.val)
// 		for(let i=0;i<this.neighbours.length;i++){	
// 		// console.log			
// 			this.neighbours[i].setConnections(this.neighbours[i].val,list,seen_val)
// 		}
// 	}
// 	findNeighbour(val,visited_neighbours){
// 		let that = this
// 		if(visited_neighbours==undefined)
// 		 	visited_neighbours =[]
// 		// if(this.neighbours.length>0){
// 		for(let i =0; i<this.neighbours.length;i++){
// 			console.log(this.neighbours[i].val)
// 			console.log(val)
// 			// console.
// 			if(this.neighbours[i].val==val){
// 				console.log('fdsfsd')
// 				// console.log
// 				return that.neighbours[i]
// 				break;

// 			}
// 			else {
// 				// console.log(visited_neighbours)
// 				// console.log(subval.val)
// 				console.log(this.neighbours[i])
// 				visited_neighbours.push(this.neighbours[i].val)
// 				return this.neighbours[i].findNeighbour(val, visited_neighbours)
// 			}

// 		} 
// 		// this.neighbours.forEach((subval,i)=>{
// 			// if(subval.val==val){
// 			// 	console.log('fdsfsd')
// 			// 	// console.log
// 			// 	return that.neighbours[i]

// 			// }
// 			// else {
// 			// 	// console.log(visited_neighbours)
// 			// 	// console.log(subval.val)
// 			// 	console.log(that.neighbours[i])
// 			// 	visited_neighbours.push(subval.val)
// 			// 	return that.neighbours[i].findNeighbour(val, visited_neighbours)
// 			// }
// 		// })
// 		// }
// 		// else 
// 		// 	return 
// 	}
// 	checkIfNodeExists(name){

// 	}

// 	display(){

// 	}
	

// }