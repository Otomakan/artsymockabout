let graph = {
  'you': ['alice', 'bob', 'claire'],
  'bob': ['anuj', 'peggy'],
  'alice': ['peggy'],
  'claire': ['thom', 'jonny'],
  'anuj': [],
  'peggy': [],
  'thom': [],
  'jonny': []
}

	// let nodeTree= new Node(20,20)
let group = new Group(graph)
function setup(){
	
	createCanvas(600,600);
	background(25);
	// nodeTree.setChildren('you',graph)

}

function draw(){
	
	// nodeTree.traverse('peggy')
}