ArrayList<PVector> vectors = new ArrayList<PVector>();
float a = -1.4;
float b =1.6;
float c = 1;
float d= 0.7;
int counter = 0;
float xpos = 1.1;
float ypos=1;
void setup(){
  size(1000,1000);
  frameRate(0);
  
  background(255);
  
  strokeWeight(0.1);
  stroke(0);
  vectors.add(new PVector(1,1));
  for (int i=0; i<250000;i++){
  float xposclone = xpos;
  xpos = sin(a*ypos)-c*(cos(a*xpos));
  ypos = sin(b*xposclone)-d*(cos(b*ypos));
  //println(xpos);
  //noFill();
  point(map(xpos,-2,2,0,1000),map(ypos,-2,2,0,1000));
  }
  //strokeWeight(20);
  //stroke(230,0,0);
  //point(300,300);
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
