var s1 = (p)=> {
	p.setup=()=>{
		var canvas = p.createCanvas(220, 600)
		canvas.parent('chapter1figure2')
		p.background(220)
	}
	p.draw = ()=>{
		p.stroke(0)
		p.bezier(100,0, 
				140,20,
				80,70,
				 35,100)
	}
}
// var s2 = (p)=> {
// 	p.setup=()=>{
// 		var canvas = p.createCanvas(300, 600)
// 		canvas.parent('chapter1figure2')
// 		p.background(220)
// 	}
// 	p.draw = ()=>{

// 	}
// }
var myp5= new p5(s1)