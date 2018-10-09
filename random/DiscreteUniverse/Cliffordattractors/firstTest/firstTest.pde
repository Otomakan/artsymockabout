float xpos=300;
float ypos=300;
float a = 1.641;
float b = 1.902;
float c = 0.316;
float d= 1.525;
void setup(){
  size(600,600);
  background(180);
  //frameRate(0.01);
}

void draw(){
  xpos = sin(a*ypos)-cos(b*xpos);
  println(xpos);
  ypos = sin(a*ypos)-cos(b*xpos);
  
  strokeWeight(10);
  point(map(xpos,-2,2,0,600),map(ypos,-2,2,0,600));
}
