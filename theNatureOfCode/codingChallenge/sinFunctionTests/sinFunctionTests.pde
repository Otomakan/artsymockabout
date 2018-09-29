int rectWidth =35;

    float offset=0;
    float colorCounter =0;
    float colorCounter2 = -50;
    
    Tuple[] colors = new Tuple[25];
    
void setup(){
  size(600,600,P3D);
  println(width/rectWidth);
  for(int i =0; i<colors.length; i++){
//Green Spill
      //colors[i] = new Tuple(floor(random(0,255)), (244-(i*5)), 137);
      int rgb = floor(random(50,255));
      colors[i] = new Tuple(rgb, rgb,rgb);
  }
}

void draw(){
  background(255);
  //rotateX(-PI/8);
  //rotateY(PI/3);
//(-PI/2)*(width/2), -mouseY, 300.0
  ortho(-width/2, width/2, -height/2, height/2, 0, 10000);
   camera(map(mouseX, 0,600,-600, 600), map(mouseY, 0,600, -600,1200),  533, // eyeX, eyeY, eyeZ
         width/2, 150 , -width/4, // centerX, centerY, centerZ
         0.0, 1.0, 0.0); // upX, upY, upZ
         directionalLight(51, 91, 155, 1,0,0);//darkblue
         directionalLight(247, 244, 207, 0,0,-1);//beige
         directionalLight(141, 175, 196, 0,1,0);//lightblue
         directionalLight(141, 175, 196, 0,-1,0);//lightblue
  pushMatrix();
  popMatrix();
  for(float z=0; z<=width;z+=rectWidth){ 
    for(float x = 0 ; x <= width; x+= rectWidth){
      pushMatrix();


      //First we calculate the distance between each point and the center
      float realDistance = dist(x, z,  width/2, width/2);
      // Then we remap the distance so that it is falls evenly under and over 0 the smaller the remaping the more subtle the size differences;
      float adjustedDistance = map(realDistance, 0,width/2,-2.2,2.2);
      float h = map(cos(-adjustedDistance+offset), -1,1, 100,450) ;
      noStroke();
      translate(x+width/4, height/2, -z);
      fill(255);
      //for(int i =0; i<colors.length; i++){
      // if(realDistance < rectWidth*(floor(colorCounter)+i) && realDistance >= rectWidth*(floor(colorCounter)+i-1) ){
      //    fill(colors[i].r, colors[i].g, colors[i].b);
      //  }
      //  //if(realDistance < rectWidth*(floor(colorCounter2)+i) && realDistance >= rectWidth*(floor(colorCounter2)+i-1) ){
      //  //  fill(colors[i].r, colors[i].g, colors[i].b);
      //  //}
      //}

  
      box(rectWidth, h, rectWidth);
      popMatrix();
    }
    
    }
    
    offset+=0.06;
    //colorCounter+=0.03;
    //colorCounter2 += 0.1;
    if((colorCounter*rectWidth)>=width-rectWidth){
      colorCounter=0;
    }
     if((colorCounter2*rectWidth)>=width-rectWidth){
      colorCounter2=-10;
    }

}

class Tuple{
  int r;
  int g;
  int b;
  Tuple(int _r, int _g, int _b){
    r= _r;
    g= _g;
    b= _b;
  }
}
