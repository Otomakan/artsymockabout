#[macro_use]
extern crate serde_derive;

extern crate serde;
extern crate serde_json;

use std::error::Error;
use std::fs::File;
use std::path::Path;
use std::io::prelude::*;
use std::collections::HashMap;
use std::collections::VecDeque;

#[derive(Deserialize, Debug)]
struct Movie{
	title: String,
	cast: Vec<String>
}
#[derive(Deserialize, Debug)]
struct MovieList{
	movies: Vec<Movie>
}

impl Movie{
	fn find_actor(&self, target: &String)-> bool{
		for actor in &self.cast{
			if (actor == target){
				return true
			}
		}
		return false
	}
}


fn read_movies_from_file<P: AsRef<Path>>(path: P) -> Result<MovieList, Box<Error>> {
    // Open the file in read-only mode.
    let  mut file = File::open(path)?;
    // let mut contents = String::new();
    // file.read_to_string(&mut contents)?;
    // Read the JSON contents of the file as an instance of `User`.
    let m = serde_json::from_reader(file)?;
    // println!("{:?}", contents );
    // Return the `User`.
    Ok(m)
}

fn main() {
    let all_movies =  read_movies_from_file("bacon.json").unwrap().movies;
    // println!("{:?}",movies );
    let mut moviesHash:HashMap<&str, &Vec<String>>=HashMap::new();
    for movie in &all_movies {
    	moviesHash.insert(&movie.title, &movie.cast);
    	// println!("{:?}",movie );
    	// moviesHash.insert(&movie.title,movie.cast);
    }
    let mut actorsHash:HashMap<String,Vec<&str>> = HashMap::new();

    for movie in &all_movies{
    	for cast_member in &movie.cast{
    		actorsHash.entry(cast_member.to_string()).or_insert(Vec::new());
    		if let Some(actor_movies) = actorsHash.get_mut(cast_member){
    			actor_movies.push(&*movie.title);
    		}
    	}
    }



    let mut visited:Vec<&str> = Vec::new();
    let mut FIFOqueue = VecDeque::new();
    FIFOqueue.push_front("Viola Davis");
    while(FIFOqueue.len()>0){
    	let current_actress = FIFOqueue[FIFOqueue.len()-1];
    	visited.push(&current_actress);
    	// for children in movies
    	// if let Some(movies) = actorsHash.get(current_actress){
    	
	    // 	for movie in movies{
	    // 		println!("{:?}",moviesHash.get(movie));
	    // 	}
   		//  }
   		let movies = actorsHash.get(current_actress).unwrap();
   		for movie in movies{
   			let cast  = *moviesHash.get(movie).unwrap();
   			for cast_member in &*cast{
   				if cast_member=="Kevin Bacon"{
   					println!("KEvin Bacon played in{:?}",movie );
   					println!("With {:?}", current_actress );
   					println!("You WON!");
   					return
   				} else {
   					match  visited.binary_search(&&cast_member[..]) {
   						Ok(i)=> {continue},
   						_ => {FIFOqueue.push_front(&cast_member)},
   					}
   				}
   			}
	    	println!("{:?}",cast);
	    }
    	FIFOqueue.pop_back();
    }
    // println!("{:?}", actorsHash);

}
