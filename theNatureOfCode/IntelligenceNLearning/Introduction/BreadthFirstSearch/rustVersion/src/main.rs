use std::collections::HashMap;
// extern crate queues;
// use queues::*;
use std::collections::VecDeque;


type Names<'a> = HashMap<&'a String,  Vec<&'a String>>;

fn main(){
	let mut graph: Names = HashMap::new();
	let you = String::from("you");

	let alice = String::from("alice");

	let bob = String::from("bob");
	let claire = String::from("claire");
	let anuj = String::from("anuj");
	let peggy = String::from("peggy");
	let thom = String::from("thom");
	let ron = String::from("ron");
	let jonny = String::from("jonny");
	graph.insert(&you,
		vec![&alice,&bob,&claire]);
	graph.insert(&bob,
		vec![&anuj,&peggy]);
	graph.insert(&alice,
		vec![&peggy]);
	graph.insert(&claire,
		vec![&thom,&jonny]);
	graph.insert(&ron,
		vec![&bob]);
	graph.insert(&anuj,
		vec![]);
	graph.insert(&thom,
		vec![]);
	graph.insert(&peggy,
		vec![&ron,&thom]);
	graph.insert(&jonny,
		vec![]);
	// graph
	println!("{:?}", graph);


	let mut FIFOqueue: VecDeque<&String> = VecDeque::new();
	FIFOqueue.push_back(&you);
	// let mut history = VecDeque<
	let mut visited = Vec::new();
	while FIFOqueue.len()!=0{
		let  currentEntry =  FIFOqueue[0] ;
		println!("The current Entry is {:?}",currentEntry );

		visited.push(currentEntry);
		let mut done = false;
		if(graph[currentEntry].len()>0){
			for el in &graph[currentEntry]{
				for items in &visited{
					if(el==items){
						println!("visited");
						done =true
					}
				}
				if(!done){
					println!("{:?}",done );
					FIFOqueue.push_back(el);
				}
			}
		}
		FIFOqueue.pop_front();
	}
	println!("{:?}",graph[&you] );
}
// let graph = {
//   'you': ['alice', 'bob', 'claire'],
//   'bob': ['anuj', 'peggy'],
//   'alice': ['peggy'],
//   'claire': ['thom', 'jonny'],
//   'ron':[],
//   'anuj': [],
//   'peggy': ['ron'],
//   'thom': [],
//   'jonny': [],
// }