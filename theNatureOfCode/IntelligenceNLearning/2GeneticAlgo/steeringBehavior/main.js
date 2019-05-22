


let poisons = []
let foods = []
let redDot = new Food(100,100,30)
function setup() {
  createCanvas(640, 480)
    for(let i = 0; i < 30; i++){
        poisons.push(new Poison(random(0,640), random(0,480), 5))
    }
    for(let i = 0; i < 50; i++){
        foods.push(new Food(random(0,640), random(0,480), 5))
    }
}
function draw() {
    background(252, 245, 194)
    poisons.forEach((poison)=>{poison.display()})
    foods.forEach((food)=>{food.display()})
}

