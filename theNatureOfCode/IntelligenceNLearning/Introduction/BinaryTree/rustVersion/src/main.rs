

#![feature(box_syntax, box_patterns)]
// extern crate syntax;
use std::fmt;
extern crate rand;
// #[derive(PartialEq)]
// We have to put Node in a box otherwise we get 'recursive has infinite size" error
// The box isis a smart pointer to a heap allocated value of type T


#[derive(Debug)]

// Each node holds a value and references to right and left Node, 
// We put it in an option in case there is no child Node
struct Node {
    val:  i64,
    left: Option<Box<Node>>,
    right: Option<Box<Node>>,
}
// impl PartialEq for Node {
//     fn eq(&self, other: &Node) -> bool {
//         self.val == other.val
//     }
// }



impl Node{
	// We can do without this probably
	 fn new(v:  i64,r: Option<Box<Node>>, l:Option<Box<Node>>) -> Self{
		Node {
			val: v,
			right: r,
			left: l,
		}
	}

// The insert function simply compares the value to the one of the present Node
// If == return
// If new value is < to the value of the current Node then create a new Node if No value or call insert again
//Same with >
	 fn insert(&mut self, new_val:i64){
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

	 fn find_node(& self, target: i64)-> Option<Box<&Node>>{
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

fn main() {

 	let mut root = Node::new(1_i64, None, None);
 	let mut target: i64 = 1;
 	let mut random_arr = Vec::new();
 	for x in 0..30000{
 		let rand_val = rand::random::<i64>();
 		random_arr.push(rand_val);
 		if x==200{
 			target = rand_val;
 		}
 	}
 	for x in &random_arr{
 		root.insert(*x);
 	}


	let path_to_node = root.find_node(target);
	println!("{:?}",target );
	println!("{:?}",path_to_node );

}
