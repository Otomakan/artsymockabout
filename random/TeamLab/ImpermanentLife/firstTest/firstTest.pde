int numHearts=100;
Heart[] myHearts;
PImage img;

void setup(){
  size(600,600);
  frameRate(5);
  img = loadImage("../imparmanentlife.jpg");
  background(255);
  myHearts = new Heart[numHearts];
  for(int i=0; i<numHearts;i++){
    float x = random(100,width-100);
    float y = random(100,height-100);
      myHearts[i] = new Heart(x,y,random(-0.7,0.7),random(-0.7,0.7),100);
     }

}

void draw(){
  
  //image(img,0,0);
  background(255);
  for(int i=0; i<numHearts;i++){
    myHearts[i].display();
    myHearts[i].move();
  }
  //myHeart.move();
}

class Heart{
  color c;
  float xpos;
  float ypos;
  float xspeed;
  float yspeed;
  float xspeedoff;
  float yspeedoff;
  float size;
  float rotation;
  Heart(float x, float y, float xsp, float ysp,float s){
    xpos = x;
    ypos = y;
    xspeed = xsp;
    yspeed=ysp;
    size = s;
    rotation = 0.1;
  }
  void move(){
    xpos += noise(yspeedoff)*xspeed;
    ypos +=noise(xspeedoff)*yspeed;
    xspeedoff+=0.01;
    yspeedoff+=0.01;
  }
  void display(){
  stroke(239, 219, 103,50);
  fill(250,20,40,30);
  
  pushMatrix();
  
  translate(xpos, ypos);
  
    //rotateY(rotation);
  beginShape();
  for(float i=0;i<PI*2;i+=0.05){
    float xverpos = (size/2)*cos(i);
    float yverpos = (size/2)*sin(i);
  //  if(i>=(centerPoint-1.15)&&i<=(centerPoint+1.15)){
  //    if(i<centerPoint){
  //    heartOffset+=1.5;
  //    }
  //    else{
  //    heartOffset-=1.5;
  //    }
  //  }
  //  else if(i>=centerPoint-PI-0.4 && i<=centerPoint-PI+0.4){
  //    heartOffset += -0.2;
  //  }
  //  else {
  //  heartOffset = 0;
  //}
  //xverpos = ((size/2)-heartOffset)*cos(i);
  //yverpos = ((size/2)-heartOffset)*sin(i);
  xverpos = 16*pow(sin(i),3);
  yverpos = 13*cos(i)-5*cos(2*i)-2*cos(3*i)-cos(4*i);
  vertex(xverpos,yverpos);
  }
  endShape();
  popMatrix();
  }
}
