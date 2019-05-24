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
	
}
class Vehicule {
	constructor(x, y, acceleration, velocity, health,size){
		this.loc = new Vector(x, y)
		this.acceleration = acceleration
		this.velocity  = velocity
		this.health = health
		this.size = size
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
	correctiveFunction(){

	}
	steer(){

	}
	lookAround(foodArray,poisonArray){
		foodArray.forEach((food, foodIndex)=>{
			noFill()
			stroke(0)
			strokeWeight(1)
			ellipse(this.loc.x, this.loc.y, 60,60)
			const distanceX = abs(food.x-this.loc.x)
			const distanceY = abs(food.y-this.loc.y)
			
			// R = radius
			// If in tadius
			if(distanceX <= this.size/2 && distanceY <= this.size/2 ){
				foodArray.splice(foodIndex, 1)
			}
			if (pow(abs(food.x - this.loc.x),2) + pow(abs(food.y - this.loc.y),2) < pow(30,2)){
				ellipse(food.x,food.y, 10,10)

				if(!distanceX<=1 || !distanceY <= 1){
					let dx = distanceX/distanceY
					let dy = distanceX/distanceY
					if(dx>1){
						console.log(dx)
						return
					}
		
					this.velocity.x  = dx
					this.velocity.y  = dy
				}
			}

			})
		// })
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