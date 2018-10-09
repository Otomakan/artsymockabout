ArrayList<PVector> vectors = new ArrayList<PVector>();
float a = -1.24458;
float b =-1.25191;
float c = -1.815908;
float d= -1.90866;
int counter = 0;
float xpos = 1.1;
float ypos=1;
void setup(){
  size(600,600);
  frameRate(0);
  
  background(180);
  
  strokeWeight(0.5);
  vectors.add(new PVector(1,1));
  for (int i=0; i<1000000;i++){
  float xposclone = xpos;
  xpos = sin(a*ypos)-(cos(b*xpos))+sin(i);
  ypos = sin(c*xposclone)-(cos(d*ypos))+cos(i);
  //println(xpos);
  //noFill();
  point(map(xpos,-2,2,0,600),map(ypos,-2,2,0,600));
  }
}

void draw(){
  //if(counter>=1){
  //  xpos+=random(100,300);
  //  ypos += random(100,300);
  //  //println(10);
  //  counter=0;
  //}
  
  //counter+=1;
  //vectors.add(new PVector(map(xpos,-2,2,0,600),map(ypos,-2,2,0,600)));
  //beginShape();
  //for(PVector v: vectors){
  //  curveVertex(v.x,v.y);
  //}
  //endShape();
}
