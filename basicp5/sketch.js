var p1 = {x:0, y:50}
var p2 = {x:50, y:60}
var p3 = {x:85, y: 30}
var p4 = {x:170, y: 40}
var firstSlider, secondSlider, thirdSlider, luminositySlider,saturationSlider
var lines=[]
var numberOfLines = 8
var fr = 15
var button
var canvasSize = {x:480, y:480}

function setup() {
    createCanvas(canvasSize.x, canvasSize.y)
    firstSlider = createSlider(1, 50, 1)
    firstSlider.position(20, 20)
    secondSlider = createSlider(1, 50, 1)
    secondSlider.position(20, 50)
    thirdSlider = createSlider(1, 50, 1)
    thirdSlider.position(20, 80)
    saturationSlider = createSlider(1, 100, 65)
    saturationSlider.position(20, 100)
    luminositySlider = createSlider(1, 100, 77)
    luminositySlider.position(20, 120)
    // frameRateSlider = createSlider(1, 100, 70)
    // frameRateSlider.position(20, 120)
    button = createButton('NewColors!');
    button.position(300, 19);
    button.mousePressed(newColors);

    for(let v=0; v<=numberOfLines;v++){
        if (v<=2)
            lines.push(new Line(0,240,260,220,1,true))  
        else if(v<=5)
            lines.push(new Line(0,120,140,100,1,true))
        else if(v<=9)
            lines.push(new Line(0,360,320,380,1,true))     
        lines[v].createPoints()
    }

}
function draw() {
    background(200)
    noFill()
    stroke(255, 102, 0)
   for(let v=0; v<numberOfLines;v++){
     if (v<=2)
            lines[v].draw(firstSlider.value()) 
        else if(v<=5)
            lines[v].draw(secondSlider.value())
        else if(v<=9)
            lines[v].draw(thirdSlider.value())
    }
    stroke(0)
    strokeWeight(1)
    text("Width: Top", firstSlider.x * 2 + firstSlider.width, 35);
    text("Middle", secondSlider.x * 2 + secondSlider.width, 65);
    text("Bottom", thirdSlider.x * 2 + thirdSlider.width, 95);
}

function newColors(){
    for(let v=0; v<numberOfLines;v++){
        lines[v].newColors()
    }
}

var Line = function(startx, starty, upperlimit, lowerlimit, sW,hsl) {
    this.startx = startx
    this.starty = starty
    this.numberOfPoints = 20
    this.points = []
    this.sW = sW
    this.limits = {upper: upperlimit, lower:lowerlimit}
    this.r = random(0,256)
    this.g = random(0,256)
    this.b = random(0,256)
    this.h = floor(random(0,360))
    this.s = 50
    this.l = 60
    this.hsl=hsl
    this.newColors = function(){
        this.h =  floor(random(0,360))
    }
    this.createPoints = function(){
        this.points.push({x:this.startx, y:this.starty})
        for(let i=1; i<=this.numberOfPoints-2;i++){
            this.points.push({
                x:canvasSize.x/this.numberOfPoints*i,
                y:ceil(randomGaussian(this.starty,7)),
                ydirection:null,
            })
        }
        this.points.push({x:canvasSize.x, y:this.starty})
    }

    this.changeDirection = function(i){
        let rn =(this.points[i].y +ceil(random(-25,24)))

        // if(rn >= this.limits.lower ){
        //     rn = -(rn)

        // }
        // if (rn <= this.limits.upper ){
        //     rn =  abs(rn)
        // }
        this.points[i].ydirection =rn
    }
    this.changeWidth = function(newWidth){
        this.sW = newWidth
    }
    this.changeSaturation = function(newSaturation){
        this.s = newSaturation
    }
    this.changeLuminosity = function(newLuminosity){
        this.l = newLuminosity
    }
    this.draw = function(sW){
        var points = this.points
        var nop = this.numberOfPoints
        var that = this
        if(this.hsl)
            stroke(color("hsl("+this.h+","+this.s+"%,"+this.l+"%)"))
        else    
            stroke(this.r, this.g, this.b)
        if(sW!=this.sW)
            this.changeWidth(sW)
        if(saturationSlider.value() != this.s)
            this.changeSaturation(saturationSlider.value())
        if(luminositySlider.value !=this.l)
            this.changeLuminosity(luminositySlider.value())
        strokeWeight(this.sW)
        curve(points[0].x, points[0].y, points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y)
        // this.points.map(
        //     function(point,i){
            for(let i=0 ; i<nop; i++){
               
            if(i===0 || i===1 || i===nop || i===nop-1  ){
                
            }
            else{

                // console.log(points[5].ydirection)
                // console.log(points[5].y)
                 if(!points[i].ydirection || points[i].ydirection==points[i].y){
                    // if(!i===0|| !i===nop ){
                        this.changeDirection(i)
                    // }   
                }
                if(points[i].y<=points[i].ydirection){
                    points[i].y = points[i].y + 1
                }
                else if(points[i].y >= points[i].ydirection){
                    points[i].y = points[i].y - 1
                }
                curve(  points[i-2].x, points[i-2].y,
                        points[i-1].x, points[i-1].y, 
                        points[i].x, points[i].y, 
                        points[i+1].x, points[i+1].y
                )
            }    
        }
        
        curve(points[nop-3].x, points[nop-3].y, 
            points[nop-2].x, points[nop-2].y, 
            points[nop-1].x, points[nop-1].y, 
            points[nop-1].x, points[nop-1].y)
    }
}