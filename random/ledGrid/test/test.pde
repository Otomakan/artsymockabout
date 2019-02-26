int xnum = 40;
int ynum = 40;
Dot[][] grid = new Dot[xnum][ynum];
float time = 0;
float timeMod = 50;
float timespeed = 0.1;
float frameCounter = 0;
Column[] fall = new Column[xnum];

void setup(){
  size(800,800);
  frameRate(30);
  //for(int i = 0; i <xnum; i++){
  //  for(int ii = 0; ii <ynum ; ii++){
  //  grid[i][ii] =  new Dot(i*10, ii*10, false);
  //  }
  //}
  for(int i = 0; i <xnum; i++){
    fall[i] =new Column(i*10.0);
  }
}



void draw(){
   background(204); 
    for(int i = 0; i <xnum; i++){
    fall[i].lum = map(noise(sin(0.1*(i+time))),0.4,0.62,0,1);
    //println(noise(sin(0.1*(i+time))));
    fall[i].draw();
  }
  // for(int i = 0; i < xnum; i++){
  //  for(int ii = 0; ii < ynum ; ii++){
  //    if(cos(noise(i*time))>map(i,0,ynum-1,0,1) &&(noise(i*time))>map(ii,0,ynum-1,0,1)){
  //       grid[i][ii].on = true;
  //    }
  //    else{
  //       grid[i][ii].on = false;
  //    }
  //    grid[i][ii].draw();
  //  }
  // }
  float acceleration;
  float desceleration;
  if(frameCounter>timeMod){
    
    if(timespeed<1){
       
     }
    timespeed+=random(desceleration,acceleration);
  }
  frameCounter+=1;
  time+=timespeed;
}


class Column {
   float xpos;
   float lum;
   Column(float _xpos){
     xpos = _xpos;
     lum = 1.0;
   }
   void draw(){
     noStroke();
     fill(map(lum,0,1,0,255));
     for(int ypos=0;ypos<height/2;ypos+=10){
       ellipse(xpos,ypos , 10,10);
     }
   }
}
class Dot {
  float xpos, ypos;
  boolean on;
   Dot (float x,float y, boolean _on){
     xpos = x;
     ypos = y;
     on = _on;
   }
   void draw(){
     if(on){
       fill(255);
     }
     else{
       fill(0);
     }
      ellipse(xpos+10 ,ypos+10, 10,10);
     
   }
   
}
