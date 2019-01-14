PImage img;
int goff = 0;
float increment = 0.02;
Particle[][] particles = new Particle[2000][2000];
int startSizeX = 480;
int startSizeY = 480;
int incrementer = 10;
int[] bitMap = new int[2000000];

void setup(){
   size(960,960);
   //img = loadImage("rorschach_colored.jpeg"); 
   //img = loadImage("vitrail.jpg");
   //img = loadImage("mosque_pattern_iran1.jpg");
   //img = loadImage("hazrate-masomeh.jpg");
   img = loadImage("christine.jpg");
   print(img.width);
   print(img.height);
   
   makeNoisyBitMap();
    img.loadPixels(); 
    for (int x = (img.width/2)-startSizeX; x < (img.width/2)+startSizeX; x+=incrementer) {
      for (int y = (img.height/2)-startSizeY; y < (img.height/2)+startSizeY; y+=incrementer ) {
           particles[x][y] = new Particle(x,y, new PVector(0,0), img.pixels[x+y*img.width]);   
    }
  }
}

void draw(){
  //background(254);
  for (int x = (img.width/2)-startSizeX; x < (img.width/2)+startSizeX; x+=incrementer) {
      for (int y = (img.height/2)-startSizeY; y < (img.height/2)+startSizeY; y+=incrementer ) {
           Particle p = particles[x][y];
           p.update();  
           p.display();       
    }
  }
    
}


class Particle{
  int xpos;
  int ypos;
  PVector velocity;
  color particleColor;
  int speed_lim;
  
  Particle(int _xpos,int _ypos,PVector _velocity,color _pColor){
    xpos = _xpos;
    ypos = _ypos;
    velocity = _velocity;
    particleColor = _pColor;
    speed_lim =6;
  }
  
  //void update(int imagePos, int canvasPos) {
    void update(){
     int imagePos = xpos+ypos*floor(img.width);
      int canvasPos = xpos+ypos*floor(width);
     if(xpos>width || ypos>height ||xpos<0 || ypos<0){
        return; 
     }
      //float red = red(img.pixels[imagePos]);
      //float green = green(img.pixels[imagePos]);
      float noise = map(bitMap[canvasPos],0,255,-1,1);
      float angle = noise * TWO_PI;
      //println(sin(angle));
      //println(cos(angle));
     velocity.add(sin(angle),cos(angle));
     //velocity.normalize();
    //if(sin(angle)>0){
    //    velocity.x += 1;
    // }else if(sin(angle)<0){
    //   velocity.x -=1;
    // }
    // if(cos(angle)>0){
    //   velocity.y+=1;
    // } else if(cos(angle)<0){
    //   velocity.y -=1;
    // }
     //xpos += velocity.x;
     //ypos += velocity.y;
     // if(velocity.x>speed_lim){
     //   velocity.x-=1;
     //}if(velocity.x<-speed_lim){
     //   velocity.x+=1;
     //}
     //if(velocity.y>speed_lim){
     //   velocity.y-=1;
     //}if(velocity.y<-speed_lim){
     //   velocity.y+=1;
     //}
     ////velocity.normalize();
     //velocity.x = round(velocity.x);
     //velocity.y = round(velocity.y);
    
     if(velocity.x>0){
        xpos += 1;
     }else if(velocity.x<0){
       xpos -=1;
     }
     if(velocity.y>0){
       ypos+=1;
     } else if(velocity.y<0){
       ypos -=1;
     }
  }
  void display(){
    noStroke();
    fill(particleColor);
    ellipse(xpos*2,ypos*2,10,10);
  }
}


void makeNoisyBitMap(){
  loadPixels();

  float detail = map(mouseX, 0, width, 0.1, 0.6);
  noiseDetail(8, detail);
  float xoff = 0.0;
  // For every x,y coordinate in a 2D space, calculate a noise value and produce a brightness value
  for (int x = 0; x < img.width; x++) {
    //xoff +=increment;
    float yoff = 0.0;   // For every xoff, start yoff at 0
    for (int y = 0; y < img.height; y++) {
      //yoff+=increment;
      int imageLoc = x + y*img.width;
      
        float r = red(img.pixels[imageLoc]);
        float g = green(img.pixels[imageLoc]);
      // Calculate noise and scale by 255
      //float bright = brightness(img.pixels[imageLoc]);
      float bright = noise(r+xoff, g+yoff) * 255;

      // Try using this line instead
      //float bright = random(0,255);
      
      // Set each pixel onscreen to a grayscale value
      pixels[x+y*width] = color(bright);
       bitMap[x+y*width] = color(bright);
    }
  }
  
  updatePixels();
}
