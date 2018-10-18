
float offset=0;
void setup(){
  size(700,700);

}

void draw(){
  background(253, 255, 224);
  //background(123, 141, 181);
  
  //background(0);
  //fill(255);
  
  
    pushMatrix();
    noFill();
    beginShape(POINTS);
      
    strokeWeight(1);
    //translate(height/2, width/2, 0);
    for(float i=0; i<2*PI;i+=0.05){
      for(float ii=0;ii<2*PI;ii+=0.05){
      float x = -(sin(offset*(i*0.1)))*(1/(pow(cos(cos(offset*(ii*0.02))),2)));
      x = map(x, -2,2,220,480);
      
      float y = (pow(sin(offset*(i*0.1)),2)*2)/(pow(cos(cos(offset*(ii*0.1))),3))*(sin(cos(offset*(i*0.1))))-cos(offset*(ii*0.1))/pow(cos(cos(offset*(i*0.1))),2);

       y = map(y, -2, 2,250,450);
       float dt = dist(350,350,x,y);
       float col = map(dt, 0,300,0,255);
      pushMatrix();
      
      stroke(244, col, 230,200);
      vertex(x,y);
      popMatrix();
    //}
    }
    }
    endShape();
    //box(rectWidth*i, remappedHeight, rectWidth*i);

    //sphere(remappedRadius);
    popMatrix();
    saveFrame();
  //}
//Optimal in my humble opinion
  //offset+=0.04;
  offset+=0.06;
  saveFrame();
  
}

class Tuple{
  float r;
  float g;
  float b;
  Tuple(float _r, float _g, float _b){
    r= _r;
    g= _g;
    b= _b;
  }
}
