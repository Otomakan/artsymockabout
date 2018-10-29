int rectWidth = 30;
float rectHeight = 1;
float offset=0;
color[] colors;
void setup(){
  size(600,600,P3D);
  colors = new color[width/rectWidth];
  for (int i=0; i<colors.length;i++){
    colors[i]= color(random(0,255),random(0,255),random(0,255),50);
  }
   
       
}

void draw(){
  background(230);
  fill(255);
  camera(width/2.0, height/2, 1000 / tan(PI*30.0 / 180.0),
        width/2.0, height/2.0,
        0, 0, 1, 0);
  
    pushMatrix();
    stroke(244, 66, 104);
    
      beginShape(POINTS);
      
    translate(height/2, width/2, 0);
    strokeWeight(1);
    for(float i=0; i<2*PI;i+=0.01){
     float radius = -(sin(offset))*(1/(pow(cos(cos(offset)),2)));
    float remappedRadius = map(radius, -1.240, 1.240,600,800);
 
      for(float ii=0;ii<PI;ii+=0.1){
      float x = remappedRadius*cos(i)*sin(ii);
      float y = remappedRadius*sin(i)*cos(ii);
      float z = remappedRadius*cos(ii);
      vertex(x,y,z);
    }
    }
    endShape();
    popMatrix();
  //}
  offset+=0.04;
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