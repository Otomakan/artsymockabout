
let target = "i\wfucking\wlove\wcheeseman"
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
	fitness = 1
	for (let key in target){
		if(target[key]==word[key])
			fitness+=1
	}
	return Math.pow(fitness)
}

const mate = (population)=>{
	const newGeneration = []
	let totalfitness = 0
	for (let word in population){
		totalfitness+= population[word].fitness
	}
	//pick parent
	for(let i=0;i<population.length;i++){
		let p1 = pickParent(totalfitness,population)
		let p2 = pickParent(totalfitness, population.filter(word=>word.val !=p1.val))

		let baby = newWord(makeBaby(p1.val,p2.val))
		newGeneration.push(baby)
	}
	
	return newGeneration
	
}

const pickParent = (chances,population)=>{
	
	while(true){
		let selectedWord = poolSelection(chances,population)
		if(Math.floor(Math.random()*chances)<selectedWord.fitness){
			return selectedWord
		}
		
	}
}

const poolSelection = (chances,pool)=>{

	while(true){
		counter+=1
		for(let word in pool){
			if(Math.floor(Math.random()*chances)<pool[word].fitness){
			return pool[word]
		}
		}
		if(counter==20){
			console.log("IT going crazy "+ counter)
		}
	}
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
	constructor(val, fitness) {
		this.val = val
	  	this.fitness = fitness
	}
}
const newWord = (val)=>{
	let fitness = fitnessFunction(target,val)
	return new Word(val,fitness )
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
