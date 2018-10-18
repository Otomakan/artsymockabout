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
  background(130);
  fill(255);
  camera(width/2.0, mouseX, mouseY / tan(PI*30.0 / 180.0),
        width/2.0, height/2.0,
        0, 0, 1, 0);
  
  for(int i=0; i<width/rectWidth;i++){
    pushMatrix();
    translate(height/2, mouseY, -100);
    float rectHeight = -(sin(offset+(i*0.04))*1/(pow(cos(cos(offset+(i*0.04))),2)));
    //rectHeight =  -(sin(offset+())*1/(pow(cos(cos(offset+()),2)));
    fill(colors[i]);
    stroke(244, 66, 104);
    float remappedHeight = map(rectHeight, -1.240, 1.240,300,600);
    box(rectWidth*i, remappedHeight, rectWidth*i);
    //sphere(remappedHeight);
    popMatrix();
  }
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
