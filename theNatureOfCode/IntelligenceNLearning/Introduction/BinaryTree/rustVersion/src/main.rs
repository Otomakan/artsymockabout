

#![feature(box_syntax, box_patterns)]
// extern crate syntax;
use std::fmt;
#[derive(PartialEq)]
// We have to put Node in a box otherwise we get 'recursive has infinite size" error
// The box isis a smart pointer to a heap allocated value of type T

// type Link = ;

#[derive(Debug)]

// struct NodeTree<'a> {
// 	root: Node<'a>,
// 	current: & Node<'a>
// }


// impl<'a> NodeTree<'a>{
// 	fn find_node(& self, target:&i16){
// 		println!("Found node");
// 	}
// }
struct Node<'a> {
    val: &'a i16,
    left: Option<Box<Node<'a>>>,
    right: Option<Box<Node<'a>>>,
}
impl<'a> Node<'a>{
	pub fn new(v: &'a i16,r: Option<Box<Node<'a>>>, l:Option<Box<Node<'a>>>) -> Self{
		Node {
			val: v,
			right: r,
			left: l,
		}
	}

	pub fn insert(&mut self, new_val:&'a i16){
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

	pub fn find_node(& self, target:& i16)-> Option<Box<&Node<'a>>>{
		// path.push(target);
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
 	let mut root = Node::new(&1_i16, None, None);

 	root.insert(&1_i16);
 	root.insert(&6_i16);
 	root.insert(&4_i16);
 	root.insert(&3_i16);
 // 	let  charles = Node::new(&60_i16,None, None);
 //  	let  bob = Node::new(&30_i16,None, Some(Box::new(charles)));
 //  	let  ray = Node::new(&30_i16, None, None, );
	// let  bob_dad = Node::new(&30_i16, Some(Box::new(bob)), None);
	println!("{:#?}",root );

	let path_to_node = root.find_node(&10);

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
