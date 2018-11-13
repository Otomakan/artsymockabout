

#![feature(box_syntax, box_patterns)]
// extern crate syntax;
use std::fmt;
#[derive(Debug)]
#[derive(PartialEq)]
// We have to put Node in a box otherwise we get 'recursive has infinite size" error
// The box isis a smart pointer to a heap allocated value of type T

// type Link = ;
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
}
// impl PartialEq for Node {
//     fn eq(&self, other: &Node) -> bool {
//         self.val == other.val
//     }
// }

impl<'a>  fmt::Display for Node<'a>{
	fn fmt(&self,f: &mut fmt::Formatter)-> fmt::Result{
		let result = "";
		let right =  match self.right{
			Some(ref x) =>  &x,
			_ => &Box::new("no node"),
		};
		// 	let left =  match self.left{
		// 	Some(ref x) =>  write!(f,"{:?}",x),
		// 	_ =>  write!(f,"No node"),
		// };
		write!(f,"val:{}, left:{:?}, right:{:?}",self.val,self.left,right)
	}
}

// fn format_node_to_string(Node<'a>)->&str{

// }

// impl<'a> fmt::Display for Node<'a>{
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
 let  charles = Node::new(&60_i16,None, None);
  let  bob = Node::new(&30_i16,None, Some(Box::new(charles)));
  // let  charles = Node::new(left:None, right:None, val:&30_i16);
  // // let  bob = Node::new({left:None, right:Some(Box(charles)), val:&60_i16});
 //  let  ray = Node::new({left:None, right:None, val:&30_i16});
	let  bob_dad = Node::new(&30_i16, Some(Box::new(bob)), None);
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
