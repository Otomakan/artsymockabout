PerlinScape ls;
import java.util.Random;
Random generator;
import java.lang.*;

int ballspacing =4;

float zpos = 0;
void setup() {
  size(640,360,P3D);
  background(255);
  //frameRate(10);
  ls = new PerlinScape();
  ls.setupPositions();
  
}

void draw() {
     background(0);
     spotLight(255, 0, 0, width/2, height/2, 400, 0, 0, -1, PI/4, 2);
     camera(mouseX/2, mouseY+height, (mouseX/2) / tan(PI/6), width/2, height/2, 0, 0, 1, 0);
     //translate(width/2, height/2, -100);
     ls.draw();
     //zpos-=2;
  }

class PerlinScape{
  float zoff;
  float [][] spos = new float[(640*360)/(ballspacing*ballspacing)][4];
  float xpos;
  float ypost;
  int lineColor = 0;
  PerlinScape(){
   zoff =0.0;
  }
  void setupPositions() {
  
  for(int i=0; i < (640*360)/(ballspacing*ballspacing); i++){
        spos [i][0] = (float)i%(640/ballspacing)*ballspacing;
        spos [i][1] = (float)Math.floor(i/(640/ballspacing))*ballspacing;
        spos [i][2] = map(noise(zoff),0,1,0,30);
        spos [i][3] = lineColor;
        zoff +=0.1;
        lineColor+=1;
        if(lineColor>250){
          lineColor=0;
        }
    }
  }
  
  void draw(){
   
      for (int i = 0; i < spos.length-(640/ballspacing); i++){
        pushMatrix();
        //translate(spos[i][0],spos[i][1],spos[i][2]);
        //noFill();
        pushStyle();
        stroke(spos[i][3]);
        //fill(250);
        line(spos[i][0], spos[i][1], spos[i][2],spos[i+1][0], spos[i+1][1], spos[i+1][2]);
        line(spos[i][0], spos[i][1], spos[i][2],spos[i+(640/ballspacing)][0], spos[i+(640/ballspacing)][1], spos[i+(640/ballspacing)][2]);
        popStyle();
        popMatrix();
 
    }
  }
}

public class Coordinate<x,y,z> {
  public  float x;
  public float y;
  public float z;
  public Coordinate(float x, float y, float z){
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
