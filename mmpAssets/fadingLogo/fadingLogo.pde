float centerX;
float centerY;
int numLines =10;
float Gaussian(float x, float mean, float variance) {
  return (1 / sqrt(TWO_PI * variance)) * exp(-sq(x - mean) / (2 * variance));
}

float theta = 0;
void setup(){
  size(440,440);
  centerX = width/2;
  centerY = height/2;
  
  background(0);
}
 
void draw(){
    strokeWeight(2);
  //translate(width/2,height/2);
    for(int i=0; i<numLines; i++){
      //float a = map(millis()%10000,0,10000,0,TWO_PI);
      int perimeter =  80+i;
      float gage = map(theta, 0, PI*2, 0,100);
      //println(gage);
      float alpha = 255;
       //if (gage>25){
         alpha= map(Gaussian(theta, PI, PI*2), 0.07256, 0.173,255,0);
        //}
        println(Gaussian(theta, PI, PI*2));
        for(int ii=0; ii<16; ii++){
          fill(0);
          beginShape();
          stroke(alpha);
          float x = centerX +perimeter*cos(theta+(ii*0.002));
          float y = centerY +perimeter*sin(theta+(ii*0.002));
          point(x,y);
          endShape();
          //point(x+0.002,y+0.002) ;
          //point(x+0.004,y+0.004) ;
          //point(x+0.008,y+0.008) ;
      }
    }
      if(theta>2*PI){
    background(0);
    theta=0;
  }
  theta+=0.032;

  //ellipse(0,0,190,190);
  //fill(255,255,0);
  //rotate(-a);
  //triangle(100,-10,110,10,90,10);
}
