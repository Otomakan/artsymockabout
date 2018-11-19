/// <reference path="global.d.ts" />

// for red, green, and blue color values
// var r, g, b;

let graphWidth = 50
let graphHeight = 50
  var myGraph = new Graph(graphWidth,graphHeight)
function setup() {
  createCanvas(600, 600);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
  // frameRate(30);
  // console.log(grid)

  // let xrand = floor(random(0, grid.width))
  // let yrand = floor(random(0,grid.height))

  //  grid.cells[xrand][yrand].maze = 1
  // grid.addAdjacentWalls(xrand,yrand)
  myGraph.createGraph(myGraph.rootNode)

}

function draw() {
  background(51);
  // rect(0,0,grid.width*10,grid.height*10)

  // if(grid.wallsList.length != 0){
  //   let randomWall = floor(random(0, grid.wallsList.length))
  //   let selectedWall = this.wallsList(randomList)
  //   grid.addAdjacentWalls(selectedWall[0],selectedWall[1])
  //   // let yrand = floor(random(0,grid.wallsList.length))

  //   // grid.cells[xrand][yrand].maze = 1
  //   // grid.addAdjacentWalls(xrand,yrand)
  // }
  myGraph.allNodes.forEach(function (node,it) {
    node.displayNode(graphWidth,graphHeight)
  })
   myGraph.edges.forEach(function (edge,it) {
    
    if(edge == null)
      return
    edge.display(graphWidth,graphHeight)
  });

  myGraph.pimsAlgo()
  // console.log(rootNode)
  // console.log(nodeList)

  // for (let i=0; i<grid.width;i++){
  //   for(let ii=0; ii<grid.height;ii++){
  //     pop();
  //     if(grid.cells[i][ii].maze==1)
  //       fill(240)
  //     else
  //       fill(0)
  //     rect(i*10,ii*10, 10,10)
  //     push();
  //   }
  // }
}
