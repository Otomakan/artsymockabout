  int gridSize = 10;
  int [][][] grid = new int[gridSize][gridSize][gridSize];
  int boxSize=250;
  
void setup(){
  size(600,600,P3D);
}

void draw(){
  translate(mouseX/2,height/2,0);
  background(0);
  noFill();
  stroke(255);
  strokeWeight(1);
  rotateY(100);
  for(int x=1; x<grid.length-1;x++){
   for(int y=1; y<grid[x].length-1;y++){
   for(int z=1; z<grid[y].length-1;z++){
     pushMatrix();
     translate(-boxSize/2,-boxSize/2,-boxSize/2);
     translate(x*(boxSize/gridSize),y*(boxSize/gridSize),z*(boxSize/gridSize));
    box(boxSize/gridSize);
    popMatrix();
  }
  }
  }
  stroke(0,250,0);
  box(boxSize);
}

int[][] findNeighbour(int[][][] pos){
  int [][] finalValue = new int[3*3*3][3];
  for(int i=0;i<finalValue.length;i++){
  for(int x=1; x<grid.length-1;x++){
   for(int y=1; y<grid[x].length-1;y++){
   for(int z=1; z<grid[y].length-1;z++){
     int
     }
     }
   }
   }
  return finalValue;
}
