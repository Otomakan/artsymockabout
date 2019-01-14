PImage img;
int goff = 0;
float increment = 0.02;
Particle[][] particles = new Particle[2000][2000];

void setup(){
   size(881,618);
   //img = loadImage("hazrate-masomeh.jpg"); 
   //img = loadImage("christine.jpg");
   makeBitMap();
  img.loadPixels(); 
    for (int x = 0; x < img.width; x++) {
      for (int y = 0; y < img.height; y++ ) {
           particles[x][y] = new Particle(x,y, new PVector(0,0), img.pixels[x+y*img.width]);   
    }
  }
}

void draw(){
   for (int x = 0; x < img.width; x+=20) {
      for (int y = 0; y < img.height; y+=20 ) {  particles[x][y].update(x+y*width);
           particles[x][y].display();       
    }
  }
}


class Particle{
  PVector location;
  PVector velocity;
  color particleColor;
  Particle(float _xpos,float _ypos,PVector _velocity,color _pColor){
    location = new PVector(_xpos,_ypos);
    velocity = _velocity;
    particleColor = _pColor;
  }
  
  void update(int pos) {
      float red = red(img.pixels[pos]);
      float green = green(img.pixels[pos]);
      float noise = pixels[pos];
      float angle = noise * PI * 2;
     velocity.add(cos(angle),cos(angle));
     velocity.normalize();
     location.add(velocity);
  }
  void display(){
    noStroke();
    strokeWeight(0);
    fill(particleColor);
    ellipse(location.x,location.y,10,10);
  }
}


void makeBitMap(){
  loadPixels();

  float detail = map(mouseX, 0, width, 0.1, 0.6);
  noiseDetail(8, detail);
  float xoff = 0.0;
  // For every x,y coordinate in a 2D space, calculate a noise value and produce a brightness value
  for (int x = 0; x < width; x++) {
    xoff +=increment;
    float yoff = 0.0;   // For every xoff, start yoff at 0
    for (int y = 0; y < height; y++) {
      yoff+=increment;
      
      // Calculate noise and scale by 255
      float bright = noise(xoff, yoff) * 255;

      // Try using this line instead
      //float bright = random(0,255);
      
      // Set each pixel onscreen to a grayscale value
      pixels[x+y*width] = color(bright);
    }
  }
  
  updatePixels();
}
void makeImage(){
  loadPixels();
   img.loadPixels(); 
    for (int x = 0; x < img.width; x++) {
      for (int y = 0; y < img.height; y++ ) {
        // Calculate the 1D pixel location
        int imageLoc = x + y*img.width;
        int displayLoc = x + y*width;
          
        // The functions red(), green(), and blue() pull out the 3 color components from a pixel.
        float r = red(img.pixels[imageLoc]);
        float g = green(img.pixels[imageLoc]);
        float b = blue(img.pixels[imageLoc]);
        
        
        //println(g);
        //noise(
        
        // Image Processing would go here
        // If we were to change the RGB values, we would do it here, 
        // before setting the pixel in the display window.
        
        // Set the display pixel to the image pixel
        pixels[displayLoc] =  color(r,g,b);          
    }
  }
  updatePixels();

}
