
var lines=[]
var numberOfLines = 65
var fr = 15
var numberOfPoints = 12
var canvasSize = {x:window.innerWidth, y:window.innerHeight}

function setup() {
    createCanvas(canvasSize.x, canvasSize.y)

    for(let v=0; v<=numberOfLines;v++){
        lines.push(new Line(0,240,260,220,1,false))      
        lines[v].createPoints()
    }

}
function draw() {
    background(200)
    noFill()
    stroke(255, 102, 0)
   lines.map((line, i)=>{
        line.draw()
    })
    frameRate(fr)     
  
}


var Line = function(startx, starty, upperlimit, lowerlimit, sW,hsl) {
    this.startx = startx
    this.starty = starty
    this.numberOfPoints = numberOfPoints
    this.points = []
    this.limits = {upper: upperlimit, lower:lowerlimit}
    this.r = random(0,360)
    this.g = 55 +15*Math.random()
    this.b = random(25,80)

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

    this.changeDirection = function(point){
        let rn =point.y +ceil(random(-10,9))

        if(rn < 120 ){
            rn = point.y +ceil(random(0,9))

        }
        if (rn > 360 ){
            rn =  point.y +ceil(random(-10,0))
        }
       point.ydirection =rn
    }
  
    this.draw = function(){
        var points = this.points
        var nop = this.numberOfPoints
        let changeDirection = this.changeDirection
        stroke(this.r, this.g, this.b)

        strokeWeight(2)
        curve(points[0].x, points[0].y, points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y)
        this.points.map(
            function(point,i){
               
            if(i===0 || i===1 || i===nop || i===nop-1  ){   
            }
            else{

                 if(!point.ydirection || point.ydirection==point.y ){
                    changeDirection(point)
                }
                if(point.y<point.ydirection ){
                    point.y = point.y + 1
                }
                if(point.y > point.ydirection){
                    point.y = point.y - 1
                }
                
                curve(  points[i-2].x, points[i-2].y,
                        points[i-1].x, points[i-1].y, 
                        points[i].x, points[i].y, 
                        points[i+1].x, points[i+1].y
                )
            }    
        })
        
        curve(points[nop-3].x, points[nop-3].y, 
            points[nop-2].x, points[nop-2].y, 
            points[nop-1].x, points[nop-1].y, 
            points[nop-1].x, points[nop-1].y)
    }
}