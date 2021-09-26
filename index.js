//ex-01
//console.log("Rishabh Mishra");

//ex-02
// var readlineSync = require("readline-sync");
// var userName = readlineSync.question("What is your Name ? ")

//ex-03 & ex-04
// var readlineSync = require("readline-sync");
// var userName = readlineSync.question("What is your Name? ")
// console.log("Welcome " + userName);

//ex-05
// var readlineSync = require("readline-sync");
// var userAge = readlineSync.question("Is my age greater than 25? ");
// if (userAge === "yes"){
//   console.log("right");
// }else{
//   console.log("wrong");
// }

//ex-06
// var readlineSync = require("readline-sync");
// var userTown = readlineSync.question("Is my hometown Bokaro? ");
// var score = 0;

// if(userTown === "no"){
//   score++;
//   console.log("Your score is : " + score);

// }else{
//   score--;
//   console.log("Your score is : " + score);
// }

//ex-07
// var readlineSync = require("readline-sync");
// var numOne = parseInt(readlineSync.question("Enter first Number: "));
// var numTwo = parseInt(readlineSync.question("Enter Second Number: "));
// function add(parameterOne, parameterTwo){
//   console.log(parameterOne+parameterTwo);
// }
// add(numOne, numTwo);

//ex-08
// var readlineSync = require("readline-sync");
// var score = 0;
// function askQuestion(question, answer){
//   var userAnswer = readlineSync.question(question);

//   if(userAnswer === answer){
//     score++;
//     console.log("You are right");
//   }else{
//     console.log("Your are wrong");
//   }
//   console.log("your score is " + score);
// }

// askQuestion("Am i rishabh? ", "yes");

//ex-09
// for(var i = 1; i<6; i++){
//   console.log(i + " Rishabh Misrha")
// }

//ex-09 homework
// var readlineSync = require("readline-sync");
// var userNumber = parseInt(readlineSync.question("Enter a Number: "));

// for(var i = 0; i<userNumber; i++){
//   console.log('* '.repeat(i));
// }
// for (var i = userNumber; i>0; i--){
//   console.log('* '.repeat(i));
// }

//ex-10
// var groceryList = ["apple", "mango", "chocolate","pen", "sugar"];
// console.log(groceryList[0]);
// console.log(groceryList[2]);
// console.log(groceryList[groceryList.length-1]);

//ex-11
// var groceryList = ["apple", "mango", "chocolate","pen", "sugar"];
// for(var i = 0 ; i<groceryList.length;i++){
//   console.log(groceryList[i]);
// }

//ex-12
// var batman = {
//   power: "100",
//   strength: "1000",
//   stleath: "200",
//   brain: "300",
// }

// var superman = {
//   power: "200",
//   strength:"2000",
//   stleath: "300",
//   brain: "100"
// }

// console.log(batman.power);
// console.log(superman.strength);
// console.log(batman.brain > superman.brain);

//ex-13, ex-14, ex-15

var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your Name? ");
console.log("Welcome " + userName);
var questionList = [questionOne = {
  question: "Who is my favorite superhero? ",
  answer: "Shaktiman"
},
questionTwo = {
  question: "UI vs AI?",
  answer: "UI"
},questionThree = {
  question: "Which is my favorite mobile game? ",
  answer: "Pubg"
},questionFour = {
  question: "Where do i work? ",
  answer: "Incture"
},questionFive = {
  question: "What is my profession? ",
  answer: "Software Developer"
}
];

var highScore = [{
  name:"Rishabh",
  score:5
}];

var score = 0 ;

function askQuestion(questionP, answer){
  var userAnswer = readlineSync.question(questionP);
  if(userAnswer === answer){
    score++;
    console.log("You are right ");
  }else{
    console.log("You are wrong ");
  }
  console.log("Your score is " + score);
  console.log("-----------");
};

for (i=0; i<questionList.length;i++){
  askQuestion(questionList[i].question, questionList[i].answer);
}

if(score === highScore[0].score){
  console.log("Your score is " + score);
  console.log("You beat highscore");
}