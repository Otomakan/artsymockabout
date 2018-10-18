int rectWidth = 30;
float rectHeight = 1;
float offset=0;
color[] colors;
void setup(){
  size(800,800);
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
  
  
    pushMatrix();
    noFill();
    //fill(244, 66, 104,40);
    stroke(244, 66, 104);
    //Turn to points and decrease i+= ad ii+= to get a star shape
      beginShape();
    strokeWeight(1);
    for(float i=0; i<2*PI;i+=0.75){
  
 
      for(float ii=0;ii<PI;ii+=0.75){
      float x = -(sin(offset*(i*0.1)))*(1/(pow(cos(cos(offset*(ii*0.02))),2)));
      x = map(x, -2,2,250,450);
      
      float y = (sin(offset*(ii*0.1)))*(1/(pow(cos(cos(offset*(i*0.02))),2)));
       y = map(y, -2, 2,250,450);

      curveVertex(x,y);
    }
    }
    endShape();
    popMatrix();
  offset+=0.06;
  
}
