/// <reference path="global.d.ts" />

// for red, green, and blue color values
// var r, g, b;

let boxWidth;
let boxHeight;

function setup() {
  createCanvas(grid.width*10, grid.height*10);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
  console.log(grid)

  let xrand = floor(random(0, grid.width))
  let yrand = floor(random(0,grid.height))

   grid.cells[xrand][yrand].maze = 1
  grid.addAdjacentWalls(xrand,yrand)

}

function draw() {
  background(51);
  // Draw a circle
  strokeWeight(2);
  noStroke();
  rect(0,0,grid.width*10,grid.height*10)

  if(grid.wallsList.length != 0){
    let randomWall = floor(random(0, grid.wallsList.length))
    let selectedWall = this.wallsList(randomList)
    grid.addAdjacentWalls(selectedWall[0],selectedWall[1])
    // let yrand = floor(random(0,grid.wallsList.length))

    // grid.cells[xrand][yrand].maze = 1
    // grid.addAdjacentWalls(xrand,yrand)
  }


  for (let i=0; i<grid.width;i++){
    for(let ii=0; ii<grid.height;ii++){
      pop();
      if(grid.cells[i][ii].maze==1)
        fill(240)
      else
        fill(0)
      rect(i*10,ii*10, 10,10)
      push();
    }
  }
}
