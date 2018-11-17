// use std::collections::BTreeMap;
use std::fmt::{Debug, Formatter,Result};
#[derive(Debug)]

struct Node<'a> {
	value : &'a str,
	neighbours : Vec<&'a Node<'a>>,
}
struct Graph<'a> {
	nodes : Vec<Node<'a>>
}

impl<'a> Node<'a>{
	 fn new(value: &'a str)->Self{
		Node{
			value: value,
			neighbours: Vec::new()
		}
	}

	fn add_neighbour(&mut self, new_neigh:&'a Node){
		self.neighbours.push(new_neigh);
	}
}

impl<'a> Graph<'a>{
	// fn new(firstEdge:Node)-> Self{
	// 	let mut graphVec = Vec::new();
	// 	graphVec.push(&firstEdge);
	// 	Graph<'a>{
	// 		nodes :graphVec
	// 	}
	// }
	fn insert_node(&mut self, new_node:Node<'a>) {
		self.nodes.push( new_node);
	}	
	fn get_node(&self,target_name: &str)->Option<&Node>{
		// let mut good_node = None;
		// for curr_node in self.nodes.iter(){
		// 	if curr_node.value == target_name {
		// 		good_node = Some(curr_node);
		// 	}
		// }
		// good_node
		Some(&self.nodes[0])
	}
	fn add_edge(&self, target_1: &str, target_2 :&str){

		// match n1 {
		// 	Some(ref mut x) => {
		// 		match n2 {
		// 			Some(ref mut y) => {
		// 				*x.add_neighbour(y);
		// 				*y.add_neighbour(x);
		// 			},
		// 			None => println!("Err"),
		// 		}
		// 	},
		// 	_ => println!("Error")
		// };
		
		let mut n1 = &mut self.nodes[0];
		// match self.get_node(target_1) {
		// 	Some(x) => x,
		// 	_ => panic!("There was an error!"),
		// };
		// let n2 = match self.get_node(target_2){
		// 	Some(x) => x,
		// 	_ => panic!("There was an error!"),
		// };

		n1.add_neighbour(&self.nodes[1]);
		// n1
		println!("{:?}",n1 );
	}
}


impl<'a> Debug for Graph<'a>{
	fn fmt(&self,f: &mut Formatter)-> Result{
		for i in &self.nodes{
			write!(f, "{:?}\n", i)?
		}
		Ok(())
	}
}
// impl<'a> Node<'a>{
// 	fn new(val: &str) -> Self {
// 		Node<'a>{
// 			value: val
// 		}
// 	}
// }

fn main() {
	let root_edge = Node::new("you");
	let mut graphVec = Vec::new();
	graphVec.push(root_edge);
	let mut graph = Graph {nodes: graphVec};
	let mut lol =Node::new("lol");
	graph.insert_node(lol);
	graph.add_edge("lol","you");

}
