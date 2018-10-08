
let gridHeight = 300;
let gridWidth = 300;
let grid =[];
let rectSize = 600/gridHeight;
let deadCellRulesLive = [3,6,7,8];
let liveCellRulesLive = [3,4,6,7,8];
let cycle=0;

  let gridCopy =  [];
function setup(){
  createCanvas(600,600);
  frameRate(30);
  // background(0);
  for(let i=0; i<gridWidth;i++){
    grid[i]=[];
    gridCopy[i]=[];
    for(let ii=0; ii<gridHeight;ii++){
      grid[i].push(0);
      gridCopy[i].push(0);
      rando = random(0,1);
      if (rando<0.47){
        grid[i][ii]=1;
      }
    }
  }
}

function draw(){
  background(255);
  noStroke();
  fill(0);

      console.log(grid)

  for(let x=1; x<gridWidth-1;x++){
    // gridCopy[x]=[];
    for(let y=1; y<gridHeight-1;y++){
      
      //We are going clockwise here from the top
      
      let neighbour =[
        grid[x][y+1],
        grid[x+1][y+1],
        grid[x+1][y],
        grid[x+1][y-1],
        grid[x][y-1],
        grid[x-1][y-1],
        grid[x-1][y],
        grid[x-1][y+1]]
      let nCounter=0;
      for(let n=0; n<neighbour.length; n++){
        if(neighbour[n]==1){
          nCounter +=1
        }
      }      //Rules for live cells
      if(grid[x][y]==1){
         if (liveCellRulesLive.includes(nCounter)){
          gridCopy[x][y]=1;
        }
        else{
          gridCopy[x][y]=0
        }
       
      }
      //Rule for Dead Cell
      else {

       if (deadCellRulesLive.includes(nCounter)){
          gridCopy[x][y]=1;
        }
        else{
          gridCopy[x][y]=0
        }
      }
      
      }
    }
  
    grid = gridCopy;
  
  for(let x=1; x<gridWidth-1;x++){
    for(let y=1; y<gridHeight-1;y++){
      if(grid[x][y]==1){
        rect(x*rectSize, y*rectSize, rectSize,rectSize);
      }
    }
  }

  cycle+=1;
}
