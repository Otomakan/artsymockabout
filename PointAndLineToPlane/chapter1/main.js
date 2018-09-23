var s1 = (p)=> {
	p.setup=()=>{
		p.createCanvas(300, 600).parent('chapter1figure2')
		p.background(220)
	}
	p.draw = ()=>{

	}
}
var s2 = (p)=> {
	p.setup=()=>{
		p.createCanvas(300, 600)
		p.background(220)
	}
	p.draw = ()=>{

	}
}
var myp5= new p5(s1, s2)