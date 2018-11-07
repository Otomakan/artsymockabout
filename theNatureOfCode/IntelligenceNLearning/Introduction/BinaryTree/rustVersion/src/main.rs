

#![feature(box_syntax, box_patterns)]
// extern crate syntax;
use std::fmt;
#[derive(Debug)]
#[derive(PartialEq)]
// We have to put Node in a box otherwise we get 'recursive has infinite size" error
// The box isis a smart pointer to a heap allocated value of type T
struct Node<'a> {
	val: &'a i16,
	left: Option<Box<Node<'a>>>,
	right: Option<Box<Node<'a>>>,
}
// impl PartialEq for Node {
//     fn eq(&self, other: &Node) -> bool {
//         self.val == other.val
//     }
// }

impl <'a>fmt::Display for Node<'a>{
	fn fmt(&self,f: &mut fmt::Formatter)-> fmt::Result{
		write!(f,"val:{}, left:{:?}, right:{:?}",self.val,self.left,self.right)
	}
}

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

  let mut charles = Node {left:None, right:None, val:&30_i16};
  let mut bob = Node {left:None, right:Some(Box::new(charles)), val:&60_i16};
  let mut ray = Node {left:None, right:None, val:&30_i16};
  
   let mut bob_dad = Node {left:None, right:Some(Box::new(bob)), val:&30_i16};
   println!("{:?}",my_list);
   // println!("{}",bob_dad );
	match bob_dad.right{
		&mut None => println!("Nope"),
		&mut Some(ref mut subnode) => println!("{:?}", subnode),
		_ => println!("ero");
	}
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
