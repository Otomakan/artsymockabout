fn check_if_prime(input: i64){

	let mut isprime =true;
	// let n : i64 = 0;
 	for mut n in  0..input {
 		n+=1;
 		if input % n == 0 {
 			isprime = false;
 			break
 		}
 	}
 	match isprime{
 		false => println!("Not a prime"),
 		true => println!("Is a prime"),
 	}  
}

fn trial_division(mut input: i64) -> Vec<i64>{
	let mut prime_factors = Vec::new();
	let mut possible_factor = 2_i64;
	while input > 1 {
		if input % possible_factor  == 0{
			prime_factors.push(possible_factor);
			input = input /possible_factor;
		} else {
			possible_factor += 1;
		}
	}
	prime_factors
}

fn trial_division_on_steroids(mut input: i64) -> Vec<i64>{
	let mut prime_factors = Vec::new();

	while  input % 2 == 0 {
		prime_factors.push(2);
		input = input/2;
	}

	let mut possible_factor = 3_i64;
	while possible_factor * possible_factor <= input{
		println!("{:?}",input );
		if input % possible_factor == 0 {
			prime_factors.push(possible_factor);
			input = input/possible_factor;
		} else {
			possible_factor = possible_factor + 2;
		}
	}
	if input!=1 {
		prime_factors.push(input);
	}
	prime_factors
}
fn main() {
	let find_my_prime_factors = 760;
	println!("{:?}",trial_division_on_steroids(find_my_prime_factors));
	print!("{:?}", trial_division(find_my_prime_factors));
}
