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

// let nodeGroup = new AllNodes()
// let nodeRoot= new Node('you', nodeGroup)
// // let group = new Group(graph)
// // function setup(){
	
// 	// createCanvas(600,600);
// 	// background(25);
//   nodeRoot.setConnections('you', graph)
//   console.log(nodeRoot)
    target='ron'

  // function exploreGraph(graph,rootEl,target){
    history = []
    visitedNodes = []
    FIFOqueue = []
    FIFOqueue.push('you')
    while (FIFOqueue.length>0){
      currentNode =FIFOqueue[0]
      console.log(`visiting ${currentNode}`)
      if(target==currentNode){
        console.log('found')
        FIFOqueue = [currentNode]
      }
      history.push()
      graph[currentNode].forEach((el) =>{
        if(!visitedNodes.includes(el)){
          FIFOqueue.push(el)
          visitedNodes.push(el)
        }
      })
      FIFOqueue.shift()
    }
    console.log(FIFOqueue)
    console.log()
  // }
  // exploreGraph(graph, 'you')
	// nodeTree.setChildren('you',graph)

// }

// function draw(){
	
// 	// nodeTree.traverse('peggy')
// }