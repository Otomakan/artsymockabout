

#![feature(box_syntax, box_patterns)]
// extern crate syntax;
use std::fmt;
#[derive(Debug)]
#[derive(PartialEq)]
// We have to put Node in a box otherwise we get 'recursive has infinite size" error
// The box isis a smart pointer to a heap allocated value of type T
struct Node<'a>{
	val: i16,
	left: Option<&'a Node<'a>>,
	right: Option<&'a Node<'a>>,
}
// impl PartialEq for Node {
//     fn eq(&self, other: &Node) -> bool {
//         self.val == other.val
//     }
// }

impl<'a>  fmt::Display for Node<'a>{
	fn fmt(&self,f: &mut fmt::Formatter)-> fmt::Result{
		 match self.right{
			Some(x) => println!("We are in{}", x),
			_ =>  println!("{:?}", "lol"),
		};
		write!(f,"val:{}, left:{:?}, right:{:?}",self.val,self.left,self.right)
	}
}

// impl<'a> fmt::Display for std::options::Node<'a>{
// 		fn fmt(&self,f: &mut fmt::Formatter)-> fmt::Result{
// 		write!(f,"val:{}, left:{:?}, right:{:?}",self.val,self.left,self.right)
// 	}
// }

// impl fmt::Display for Node{
// 	fn fmt(&self,f: &mut fmt::Formatter)-> fmt::Result{
// 		write!(f,"val:{}, left:{:?}, right:{:?}",self.val,self.left,self.right)
// 	}
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

  let  charles = Node {left:None, right:None, val:30_i16};
  let  bob = Node {left:None, right:Some(&charles), val:60_i16};
  let  ray = Node {left:None, right:None, val:30_i16};
	let  bob_dad = Node {left:None, right:Some(&bob), val:30_i16};
	println!("{}",bob_dad );
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
