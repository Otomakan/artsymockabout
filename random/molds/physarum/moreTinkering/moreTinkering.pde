int imageWidth = 200;
int imageHeight = 200;
int[][]intensityMap = new int[imageWidth][imageHeight];
Particle[]particleMap = new Particle[imageWidth*imageHeight];
Particle HanSoloParticle = new Particle(100,100);
int deposit = 20;
int diffusion =10;
PImage img;

void setup() {
  size(200, 200);
  img = loadImage("christine.jpg");
  int xoff = 0;
  for(int y = 0; y < imageHeight; y+=1){
      for(int x = 0; x < imageHeight; x+=1){
        intensityMap[x][y] = Math.round(noise(xoff)*50.0);
        //intensityMap[x][y] = 250-int(random(80));
        xoff+=1;
      }
  }
  frameRate(120);
}

  

void draw(){
  background(255);
  int rectSize =  width/imageWidth;
  
  PVector currentParticleLocation = HanSoloParticle.loc;
  int currentParticleIntensity = intensityMap[Math.round(currentParticleLocation.x)][Math.round(currentParticleLocation.y)];
 
  if(currentParticleIntensity <255){
    intensityMap[Math.round(currentParticleLocation.x)][Math.round(currentParticleLocation.y)] += deposit;
    if(currentParticleIntensity>255){
      intensityMap[Math.round(currentParticleLocation.x)][Math.round(currentParticleLocation.y)] = 255;
    }
  }
  PVector[] neighbours = getNeighbours(currentParticleLocation);
  for (int i = 0 ; i < neighbours.length; i++){
    intensityMap[Math.round(neighbours[i].x)][Math.round(neighbours[i].y)] += diffusion;
  }
  
  
  
  
  
    for(int y = 0; y < imageHeight; y+=1){
      for(int x = 0; x < imageHeight; x+=1){
        noStroke();
        fill(intensityMap[x][y]);
        rect(x*rectSize,y*rectSize,rectSize,rectSize);
      }
  }
  
  HanSoloParticle.deploySensors();
  HanSoloParticle.move(intensityMap[Math.round(HanSoloParticle.frontRight.x)][Math.round(HanSoloParticle.frontRight.y)],
  intensityMap[Math.round(HanSoloParticle.frontLeft.x)][Math.round(HanSoloParticle.frontLeft.y)],
  intensityMap[Math.round(HanSoloParticle.front.x)][Math.round(HanSoloParticle.front.y)]);
  
  
  
}





class Particle{
 PVector loc;
//headingAngle is simply going to be a value between 0 and 8
 float headingAngle;
  PVector front;
   PVector frontRight;
   PVector frontLeft;
 Particle(int _x, int _y){
    loc = new PVector(_x, _y);
 }
 void deploySensors(){
  
     PVector[] neighbours = getNeighbours(this.loc);
 
     this.front = neighbours[Math.round(this.headingAngle)];
     this.frontRight = neighbours[Math.round((this.headingAngle+1)%8)];
     if(this.headingAngle>0){
        this.frontLeft = neighbours[Math.round(this.headingAngle-1)];
     }
      else{
        this.frontLeft = neighbours[7];
      }
   }
   void move(int rightIntensity, int leftIntensity, int frontIntensity){
       int nextX;
       int nextY;
       if(rightIntensity == leftIntensity && leftIntensity == frontIntensity){
         int coinFlip = int(random(0,3));
         switch(coinFlip){
            case 0: 
             this.loc = this.front;
            case 1:
               this.loc = this.frontRight;
               this.headingAngle += 1;
            case 2:
              this.loc = this.frontLeft;
              this.headingAngle -= 1;
         }
       }
       else if(rightIntensity < leftIntensity && rightIntensity < frontIntensity){

         this.loc = this.frontRight;
         this.headingAngle += 1;
       }
       else if(leftIntensity < rightIntensity && leftIntensity < frontIntensity){
         this.loc = this.frontLeft;
         this.headingAngle -= 1;
       }
       else if(frontIntensity < rightIntensity && frontIntensity < leftIntensity){
         this.loc = this.front;
       }
       else {
         
         this.loc = this.front;
       }
       if(this.headingAngle ==8){
         this.headingAngle = 0;
       }
       if(this.headingAngle == -1){
         this.headingAngle = 7;
       }
       
   }

}

PVector []  getNeighbours(PVector currentLocation){
     PVector [] neighbours = new PVector[8];
  
     neighbours[0]= new PVector(currentLocation.x-1, currentLocation.y);
     neighbours[1]= new PVector(currentLocation.x-1, currentLocation.y-1);
     neighbours[2] = new PVector(currentLocation.x, currentLocation.y-1);
     neighbours[3] =  new PVector(currentLocation.x+1, currentLocation.y-1);
     neighbours[4] = new PVector(currentLocation.x+1, currentLocation.y);
     neighbours[5] =  new PVector(currentLocation.x+1, currentLocation.y+1);
     neighbours[6] = new PVector(currentLocation.x, currentLocation.y+1);
     neighbours[7] = new PVector(currentLocation.x-1, currentLocation.y+1);
     return neighbours;
}
//Think about implemening https://stackoverflow.com/questions/652106/finding-neighbours-in-a-two-dimensional-array/652123

void makeNoisyBitMap(){
  
  loadPixels();
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
        float b = blue(img.pixels[imageLoc]);
      // Calculate noise and scale by 255
      //float bright = brightness(img.pixels[imageLoc]);
      float bright = noise(r+xoff, g+yoff) * 255;

     fdgufn 
    }
  }
  
  updatePixels();
}
