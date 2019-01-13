int d = 8;
int n = 5;
float k = 2/7.0;
float t = 0;

void setup(){
  size(600,600);
  
  background(255);
  frameRate(120);
}

void draw(){
  strokeWeight(2);
  stroke(225, 86, 247);
  translate(width/2,height/2);
  float x = cos(k*t)*cos(t);
  float y = cos(k*t)*sin(t);
  x= map(x, -1,1,-200,200);
  y= map(y, -1,1,-200,200);
  point(x,y);
  t+=0.05;
  //if(t>2*PI){
  //  t=0;
  //}
}
