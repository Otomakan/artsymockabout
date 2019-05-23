class Vector{
	constructor(x, y){
		this.x = x
		this.y = y
	}
	add(otherVector){
		return new Vector(this.x + otherVector.x, this.y + otherVector.y)
	}
}
class Vehicule {
	constructor(x, y, acceleration, velocity, health){
		this.loc = new Vector(x, y)
		this.acceleration = acceleration
		this.velocity  = velocity
		this.health = health
	}

	display(){
		noFill()
		stroke(0)
		strokeWeight(2)
		rect(this.loc.x, this.loc.y, 10,10)
	}
	move(){
		this.loc = this.loc.add(this.velocity)
	}
	correctiveFunction(){

	}
	steer(){

	}
	lookAround(foodArray,poisonArray){
		foodArray.forEach((food)=>{
			noFill()
			stroke(0)
			strokeWeight(1)
			ellipse(this.loc.x, this.loc.y, 60,60)
			// dx = abs(x-center_x)
			// dy = abs(y-center_y)
			// R = radius
			if (pow(abs(food.x - this.loc.x),2) + pow(abs(food.y - this.loc.y),2) < pow(30,2)){
				
				ellipse(food.x,food.y, 10,10)
				const dx = (this.loc.x - food.x)/(this.loc.y - food.y)
				const dy = (this.loc.y - food.y)/(this.loc.x - food.x)
				this.velocity.x  = dx
				this.velocity.y  = dy

			}
		})
		// poisonArray.forEach((poison)=>{
		// 	noFill()
		// 	stroke(0)
		// 	strokeWeight(1)
		// 	ellipse(this.loc.x, this.loc.y, 60,60)
		// 	// dx = abs(x-center_x)
		// 	// dy = abs(y-center_y)
		// 	// R = radius
		// 	if (pow(abs(poison.x - this.loc.x),2) + pow(abs(poison.y - this.loc.y),2) < pow(30,2)){
				
		// 		ellipse(poison.x,poison.y, 10,10)
		// 		this.velocity.x  = (this.loc.x - poison.x)/(this.loc.y - poison.y)
		// 		this.velocity.y  = (this.loc.y - poison.y)/(this.loc.x - poison.x)

		// 	}
		// })
	}

}

class Eatables{
	constructor(x,y, size){
		this.x = x
		this.y = y
		this.size = size
	}
	position(){
		noStroke()
		ellipse(this.x, this.y, this.size, this.size)
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