
class Vehicule {
	constructor(width, height, itemSize){
	
	}
	mazeToGraph(){

	}
	
	display(){
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