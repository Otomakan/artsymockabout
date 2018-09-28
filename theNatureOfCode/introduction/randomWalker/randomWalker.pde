Walker w;
import java.util.Random;
Random generator;

void setup() {
  size(640,360);
  w = new Walker();
  background(255);
  frameRate(150);
  generator = new Random();
}

void draw() {
  w.step();
  w.display();
}


class Walker{
  float x;
   float y;
  Walker() {
     x=width/2;
     y=height/2;
  }
  void display(){
    stroke(9);
    point(x,y);
  }
  
  void step(){
    float num = (float) generator.nextGaussian();
    float sd = 2;
    float mean = 1;
    //float dist = num * sd + mean;
    float dist = levyFlight();
    float stepDirection = random(0,1);
    if (stepDirection <0.25){
      x +=  dist;
    }
    else if (stepDirection <=0.5){
      x -=  dist;
    }
    else if (stepDirection <=0.75){
      y += dist;
    }
    else if (stepDirection <=1){
      y -= dist;
    }
    
  }
}

Float levyFlight() {
 while(true){
   float r1 = random(10);
   float r2 = random(10);
   
   if(r2*r2< r1){
     return r1;
   }
 } 
}
