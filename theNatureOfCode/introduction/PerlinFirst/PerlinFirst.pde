PerlinBackground bg;
import java.util.Random;
Random generator;

void setup() {
  size(640,360);
  background(255);
  frameRate(150);
  bg = new PerlinBackground();
  
  
}

void draw() {
  bg.draw();
  bg.changepos(0.008);
}

class PerlinBackground{
  float xoffstart = 0.0;
  float yoffstart = 0.0;
  float t = 0;
  
  PerlinBackground(){
    xoffstart =0.0;
    yoffstart =0.0;
  }
  void changepos(float rate){
    
    xoffstart =map(noise(t),0,1,0,255);
    //yoffstart =map(noise(t),0,1,0,255);
    t += 0.0008;
  }
  void draw(){
    loadPixels();
    float xoff =xoffstart;
    for(int x=0; x < width; x++){
      float yoff=yoffstart;
      for(int y=0; y < height; y++){
        float bright = map(noise(xoff,yoff),0,1,0,255);
        pixels[x+y*width] = color(bright);
        yoff += 0.005;
      }
      xoff += 0.005;
    }
    updatePixels();  
  }
}
