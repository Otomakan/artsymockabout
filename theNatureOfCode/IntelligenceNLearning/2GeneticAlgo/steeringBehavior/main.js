


let poisons = []
let foods = []
let vehicules = []
let redDot = new Food(100,100,30)
const getRandomX = () => random(0,640)
const getRandomY = () => random(0,480)
const getRandomVelocity = () => new Vector(random(-1,1), random(-1,1))

function setup() {
  createCanvas(640, 480)
    for(let i = 0; i < 20; i++) {
        poisons.push(new Poison(getRandomX(), getRandomY(), 5))
    }
    for(let i = 0; i < 20; i++) {
        foods.push(new Food(getRandomX(), getRandomY(), 5))
    }
    for(let i = 0; i < 4; i++) {
        const defaultHealth = 10
        const defaultAcceleration = 1
        const defaultSize =10
        const defaultMaxSpeed = 4
        const defaultMaxSteer = 4

        vehicules.push(new Vehicule(getRandomX(), getRandomY(), defaultAcceleration, getRandomVelocity(), defaultHealth, defaultSize, defaultMaxSpeed, defaultMaxSteer))
    }
    frameRate(10)
}
function draw() {
    background(252, 245, 194)
    vehicules.forEach((vehicule,vehiculeIndex)=>{
        vehicule.display();vehicule.move();vehicule.lookAround(foods, poisons);
        if(vehicule.health===0){
            vehicules.splice(vehiculeIndex, 1)
        }})
    poisons.forEach((poison)=>{poison.display()})
    foods.forEach((food)=>{food.display()})
}

