let array = [
	{i:1,info:'lol'},
	{i:6,info:'super'},
	{i:4,info:'gor'},
	{i:2,info:'generate'},
	{i:5,info:'super'},
	{i:3,info:'ralp'},
	{i:7,info:'emm'},
	]



class Node{
	// ave to figure out a better way to access parent node, here we are storing everything too many times but I'm huuungry
	constructor(parent) {
	  this.left 
	  this.right 
	  this.val 
	  // this.parent = parent
	}
	checkValue(val){
		//if there is no value, set the value of the node to the argument
		if(!this.val){
			this.val = val
		}
		//if the argument is inferior to the current value pass it to the left node
		else if(val.i<this.val.i){
			if(!this.left)
				this.left = new Node()
			// console.log('block')
			// console.log(val.i)
			// console.log(this.val)
			this.left.checkValue(val)

		}
		//if the argument is superior to the current value pass it to the right node
		else if(val.i>this.val.i){
			if(!this.right)
				this.right = new Node()
			this.right.checkValue(val)
		}
	}

	findNumber(objective){
			if(objective==this.val.i){
				return this.val;
			}
			else if(objective<this.val.i)
				return this.left.findNumber(objective)

			//if the argument is superior to the current value pass it to the right node
			else if(objective>this.val.i && this.right)
				return this.right.findNumber(objective)
			
			else{
				return 'Number not found'}

	}

	traverse(counter){
		//Search left if we have one then search deeper otherwise add value then look right
		if(this.left){
			 this.left.traverse(counter)
		}
		 counter.push(this.val)
		if(this.right ){
			 this.right.traverse(counter)			
		} 
		return counter
	}
}


let nodeTree = new Node()
array.forEach( (val,i) =>{
	nodeTree.checkValue(val);
})

// console.log(nodeTree);
// console.log(nodeTree.findNumber(13))
console.log(nodeTree.traverse([]))
// var sortMe 
