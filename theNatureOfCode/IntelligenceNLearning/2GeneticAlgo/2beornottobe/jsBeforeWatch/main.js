
let target = "ifuckinglovecheeseman"
//Array containing element with fitness function
let elements = []
let elementsLength = 200
let mutationRate = 1

const randomWord = (length)=>{
	 var possible = "abcdefghijklmnopqrstuvwxyz\w"
	 var result = ""
	 for(let i=0; i<length;i++){
	 	result +=(possible.charAt(Math.floor(Math.random()*possible.length)))
	 }
	return result
}



const fitnessFunction = (target, word)=>{
	weight = 0
	for (let key in target){
		if(target[key]==word[key])
			weight+=1
	}
	return weight
}

const mate = (population)=>{
	const newGeneration = []
	let totalWeight = 0
	for (let word in population){
		totalWeight+= population[word].weight
	}
	//pick parent
	for(let i=0;i<population.length;i++){
		let p1 = pickParent(totalWeight,population)
		let p2 = pickParent(totalWeight, population.filter(word=>word.val !=p1.val))

		let baby = newWord(makeBaby(p1.val,p2.val))
		newGeneration.push(baby)
	}
	
	return newGeneration
	
}

const pickParent = (chances,population)=>{
		parent = null
		while(!parent){
			for(let word in population){
				if(Math.floor(Math.random()*chances)<population[word].weight){
					return population[word]
				}
			}
		}
		return parent
	}
const makeBaby=(p1,p2)=>{
	let baby = ""
	for(let char in p1){
		let coin = Math.random()
		if(coin<(1-mutationRate/100)/2)
			baby+=p1[char]
		else if(coin<(1-mutationRate/100))
			baby+=p2[char]
		else {
			var possible = "abcdefghijklmnopqrstuvwxyz"
			baby+=possible.charAt(Math.floor(Math.random()*possible.length))
		}
	}
	return baby
}


class Word{
	constructor(val, weight) {
		this.val = val
	  	this.weight = weight
	}
}
const newWord = (val)=>{
	let weight = fitnessFunction(target,val)
	return new Word(val,weight )
}
//Initializing first generation
for(let i=0;i<elementsLength;i++){
	let word = randomWord(target.length)
	elements.push(newWord(word))
}

const isRight = ()=>{

}

let newGen = []
let found = false
let counter = 0
while(!found){
	elements = mate(elements)
	elements.forEach(function (word) {
		if(word.val==target){
			console.log('success')
			found = true
		}
	})
	console.log(counter)
	counter += 1
}
console.log(elements)
console.log(counter)
