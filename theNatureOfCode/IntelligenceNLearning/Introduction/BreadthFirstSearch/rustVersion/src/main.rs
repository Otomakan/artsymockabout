#[derive(Debug)]
struct Graph {
	root: &Node
}

struct Node {
	val: i64,
	neighbours: Option<Box<[Node]>>
}

impl Node{
	insert()
}

fn main() {
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
    println!("Hello, world!");
}
