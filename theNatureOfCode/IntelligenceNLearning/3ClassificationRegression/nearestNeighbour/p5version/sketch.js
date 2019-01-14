/// <reference path="global.d.ts" />

// for red, green, and blue color values
var data

function preload(){
  data = loadJSON('index.json')
}
var r, g, b;

function setup() {
  // createCanvas(720, 400);
  noCanvas()
  console.log(data)
  let ratings = data.ratings
  console.log(ratings)
  let movies = data.movies
  // Pick colors randomly
  let userNameDropDownOne = createSelect('User name 1')
  let userNameDropDownTwo = createSelect('User name 2')
  let movieDropDown = createSelect('Movie')
  for (let user in ratings){
    userNameDropDownOne.option(user)
    userNameDropDownTwo.option(user)
  }
  for (let movie in movies){
    movieDropDown.option(movies[movie])
  }
  var button = createButton('submit')
  button.mousePressed(euclidianSimilarity)
  // console.log(movieDropDown.value())


  function euclidianSimilarity(){
    let p1 = userNameDropDownOne.value()
    let p2 = userNameDropDownTwo.value()
    // movie = movieDropDown.value()
    let length = Math.min(p1.length,p2.length)
    let euclidianDif = 0
   for (let movie in ratings[p1]){
      if(ratings[p2].hasOwnProperty(movie)){
        console.log(movie)
        let r2 = ratings[p2][movie]
        let r1 = ratings[p1][movie]
        let dif = r1-r2
        euclidianDif += Math.pow(dif,2)
        console.log(euclidianDif)
      }
      else
        console.log(`${p2} has not rated ${movie}`)
   }
   console.log(Math.sqrt(euclidianDif))
   createP(1/(1+Math.sqrt(euclidianDif)))
  }

   mostSimilarUsers()
   function mostSimilarUsers(){
    let userArr = []
    for (let user in ratings){
      userArr.push(user)
    }
    console.log(userArr)
    let userPairs = {}

    for(let i = 0; i<userArr.length-1;i++){
      for(let ii = i+1; ii<userArr.length-1;ii++){
        let u1 = userArr[i]
        let u2 = userArr[ii]
        userPairs[u1+"/"+u2] = 0
        let occurence = 0
        for(let movie in ratings[u1]){
          if(ratings[u2].hasOwnProperty(movie)){
              let r2 = ratings[u2][movie]
              let r1 = ratings[u1][movie]
              let dif = r1-r2
              occurence+=1
             userPairs[u1+"/"+u2]+= Math.pow(dif,2)
          }
        }

       userPairs[u1+"/"+u2] = 1/userPairs[u1+"/"+u2]/occurence
      }
    }
    console.log(userPairs)
    }
   }
  //   let p1Grade = ratings[p1][movie]
  //   let p2Grade = ratings[p2][movie]
  //   if(p1Grade &&p2Grade){
  //   // /?Similarity is  the square root of the sum of the square of the two values
  //     // for()
  //     let similarity = Math.sqrt(Math.pow(p1Grade-p2Grade,2))
  //     console.log(p1Grade)
  //     console.log(p2Grade)
  //     console.log(similarity)
  //   }
  //   else
  //     console.log("We only have one available value")
  
// }


// function draw() {
//   background(51);
//   // Draw a circle
//   // strokeWeight(2);
//   // stroke(r, g, b);
//   // fill(r, g, b, 127);
// }
