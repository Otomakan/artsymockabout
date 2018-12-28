ArrayList<PVector> vectors = new ArrayList<PVector>();
float a = 1.1;
float b =1.4;
float c = 1.1;
float d= 2;
float e = 1.2;
float f = 1.9;
float p=1.2;
float p1= 1.8;
float q = 0.4; 
float r = 1.8;
float s = 2;
float t = 0.6;
float u = 1;
float v= 1.7;
float time=0;
int counter = 0;
float xpos = 1.1;
float ypos=1;
void setup(){
  size(600,600);
  frameRate(0);
  
  background(253, 255, 224);
  
  strokeWeight(0.001);
  vectors.add(new PVector(1,1));
  for (float i=0; i<1500;i+=0.005){
    float xposclone = xpos;
    //println(pow(-10.223,2));
    xpos = pow((q*abs(sin(a*ypos))),p)-pow(r*abs(cos(b*xpos)),p1)+pow(s*abs(sin(c*time)),p);
    ypos = pow((t*abs(sin(d*xposclone))),p1)-pow(u*abs(cos(e*ypos)),p)+pow(v*abs(cos(f*time)),p1);
    time+=0.15;
    //println(xpos);
    point(map(xpos,-2.5,2.5,0,600),map(ypos,-2.5,2.5,0,600));
  }
  String saveNum = String.valueOf(floor(random(0,200)));
  saveFrame(saveNum.concat("screen.png"));
}
