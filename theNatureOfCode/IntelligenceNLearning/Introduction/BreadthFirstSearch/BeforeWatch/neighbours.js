class Group{
	constructor(list) {
		this.elements = []
		for (let key in list){
			this.elements.push(new Node(val,list[key]))
		}
	}
	connectNodes(){
		this.elements.forEach(()=>{})
	}
	checkForNode(){

	}
}

class Node{
	constructor(parent) {
		if(parent)
			this.neighbours = [parent]
		else 
			this.neighbours = []
		this.val 
		this.marked
	}
	keepRootOut(root){

	}
	setConnections(rootkey, list,seen_val){
		if(seen_val==undefined)
			seen_val=[]
		seen_val.push(rootkey)
		this.val=rootkey
		let that=this

		if(list[rootkey].length>0){
			list[rootkey].forEach(function(subval,i){
				if(!seen_val.includes(subval)){
					that.neighbours.push(new Node(that))
					that.neighbours[i].setConnections(subval,list,seen_val)
					return seen_val
				}
				else{
					that.neighbours.push(that.findNeighbour(subval))
					return seen_val
				}
			})
		}
		else 
			return seen_val
				
	}
	findNeighbour(val){
		let that = this
		console.log('bloloo')
		console.log(this)
		if(this.neighbours.length>0){
		this.neighbours.forEach((subval,i)=>{
			console.log(subval.val)
			console.log(val)
			if(subval.val==val){
				console.log(that.neighbours[i])
				return that.neighbours[i]

			}
			else if(i>this.neighbours.length)
				return that.neighbours[i].findNeighbour(val)
		})
		}
	}
	checkIfNodeExists(name){

	}

	display(){

	}
	

}