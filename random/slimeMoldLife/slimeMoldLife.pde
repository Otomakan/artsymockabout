

int gridSize = 600;
int grid[][] = new int[gridSize][gridSize];
int rectSize = 600/gridSize;


void setup(){
  size(600,600);
  frameRate(20);
  for(int i=0; i<grid.length;i++){
    for(int ii=0; ii<grid[i].length;ii++){
      grid[i][ii]=0;
      float rando = random(0,1);
      if (rando<0.07){
        grid[i][ii]=1;
      }
    }
  }
  grid[gridSize/2][gridSize/2]=1;
  grid[(gridSize/2)+1][(gridSize/2)+1]=1;
  grid[(gridSize/2)+2][(gridSize/2)+1]=1;
  grid[(gridSize/2)-1][(gridSize/2)]=1;
}

void draw(){
  background(255);
  noStroke();
  fill(0);
  for(int x=1; x<grid.length-1;x++){
    for(int y=1; y<grid[x].length-1;y++){
      //We are going clockwise here from the top
      
      int[] neighbour = new int[] {
        grid[x][y+1],
        grid[x+1][y+1],
        grid[x+1][y],
        grid[x+1][y-1],
        grid[x][y-1],
        grid[x-1][y-1],
        grid[x-1][y],
        grid[x-1][y+1]};
      int nCounter=0;
      for(int n=0; n<neighbour.length; n++){
        if(neighbour[n]==1){
          nCounter +=1;
        }
      }
      //Rules for live cells
      if(grid[x][y]==1){
        //#Rule One
        if(nCounter<2){
          grid[x][y]=0;
        }
      //Rule Two
        else if(nCounter==2 || nCounter ==3){
          grid[x][y]=1;
        }
      //Rule Three
        else if(nCounter>3){
          grid[x][y]=0;
        }
      }
      //Rule for Dead Cell
      if(grid[x][y]==0){
        if(nCounter==3){
          grid[x][y]=1;
        }
      }
      
      
      if(grid[x][y]==1){
        rect(x*rectSize, y*rectSize, rectSize,rectSize);
      }
    }
  }
}
