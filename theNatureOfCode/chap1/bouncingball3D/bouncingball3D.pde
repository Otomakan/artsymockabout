//Code full of different ore or les useful features developped as the chapter is being read hence the presence of many redundant and weir features;

Cube cube;

int ballNum =2;
Ball[] ball = new Ball[ballNum];
 
void setup(){
  size (640,500, P3D);
  background(20);
  for (int i = 0; i<ballNum-1; i++){
    ball[i] = new Ball(random((width/2)-110,(width/2)+110), random((height/2)-110, (height/2)+110), random(-110,0));
  }
  cube = new Cube();
 
}
void draw(){
   background(20);
    cube.draw();
   lights();
    for (int i = 0; i<ballNum-1; i++){
    ball[i].draw();
  }
}

void keyPressed(){
  
  if(key ==CODED){
    if (keyCode == UP){
      println("fdsfdsfdfsd");
      for(int i = 0; i<ballNum-1;i++){
        ball[i].speedUp();
      }
    }
      if (keyCode == DOWN){
      for(int i = 0; i<ballNum-1;i++){
        ball[i].slowDown();
      }
    }
  }
}
class Cube{
  PVector location = new PVector(width/2, height/2, 0);
  float size = 220;
  void draw(){
    pushMatrix();
    translate(location.x,location.y,location.z);
    noFill();
    stroke(255);
    rotateY(PI/2);
    box(size);
    popMatrix();
  }
}

class Ball{
    PVector location;
    PVector velocity;
    PVector acceleration;
    float size = 20;
    float t;
    PVector mouse = new PVector(mouseX,mouseY, -50);
    
    Ball(float x, float y, float z){
      location = new PVector(x, y,z);
      acceleration = new PVector(0.001,0.001, 0.001);
      velocity = new PVector(1,1,1);
      t = 0;
      
    }
    void ripple(float x, float y ,float z){
      pushMatrix();
          translate(location.x,location.y,location.z);
          rotateY(PI/2);
          fill(0,222,0);
          ellipse(0,0,100,100);
        popMatrix();
    }
    void perlinAcceleration(){
      acceleration.perlinValue(t);
    }
    void mouseMode(){
      
    }
    void speedUp(){
      if(velocity.x>=0){
        velocity.x += 0.4;}
     if(velocity.y>=0){
        velocity.y += 0.4;}
         if(velocity.z>=0){
        velocity.z += 0.4;}
      if(velocity.x<=0){
        velocity.x -= 0.4;}
     if(velocity.y<=0){
        velocity.y -= 0.4;}
         if(velocity.z<=0){
        velocity.z -= 0.4;}
    }
    void slowDown(){
            if(velocity.x>=0){
        velocity.x -= 0.4;}
     if(velocity.y>=0){
        velocity.y -= 0.4;}
         if(velocity.z>=0){
        velocity.z -= 0.4;}
      if(velocity.x<=0){
        velocity.x += 0.4;}
     if(velocity.y<=0){
        velocity.y += 0.4;}
         if(velocity.z<=0){
        velocity.z += 0.4;}
    }
    
    
    void limit(){
      if(velocity.x >=10){
        velocity.x =10;
        velocity.y =10;
        velocity.z=10;
      }
      //if(velocity.x <=0){
      //  velocity.x = 0;
      //  velocity.y = 0;
      //  velocity.z= 0;
      //}
    }
    void accelerate(){
      if(velocity.x>=0){
        velocity.x += acceleration.x;}
     if(velocity.y>=0){
        velocity.y += acceleration.y;}
         if(velocity.z>=0){
        velocity.z += acceleration.z;}
      if(velocity.x<=0){
        velocity.x -= acceleration.x;}
     if(velocity.y<=0){
        velocity.y -= acceleration.y;}
         if(velocity.z<=0){
        velocity.z -= acceleration.z;}

      if(velocity.x<=-10){
        velocity.x =-10;}
     if(velocity.y<=-10){
      velocity.y =-10;}
     if(velocity.z<=-10){
      velocity.z =-10;}
      if(velocity.x>=10){
        velocity.x =10;}
     if(velocity.y>=10){
      velocity.y =10;}
     if(velocity.z>=10){
      velocity.z =10;}
    }
    void draw(){
      t+=0.01;
      perlinAcceleration();
      println(acceleration.x);
      pushMatrix(); 
      accelerate();
      //limit();
      location.add(velocity);
        //All the numbers are references to the size of the cube and the translation
   //eg 110 is the width of the cube Not very proactical should have some global variables
     if(location.x >= (width/2)+110-10 || location.x <= (width/2)-110+10){
        velocity.x = -velocity.x;
        ripple(location.x, location.y, location.z);

      }
      if(location.z >=(0) || location.z <= (-110)){
        velocity.z = -velocity.z;
          
      }
            if(location.y >= (height/2)+110 || location.y <=  (height/2)-110){
        velocity.y = -velocity.y;
      }
      translate(location.x,location.y,location.z);
      
      rotateY(PI/8);
      fill(200);
      stroke(0,0,200);
      sphere(size);
      popMatrix();
  }
}

class PVector{
  float x;
  float y;
  float z;
  PVector(float x_, float y_, float z_){
    x = x_;
    y = y_;
    z = z_;
  }
  void add(PVector v){
    x += v.x;
    y += v.y;
    z += v.z;
  }
    void sub(PVector v){
    x -= v.x;
    y -= v.y;
    z -= v.z;
  }
   void mult(PVector v){
    x *= v.x;
    y *= v.y;
    z *= v.z;
  }
  void perlinValue(float t){
    float noiseValue = map(noise(t), 0,1,0, 0.1)-0.05;

    x = noiseValue;
    y = noiseValue;
    z = noiseValue;
  }
}
