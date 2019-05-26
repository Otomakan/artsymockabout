class Vector{
	constructor(x, y){
		this.x = x
		this.y = y
	}
	add(otherVector){
		if(otherVector.x && otherVector.y)
			return new Vector(this.x + otherVector.x, this.y + otherVector.y)
		else
			return new Vector(this.x + otherVector, this.y + otherVector)		
	}

	sub(otherVector){
		if(otherVector.x && otherVector.y)
			return new Vector(this.x - otherVector.x, this.y - otherVector.y)
		else
			return new Vector(this.x - otherVector, this.y - otherVector)	
	}
	setMag(newMagnitude){
		const currentMagnitude = Math.sqrt(this.x * this.x + this.y * this.y)
		if (currentMagnitude != 0 && currentMagnitude != 1) {
			let newX = this.x * newMagnitude / currentMagnitude
			let newY = this.y * newMagnitude / currentMagnitude
			return new Vector(newX, newY)
		  }
		
		  return new Vector(this.x, this.y)
	}

	limit(max){
		const currentMagnitude = Math.sqrt(this.x * this.x + this.y * this.y)
		if ((this.x * this.x + this.y * this.y) > max*max) {
			let newX = this.x/currentMagnitude * max
			let newY = this.y/currentMagnitude * max
			return new Vector(newX, newY)
		}
		return new Vector(this.x, this.y)
	}
	
}
class Vehicule {
	constructor(x, y, acceleration, velocity, health,size, maxSpeed,maxSteer){
		this.loc = new Vector(x, y)
		this.acceleration = acceleration
		this.velocity  = velocity
		this.health = health
		this.size = size
		this.maxSpeed = maxSpeed
		this.maxSteer = maxSteer
	}

	display(){
		noFill()
		stroke(0)
		strokeWeight(2)
		rect(this.loc.x, this.loc.y, this.size,this.size)
	}
	move(){
		this.loc = this.loc.add(this.velocity).add(this.acceleration)
	}

	steer(objective){
		const desiredVelocity = objective.loc.sub(this.loc)
		const adjustedDesiredVelocity = desiredVelocity.setMag( this.maxSpeed )
		const steeredVelocity = adjustedDesiredVelocity.sub(this.velocity)
		const limitedVector = steeredVelocity.limit(this.maxSteer)

		this.velocity = limitedVector
	}

	changeHealth(point){
		this.health += point
		if(this.health===0)
			this.size = 0;
	}
	lookAround(foodArray,poisonArray){
		noFill()
		stroke(0)
		strokeWeight(1)
		ellipse(this.loc.x, this.loc.y, 60,60)
		foodArray.forEach((food, foodIndex)=>{
			
			const distanceX = abs(food.loc.x-this.loc.x)
			const distanceY = abs(food.loc.y-this.loc.y)

			if(distanceX <= this.size/2 && distanceY <= this.size/2 ){
				foodArray.splice(foodIndex, 1)
				this.changeHealth(1)
			}
			if (pow(abs(food.loc.x - this.loc.x),2) + pow(abs(food.loc.y - this.loc.y),2) < pow(30,2)){
				this.steer(food)
			}

		})

		poisonArray.forEach((poison,poisonIndex)=>{
			const distanceX = abs(poison.loc.x-this.loc.x)
			const distanceY = abs(poison.loc.y-this.loc.y)
			
			if(distanceX <= this.size/2 && distanceY <= this.size/2 ){
				poisonArray.splice(poisonIndex, 1)
				this.changeHealth(-1)
			}
			if (pow(abs(poison.loc.x - this.loc.x),2) + pow(abs(poison.loc.y - this.loc.y),2) < pow(30,2)){
				this.steer(poison)
			}
		})
	}

}

class Eatables{
	constructor(x,y, size){
		this.loc = new Vector(x,y)
		this.size = size
	}
	position(){
		noStroke()
		ellipse(this.loc.x, this.loc.y, this.size, this.size)
	}
	eaten(){
		this.x
	}
}
class Food extends Eatables{
	constructor(x,y, size){
		super(x,y, size)
	}
	display(){
		fill(250,0,0)
		this.position()
	}
}

class Poison extends Eatables{
	constructor(x,y, size){
		super(x,y, size)
	}
	display(){
		fill(0,200,0)
		this.position()
	}
}