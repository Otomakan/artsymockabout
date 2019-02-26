document.addEventListener("DOMContentLoaded", function(event) {
 const cube = document.getElementById('cube')
 const rotateRules = {
  front: "rotateX(0deg)",
  back: "rotateX(180deg)",
  right: "rotateX(90deg)",
  left: "rotateX(270deg)",
  top: "rotateY(90deg)",
  bottom: "rotateY(270deg)"
 }

 initCubeFace(cube, rotateRules)

 cubeMovement(cube, rotateRules)


});

// Easy representation of the cube
class GraphCube {
 constructor(props) {

  this.state = {
   curr: 'front',
   down: 'bottom',
   up: 'top',
   left: 'left',
   right: 'right',
   none: 'back'
  }
 }
 changeDir(dir) {
  // Switch statement to properly reset the new orientation of the cube
  switch (dir) {
   case 'left':
    this.state = {
     ...this.state,
     curr: this.state.left,
     right: this.state.curr,
     left: this.state.none,
     none: this.state.right
    }
    break;
   case 'right':
    this.state = {
     ...this.state,
     curr: this.state.right,
     right: this.state.none,
     left: this.state.curr,
     none: this.state.left
    }
    break;
   case 'up':
    this.state = {
     ...this.state,
     curr: this.state.up,
     up: this.state.none,
     down: this.state.curr,
     none: this.state.down
    }
    break;
   case 'down':
    this.state = {
     ...this.state,
     curr: this.state.down,
     up: this.state.curr,
     down: this.state.none,
     none: this.state.up
    }
    break
   default:
    console.log('something is wrong')
  }
 }
}

const initCubeFace = (cube, rotateRules) => {
 let cubeFace = document.getElementsByClassName('cube-face')
 let cubeOpen = false



 for (let i = 0; i < cubeFace.length; i++) {
  imgNum = i + 1
  cubeFace[i].style.background = "url(http://mmp.jmisteli.com/assets/cubeart/img" + imgNum + ".png)"
  cubeFace[i].style.backgroundSize = "100%"
  cubeFace[i].onclick = () => {
   let trZ = cubeOpen ? "35" : "25"
   window.innerHeight > window.innerWidth ?
    trZ += ('vw') :
    trZ += ('vh')

   for (let ii = 0; ii < cubeFace.length; ii++) {
    cubeFace[ii].style.transition = "1s"
    cubeFace[ii].style.transform = rotateRules[Object.keys(rotateRules)[ii]] + " translateZ(" + trZ + ")"
   }
   cubeOpen = !cubeOpen

  }
 }
}

const cubeMovement = (cube, rotateRules) => {
 let currentFace
 let myCube = new GraphCube

 const directions = ["up", "right", "left", "down"]
 directions.forEach((dir) => {

  const arrow = document.getElementById(dir + "-arrow")
  arrow.onclick = () => {
   myCube.changeDir(dir)
   cube.style.transform = rotateRules[myCube.state.curr]
   console.log(myCube.state.curr)

  }
 });
}