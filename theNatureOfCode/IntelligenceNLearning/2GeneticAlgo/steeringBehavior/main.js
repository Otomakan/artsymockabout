


let poisons = []
let foods = []
let vehicules = []
let redDot = new Food(100,100,30)
const getRandomX = () => random(0,640)
const getRandomY = () => random(0,480)
const getRandomVelocity = () => new Vector(random(-1,1), random(-1,1))

function setup() {
  createCanvas(640, 480)
    for(let i = 0; i < 30; i++) {
        poisons.push(new Poison(getRandomX(), getRandomY(), 5))
    }
    for(let i = 0; i < 50; i++) {
        foods.push(new Food(getRandomX(), getRandomY(), 5))
    }
    for(let i = 0; i < 5; i++) {
        const defaultHealth = 10
        const defaultAcceleration = 0.01

        vehicules.push(new Vehicule(getRandomX(), getRandomY(), defaultAcceleration, getRandomVelocity(), defaultHealth))
    }
    frameRate(10)
}
function draw() {
    background(252, 245, 194)
    poisons.forEach((poison)=>{poison.display()})
    foods.forEach((food)=>{food.display()})
    vehicules.forEach((vehicule)=>{vehicule.display();vehicule.move();vehicule.lookAround(foods, poisons)})
}

