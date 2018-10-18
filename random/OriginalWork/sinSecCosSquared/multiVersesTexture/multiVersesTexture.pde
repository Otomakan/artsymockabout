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
   camera(width/2.0, height/2, 1000 / tan(PI*30.0 / 180.0),
        width/2.0, height/2.0,
        0, 0, 1, 0);
       
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
    stroke(244, 66, 104,50);
      beginShape();
      rotateY(map(mouseY,0,width, -1,PI*4));
      
    strokeWeight(1);
    translate(height/2, width/2, 0);
    for(float i=0; i<2*PI;i+=0.02){
  
 
      for(float ii=0;ii<PI;ii+=0.5){
      float radius = -(sin(offset*(ii*0.1)))*(1/(pow(cos(cos(offset*(ii*0.1))),2)));
    float remappedRadius = map(radius, -1.240, 1.240,600,800);
      float x = remappedRadius*cos(i)*sin(ii);
      float y = remappedRadius*sin(i)*cos(ii);
      float z = remappedRadius*cos(ii);
        //if(x>-30&&x<30){ 
        //  pushMatrix();
        //  stroke(0);
        //  curveVertex(x,y,z);   
        //  popMatrix();
        //}
      //else{
        pushMatrix();
        float distance = dist(x,y,z,0,0,0);
        float colormap = map(distance, 0,1000,0,255);
      //stroke(244, colormap, 0);
      curveVertex(x,y,z);
      popMatrix();
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
  offset+=0.1;
  
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
