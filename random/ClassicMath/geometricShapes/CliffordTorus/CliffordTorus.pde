float xoff = 0;
float xoffinc = 0.005;

void setup(){
    size(500,500,P3D);
    background(0);
  translate(width/2, height/2, 0);
  stroke(255);
  //rotateX(PI/2);
  //rotateZ(-PI/6);
  noFill();

 
}

void draw(){
  background(255,238,173);
  translate(width/2, height/2, 0);
  rotateX(map(mouseX,0,width,-PI,PI));
  rotateZ(map(mouseY,0,height,-PI,PI));
  //rotateX(PI/2);
  //rotateZ(-PI/6);
   stroke(color(136,216,176),200);
   //fill(color(255,238,173),10);
  strokeWeight(2);
  for(float z=0;z<400;z+=15){
     beginShape();
    for(float x=0;x<=TWO_PI+1;x+=0.1){
      float xpos = map(cos(x+xoff*z/60),-1,1,-150,150);
      float ypos = map(sin(x),-1,1,-150,150);
      //float zpos = map(cos(mouseX),-
      vertex(xpos,ypos, z);
    }
    endShape();
  }
  xoff += xoffinc;
}
