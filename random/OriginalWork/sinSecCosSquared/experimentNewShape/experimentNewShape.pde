int rectWidth = 30;
float rectHeight = 1;
float offset=-19;
color[] colors;
void setup(){
  size(800,800,P3D);
  colors = new color[width/rectWidth];
  for (int i=0; i<colors.length;i++){
    colors[i]= color(random(0,255),random(0,255),random(0,255),50);
  }
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
      
    strokeWeight(1);
    translate(height/2, width/4, 0);
    for(float i=0; i<2*PI;i+=0.05){
      for(float ii=0;ii<2*PI;ii+=0.05){
      float x = -(sin(offset*(i*0.1)))*(1/(pow(cos(cos(offset*(ii*0.02))),2)));
      x = map(x, -2,2,0,200);
      
      float y = pow(cos(i),1.3);
       y = map(y, -2, 2,0,200);
      float z = (pow(sin(offset*(i*0.1)),2)*2)/(pow(cos(cos(offset*(ii*0.1))),3))*(sin(cos(offset*(i*0.1))))-cos(offset*(ii*0.1))/pow(cos(cos(offset*(i*0.1))),2);

      z =  map(z, -2,2,0,200);
      vertex(x,y,z);
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
  offset+=0.08;
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
