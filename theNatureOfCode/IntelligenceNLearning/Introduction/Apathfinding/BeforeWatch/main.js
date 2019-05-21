class Path{
	constructor(startNode) {
	  this.startNode = startNode;
	}
}
class Node {
	constructor(x, y, value){
		this.position = new Pos(x,y)
		this.value = 0
		this.neighbors = {
			up:null,
			down:null,
			right:null,
			left:null
		}
	}
}





function whatIsDirectLine(start, end){
	// eg A = 0,0
	//B = 10,10
	// Function =  fn(x) = ax + b
	//f(x) = x + 0

	let slope = (start.y-end.y)/(start.x-end.x)
	if(start.x-end.x===0)
		slope=0
	// y = slopex + b
	// pointA[1] = slope*pointA[0] +b 

	return {
		slope,
		intercept: start.y-(start.x*slope)
	}
}


const treeOfPaths = {}
const maze = new Maze(5,5,25)
console.log(maze)

function setup() {
  createCanvas(640, 480)
  background(250)
  maze.initialize()
  console.log("DIRECT LINE IS ")
  console.log(maze)
  const euristicFunction = whatIsDirectLine(maze.start, maze.end)
  // const theoraticalBShortestNumberOfSteps = 
}
function draw() {
	maze.display()
}


// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});



