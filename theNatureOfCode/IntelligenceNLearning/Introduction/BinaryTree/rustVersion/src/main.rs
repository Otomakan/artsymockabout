

#![feature(box_syntax, box_patterns)]
// extern crate syntax;
use std::fmt;
extern crate rand;
#[derive(PartialEq)]
// We have to put Node in a box otherwise we get 'recursive has infinite size" error
// The box isis a smart pointer to a heap allocated value of type T

// type Link = ;

#[derive(Debug)]

// struct NodeTree {
// 	root: Node,
// 	current: & Node
// }


// impl NodeTree{
// 	fn find_node(& self, target:&i64){
// 		println!("Found node");
// 	}
// }
struct Node {
    val:  i64,
    left: Option<Box<Node>>,
    right: Option<Box<Node>>,
}
impl Node{
	pub fn new(v:  i64,r: Option<Box<Node>>, l:Option<Box<Node>>) -> Self{
		Node {
			val: v,
			right: r,
			left: l,
		}
	}

	pub fn insert(&mut self, new_val:i64){
		if self.val == new_val{
			println!("We already got that value babe");
			return
		}
		if new_val > self.val  {
			match self.right{
				Some(ref mut x) => x.insert(new_val),
				None => self.right = Some(Box::new(Node::new(new_val, None, None)))
			}
		}
		else if new_val < self.val {
			match self.left{
				Some(ref mut x)=> x.insert(new_val),
				None => self.left = Some(Box::new(Node::new(new_val, None, None)))
			}
		}
		else{
			println!("There was a problem");
		}
	}	

	pub fn find_node(& self, target: i64)-> Option<Box<&Node>>{
		match self.val {
			val if val == target => Some(Box::new(self)),
			val if val >  target => match &self.left {
					Some(subnode) =>  subnode.find_node(target),
					None => None,
				},
			val if val <  target => match &self.right {
					Some(subnode) =>  subnode.find_node(target),
					None => None,
				},
			_ => None,
		}
	}
}
// impl PartialEq for Node {
//     fn eq(&self, other: &Node) -> bool {
//         self.val == other.val
//     }
// }



fn main() {
	let my_list =  [
	  (1,"lool"),
	  (6,"super"),
	  (4,"gor"),
	  (2,"generate"),
	  (5,"super"),
	  (3, "ralp"),
	  (7,"emm")
 	];
 	let mut root = Node::new(1_i64, None, None);

 	root.insert(1_i64);
 	root.insert(6_i64);
 	root.insert(4_i64);
 	root.insert(3_i64);
 	root.insert(3_i64);
 	let mut random_arr = Vec::new();

 	let mut target: i64 = 1;
 	for x in 0..300000{
 		let rand_val = rand::random::<i64>();
 		random_arr.push(rand_val);
 		if x==200{
 			target = rand_val;
 		}
 	}
 	for x in &random_arr{
 		root.insert(*x);
 	}


 // 	let  charles = Node::new(&60_i64,None, None);
 //  	let  bob = Node::new(&30_i64,None, Some(Box::new(charles)));
 //  	let  ray = Node::new(&30_i64, None, None, );
	// let  bob_dad = Node::new(&30_i64, Some(Box::new(bob)), None);
	// println!("{:#?}",root );

	let path_to_node = root.find_node(target);
	println!("{:?}",target );
	println!("{:?}",path_to_node );


	// let node_present = true;
	// while node_present{
	// 	if !left && !right{
	// 		node_present = false;
	// 	}
	// }

	// match bob_dad.right{
	// 	 None => println!("Nope"),
	// 	Some(subnode) => println!("Bobby is a node {}", subnode),
	// 	_ => println!("ero"),
	// }
	// if bob.right==Some(Box::new(ray)){
	// 	println!("Noooo");
	// }
	// if bob.right==Some(Box::new(charles)){
	// 	println!("Noooo");
	// }
	// else{
	// 	println!("Yooo");
	// }
	// match bob.right{
	// 	None => println!("Nope"),
	// 	Some(box node) => println!("{:?}", node),
	// }
}
