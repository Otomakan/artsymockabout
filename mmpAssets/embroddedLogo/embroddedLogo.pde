float centerX;
float centerY;
int numLines =10;

float theta = 0;
void setup(){
  size(440,440);
  centerX = width/2;
  centerY = height/2;
  
  background(0);
}
 
void draw(){
    stroke(250);
    strokeWeight(2);
  //translate(width/2,height/2);
    for(int i=0; i<numLines; i++){
      //float a = map(millis()%10000,0,10000,0,TWO_PI);
      int perimeter =  80+i*2;
      float gage = map(theta, 0, PI*2, 0,100);
      int toShow = 1;

        for(int ii=0; ii<16; ii++){
         if (gage>10){
        toShow = floor(random(0,2));
        }
        if(toShow==1){
          float x = centerX +perimeter*cos(theta+(ii*0.001));
          float y = centerY +perimeter*sin(theta+(ii*0.001));
          point(x,y);
          //point(x+0.002,y+0.002) ;
          //point(x+0.004,y+0.004) ;
          //point(x+0.008,y+0.008) ;
        }
      }
    }
      if(theta>2*PI){
    background(0);
    theta=0;
  }
  println(theta);
  theta+=0.032;

  //ellipse(0,0,190,190);
  //fill(255,255,0);
  //rotate(-a);
  //triangle(100,-10,110,10,90,10);
}
