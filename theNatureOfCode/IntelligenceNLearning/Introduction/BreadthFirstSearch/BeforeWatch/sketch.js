let graph = {
  'you': ['alice', 'bob', 'claire'],
  'bob': ['anuj', 'peggy'],
  'alice': ['peggy'],
  'claire': ['thom', 'jonny'],
  'ron':[],
  'anuj': [],
  'peggy': ['ron'],
  'thom': [],
  'jonny': [],
}

let nodeGroup = new Graph()
let nodeRoot= new Node('you', nodeGroup)
// let group = new Group(graph)
// function setup(){
	
	// createCanvas(600,600);
	// background(25);
  nodeRoot.setConnections('you', graph)
  console.log(nodeRoot)
	// nodeTree.setChildren('you',graph)

// }

// function draw(){
	
// 	// nodeTree.traverse('peggy')
// }