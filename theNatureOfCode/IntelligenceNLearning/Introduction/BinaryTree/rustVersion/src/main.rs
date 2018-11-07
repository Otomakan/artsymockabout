use std::fmt;

#![feature(box_syntax, box_patterns)]
extern crate syntax;
#[derive(Debug)]
// We have to put Node in a box otherwise we get 'recursive has infinite size" error
// The box isis a smart pointer to a heap allocated value of type T
struct Node {
	left: Option<Box<Node>>,
	right: Option<Box<Node>>,
	val: i16,
}


impl fmt::Display for Node{
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
  let bob = Node {left:None, right:None, val:60_i16};
   let bob_dad = Node {left:None, right:Some(Box::new(bob)), val:30_i16};
   println!("{:?}",my_list);
   println!("{}",bob_dad );
	match bob_dad.right{
		None => println!("Nope"),
		Some(val) => println!("{:?}", val),
	}
	match bob.right{
		None => println!("Nope"),
		Some(box node) => println!("{:?}", node),
	}
}
