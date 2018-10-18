int rectWidth = 30;
float rectHeight = 1;
float offset=0;
float offsetNoise = 0;
void setup(){
  size(800,800);

   //camera(width/2.0, height/2, 1000 / tan(PI*30.0 / 180.0),
   //     width/2.0, height/2.0,
   //     0, 0, 1, 0);
       
}

void draw(){
  background(253, 255, 224);
  fill(255);
  
  
  //for(int i=0; i<width/rectWidth;i++){
    pushMatrix();
    //rectHeight = -(sin(offset+(i*0.04))*1/(pow(cos(cos(offset+(i*0.04))),2)));
     //float radius=10;
    //fill(colors[i]);
    //float remappedHeight = map(rectHeight, -1.240, 1.240,300,600);
    noFill();
    //fill(244, 66, 104,40);
    stroke(244, 66, 104,140);
      beginShape(POINTS);
      rotateY(map(mouseY,0,width, -1,PI*4));
      
    translate(height/2, width/4, 0);
    strokeWeight(3);
    float trig = offset;
    for(float i=0; i<PI;i+=0.1){
   
      for(float ii=0;ii<2*PI;ii+=0.1){
        
      float x = -(pow(sin(trig*(i*0.1)),2)*3)/(pow(cos(cos(trig*(ii*0.1))),2))*(sin(cos(trig*(i*0.1))))-cos(trig*(ii*0.1))/pow(cos(cos(trig*(i*0.1))),2);

      x = map(x, -2,2,200,400);
      
      float y = (pow(sin(trig*(i*0.1)),2)*3)/(pow(cos(cos(trig*(ii*0.1))),2))*(sin(cos(offset*(i*0.1))))-cos(trig*(ii*0.1))/pow(cos(cos(trig*(i*0.1))),2);
       y = map(y, -2, 2,200,400);
      //float z = 
      //z =  map(z, -2,2,0,200);
      vertex(x,y);
    //}
    }
    }
    endShape();
    //box(rectWidth*i, remappedHeight, rectWidth*i);

    //sphere(remappedRadius);
    popMatrix();
  //}
//Optimal in my humble opinion
  //offset+=0.04;
  if(offset<3){
    offset+=0.03;
  }
  offset+=noise(offsetNoise)*0.02;
  //saveFrame();
  
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
