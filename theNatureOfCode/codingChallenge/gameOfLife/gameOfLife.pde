
import java.util.Arrays;
int gridSize = 100;
int grid[][] = new int[gridSize][gridSize];
int rectSize = 600/gridSize;
int[] deadCellRulesLive = {3};
int [] liveCellRulesLive = {2,3};


void setup(){
  size(600,600);
  frameRate(10);
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
  int[][] gridCopy =  new int[gridSize][gridSize];
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
         if (Arrays.binarySearch(liveCellRulesLive, nCounter)>=0){
          gridCopy[x][y]=1;
        }
        else{
          gridCopy[x][y]=0;
        }
       
      }
      //Rule for Dead Cell
      else if(grid[x][y]==0){

       if (Arrays.binarySearch(deadCellRulesLive, nCounter)>=0){
          gridCopy[x][y]=1;
        }
        else{
        gridCopy[x][y]=0;
        }
      }
      
      }
    }
    
    grid = gridCopy;
    for(int x=1; x<grid.length-1;x++){
    for(int y=1; y<grid[x].length-1;y++){
      if(grid[x][y]==1){
        rect(x*rectSize, y*rectSize, rectSize,rectSize);
      }
    }
  }
}

public boolean findInt(int[] intlist, int desired){
   for (int num : intlist){
       if (desired == (num)) {
           return true;
       }
   }
   return false; //if we get here… there is no desired String, return false.
}