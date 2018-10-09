ArrayList<PVector> vectors = new ArrayList<PVector>();
float a = -2.1;
float b =1.4;
float c = 1.1;
float d= 1.1;
float e = 1.2;
float f = 0.9;
float p=1.1;
float p1= 1.4;
float q = 0.4; 
float r = 1.1;
float s = 1;
float t = 1.1;
float u = 1;
float v= 0.7;
float time=0;
int counter = 0;
float xpos = 1.1;
float ypos=1;
void setup(){
  size(600,600);
  frameRate(0);
  
  background(180);
  
  strokeWeight(0.001);
  vectors.add(new PVector(1,1));
  for (float i=0; i<1500;i+=0.01){
    float xposclone = xpos;
    xpos = (q*sin(a*ypos))-(r*cos(b*xpos))+(s*sin(c*time));
    ypos = (t*sin(d*xposclone))-(u*cos(e*ypos))+(v*cos(f*time));
    time+=0.15;
    //println(xpos);
    point(map(xpos,-2.5,2.5,0,400),map(ypos,-2.5,2.5,0,400));
  }
  String saveNum = String.valueOf(floor(random(0,200)));
  saveFrame(saveNum.concat("screen.png"));
}
