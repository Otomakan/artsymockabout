//What we are trying to do is have tto lines moving in seemingly random wave patterns fill the gap in between, and have some vertical lines as well, so a grid of odd shapes.
  float t = 0;
  LinePair test;
void setup(){
  size(600,600);
  test = new LinePair(0,300,0,0,0.01);
  
  frameRate(10);
}

void draw(){
  background(255);
  test.display();

}

class LinePair{
  float topx;
  float topy;
  float botx;
  float boty;
  float stopY;
  float amp;
  float _t;
  float sbotY;
  float size;
  LinePair(float _topx, float _topy, float _botx, float _boty, float _amp){
    topx = _topx;
    topy = _topy;
    botx = _botx;
    boty = _boty;
    stopY = _topy;
    sbotY = _boty;
    amp = _amp;
    _t =0;
    size=100;
  }
  
  void moveTopPoints(float i){
    topy = size*sin(amp/PI);
    topx += i;
  }
  //  void moveBottomPoints(float i){
  //  boty = sin(i*2);
  //  botx += 1;
  //}
  
  void display(){
    topx=0;
    pushMatrix();
    stroke(3);
    translate(0,300);
    beginShape();
    for(float i=0;i<width;i+=10){
      this.moveTopPoints(i);
      //this.moveBottomPoints(i);
      curveVertex(topx,topy);
      
      amp+=10;
    }
    //amp+=0.001;
    endShape();
    topy = stopY;
    //boty = sbotY;
    //point(botx,boty);
    popMatrix();
  }
}
