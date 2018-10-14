ArrayList<PVector> vectors = new ArrayList<PVector>();
float a = -2.1;
float b =1.4;
float c = 1.1;
float d= 1.1;
float e = 1.2;
float f = 0.9;
float p=1;
float p1= 1;
float q = 0.4; 
float r = 1.1;
float s = 1;
float t = 1.1;
float u = 1;
float v= 0.7;
float time=0;
int counter = 0;
float xpos = 0;
float ypos=0;
void setup(){
  size(600,600);
  frameRate(0);
  
  background(255);
  
  strokeWeight(0.001);
  vectors.add(new PVector(1,1));
  for (float i=0; i<18000;i+=0.1){
    float xposclone = xpos;
    //xpos = sinIt(q*(pow(sin(a*ypos),p)))-(r*(pow(cos(b*xpos),p1)))+(s*(pow(sin(c*time),p)));
    //ypos = (t*(pow(sin(d*xposclone),q)))-(u*(pow(cos(e*ypos),p)))+(v*(pow(cos(f*time),q)));
    xpos = sinIt(q,a,p,ypos)-cosIt(r,b,p1,xpos)+sinIt(s,c,p,time);
    ypos = cosIt(t,d,q,xposclone)-sinIt(u,e,p,ypos)+cosIt(v,f,q,time);
    time+=0.15;
    
    //println(xpos);
    point(map(xpos,-3.2,2.5,100,600),map(ypos,-3.2,3,100,600));
  }
  String saveNum = String.valueOf(floor(random(0,200)));
  saveFrame("photoshopone".concat("screen.png"));
}
float sinIt(float a, float f,float p,  float pos){
  //A is the outer multplier 
  //{p} is the power
  //{f} is the constant multiplier inside the cos/sin function
  float result;
  result = sin(f*pos);
  //Have to do this weird thing because when I sqaure a negative number with a float I get Nan
  if(result<0){
    result= -a*pow(-result,p);
    //println(result);
  }
  else{
    result = a*pow(result,p);
    //println(result);
  }
  return result;
}

float cosIt(float a, float f,float p,  float pos){
  //A is the outer multplier 
  //{p} is the power
  //{f} is the constant multiplier inside the cos/sin function
  float result;
  result = cos(f*pos);
  //Have to do this weird thing because when I sqaure a negative number with a float I get Nan
  if(result<0){
    result= -a*pow(-result,p);
  }
  else{
    result = a*pow(result,p);
  }
    
  return result;
}
