  //Think about putting a cellular automoata to represent the oil spills.
  int rectWidth =37  ;
    float offset=0;
    float colorCounter =0;
    float colorCounter2 = -50;
    int img_counter = 0;
    int numOfCounters = 10;
    Wave[] wave  = new Wave[30];
    Tuple[] colorPalette = new Tuple[6];
    
void setup(){
  size(600,600,P3D);
  println(width/rectWidth);
  colorPalette[0]= new Tuple(50,70,100);
  colorPalette[1]= new Tuple(356,65,100);
  colorPalette[2]= new Tuple(206,79,100);
  colorPalette[3]= new Tuple(126,56,96);
  //frameRate(30);
  for(int i =0; i<wave.length; i++){
//Green Spill
      //colors[i] = new Tuple(floor(random(0,255)), (244-(i*5)), 137);
 //Oil Spill
      //int rgb = floor(random(50,255));
      //colors[i] = new Tuple(rgb, rgb,rgb);
      //Pompom
      wave[i]= new Wave (ceil(random(-15,0)), random(0,255));
  }
}

void draw(){
  
  colorMode(RGB, 255, 255, 255);
  background(255);
  //rotateX(-PI/8);
  //rotateY(PI/3);
//(-PI/2)*(width/2), -mouseY, 300.0f
  ortho(-width/1.25, width/1.25, -height/1.25, height/1.25, 0, 6000);
   camera(map(mouseX, 0,600,-600, 600), map(mouseY, 0,600, -600,1200),  533, // eyeX, eyeY, eyeZ
         width/2, 150 , -width/4, // centerX, centerY, centerZ
         0.0, 1.0, 0.0); // upX, upY, upZ
         //colorMode(HSB);
         
//Initial Design
         directionalLight(51, 91, 155, 1,0,0);//darkblue
          directionalLight(51, 91, 155, -1,0,0);//darkblue
         directionalLight(247, 244, 207, 0,0,-1);//beige
         directionalLight(141, 175, 196, 0,1,0);//lightblue
         directionalLight(141, 175, 196, 0,-1,0);//lightblue
         
         //Pompom
         //directionalLight(230, 230, 230, 1,0,0);
         // directionalLight(230, 230, 230, -1,0,0);
         //directionalLight(250,250,250, 0,0,-1);
         //directionalLight(240, 240,240, 0,1,0);
         //directionalLight(240, 240,240, 0,-1,0);
         
         //MMP
         //directionalLight(175, 190, 210, 1,0,0);
         // directionalLight(175, 190, 210, -1,0,0);
         //directionalLight(181,229,234, 0,0,-1);
         //directionalLight(219, 238,240, 0,1,0);
         //directionalLight(219, 238,240, 0,-1,0);
         
         //Redish
         //directionalLight(252, 102, 65, 1,0,0);//darkblue
         // directionalLight(252, 102, 65, -1,0,0);//darkblue
         //directionalLight(255, 168, 142, 0,0,-1);//beige
         //directionalLight(255, 123, 94, 0,1,0);//lightblue
         //directionalLight(255, 123, 94, 0,-1,0);//lightblue
         //Testouille/
         //directionalLight(colorPalette[0].r, colorPalette[0].g, colorPalette[0].b, 1,0,0);//darkblue
         // directionalLight(colorPalette[0].r, colorPalette[0].g, colorPalette[0].b, -1,0,0);//darkblue
         //directionalLight(colorPalette[1].r, colorPalette[1].g, colorPalette[1].b, 0,0,-1);//beige
         //directionalLight(colorPalette[2].r, colorPalette[2].g, colorPalette[2].b, 0,1,0);//lightblue
         //directionalLight(colorPalette[2].r, colorPalette[2].g, colorPalette[2].b, 0,1,0);//lightblue
         
  //pushMatrix();
  //popMatrix();
  for(float z=0; z<=width;z+=rectWidth){ 
    for(float x = 0 ; x <= width; x+= rectWidth){
      pushMatrix();

      colorMode(HSB, 360,100,100);
      //First we calculate the distance between each point and the center
      float realDistance = dist(x, z,  width/2, width/2);
      // Then we remap the distance so that it is falls evenly under and over 0 the smaller the remaping the more subtle the size differences;
      float adjustedDistance = map(realDistance, 0,width/2,-2.2,2.2);
      float y = map(cos(-adjustedDistance+offset), -1,1, 100,450) ;
      if(realDistance ==0 ){
        background(0);
      }
      noStroke();
      translate(x+width/4, height/2, -z);
//Spill Mode
      //for(int i =0; i<colors.length; i++){
       //if(realDistance < rectWidth*(floor(colorCounter)+i+1) && realDistance >= rectWidth*(floor(colorCounter)+i-1) ){
          //fill(colors[i].r, colors[i].g, colors[i].b);
        //}
      //}
      //fill(255,0,100);
      //if(z==4*rectWidth && x>4&& x<width-(rectWidth*4)){
      //  fill(255,100,0);
      //}
      //if(z==5*rectWidth && x>4&& x<width-(rectWidth*12)){
      //  fill(255,100,0);
      //}
      // if(z==12*rectWidth && x>4&& x<width-(rectWidth*4)){
      //  fill(255,100,0);
      //}
      
      //for (int i =0; i<wave.length;i++){
      // if(realDistance < rectWidth*(floor(wave[i].counter)) && realDistance >= rectWidth*(floor(wave[i].counter)-1) ){
      //   fill(wave[i].hue, 60,100);
      //  }
      //}
     

  
      box(rectWidth, y, rectWidth);
      popMatrix();
    }
    
    
    }
    
    offset+=0.1;
    //colorCounter+=0.03;
    //colorCounter2 += 0.1;
    //for(int i=0; i<wave.length;i++){
    //  wave[i].counter+=0.14;
    //  if((wave[i].counter*rectWidth)>=width-(rectWidth*10)){
    //    wave[i].counter=ceil(random(-20,0));
    //    wave[i].hue = ceil(random(0,360));
    //  }
   
    //}
    saveFrame();
    img_counter+=1;
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
class Wave{
  float counter;
  float hue;
  Wave(float _counter, float _hue){
    counter = _counter;
    hue = _hue;
  }
}
