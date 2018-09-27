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
  float xpos;
  float ypos;
  float xspeed;
  float yspeed;
  Ball(){
    xpos = 100;
    ypos = 100;
    xspeed = 1.1;
    yspeed = 4;
  }
  
  void draw(){
    fill(110);
    xpos += xspeed;
    ypos += yspeed;
    if(xpos >= width || xpos <=0){
      xspeed = -xspeed;
    }
        if(ypos >= height || ypos <=0){
      yspeed = -yspeed;
    }
    ellipse(xpos, ypos, 20,20);
    
  }
}
