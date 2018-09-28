Ball ball;
void setup(){
  size(640,360);
  background(240);
  ball = new Ball();
}

void draw(){
  ball.draw();
}
class Ball{
  //float xpos;
  //float ypos;
  //float xspeed;
  //float yspeed;
  // REFACTORED VERSION WITH VECTORS;
  PVector location = new PVector(100,100);
  PVector velocity = new PVector(3, 4);
  float[] ballColor = {0.0,0.0,0.0};
  

  void defineColor(){
    float newBlue = map(location.y, 0, 255, 0, height);
    ballColor[2] = newBlue;
  }
  void draw(){
    defineColor();
    fill(ballColor[0],ballColor[1],ballColor[2]);
    noStroke();
    location.add(velocity);
    if(location.x >= width || location.x <=0){
      velocity.x = -velocity.x;
    }
    if(location.y >= height || location.y <=0){
      velocity.y = -velocity.y;
    }
    ellipse(location.x, location.y, 20,20);
    
  }
}

class PVector {
  float x;
  float y;
  
  PVector(float x_, float y_){
    x = x_;
    y = y_;
  }
  void add(PVector otherV){
    y += otherV.y;
    x += otherV.x;
  }
  
}
