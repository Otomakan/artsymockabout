
let gridHeight = 100;
let gridWidth = 100;
let grid =[];
let rectSize = 600/gridHeight;
let deadCellRulesLive = [3,6,7,8];
let liveCellRulesLive = [3,4,6,7,8];

function setup(){
  createCanvas(600,600);
  frameRate(10);
  for(let i=0; i<gridWidth;i++){
    grid[i]=[];
    for(let ii=0; ii<gridHeight;ii++){
      grid[i][ii]= 1
      rando = random(0,1);
      if (rando<0.9){
        grid[i][ii]=1;
      }
    }
  }
}

function draw(){
  background(190)
  noStroke()
  fill(0)
  let gridCopy =  []
  // gridCopy=grid
  // gridCopy.splice(0, gridCopy.length,...grid)
  for(let x=1; x<gridWidth-1;x++){
    gridCopy[x]=[];
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
        // Counting the number of neighbours for each cells
      let nCounter=0;
      for(let n=0; n<neighbour.length; n++){
        if(neighbour[n]==1){
          nCounter +=1
        }
      }      

      //Rules for live cells
      if(grid[x][y]==1){
         if (liveCellRulesLive.includes(nCounter)){
          gridCopy[x][y]=1
        }
        else{
          gridCopy[x][y]=0
        }
      }
      //Rule for Dead Cell
      else if(grid[x][y]==0){
       if (deadCellRulesLive.includes(nCounter)){
          gridCopy[x][y]=1;
        }
        else{
          gridCopy[x][y]=0
        }
      }
      if(gridCopy[x][y]==1){
        rect(x*rectSize, y*rectSize, rectSize,rectSize);
      }
      }
    }
  
    // grid.splice(0, grid.length,...gridCopy)
    for(let x =0; x<grid.length;x++){
      for(let y=0;y<grid[x].length;y++){
        if(gridCopy[x]){
            grid[x][y]=gridCopy[x][y]
      }}
    }
      // gridCopy.map((x,ind)=>{
      //   // console.log(x)
      //   x.map((y,ind2)=>{
      //     // console.log(ind2)
      //     if(typeof(y)=='number'){
      //       grid[ind][ind2]=y;
      //     }
      //   })
      // })
  }

