const chalk = require('chalk');
var readlineSync = require('readline-sync');

var username = readlineSync.question(chalk.hex('00FFAB')("What is your name? "));
console.log(chalk.cyanBright("Hello ") +chalk.whiteBright.bold.underline.hex('16FF00')(username)+chalk.cyanBright(" Welcome to " + chalk.bold.hex('16FF00')("Are you true fan of Marvels?")));
console.log(chalk.bold.hex('FFE227')("_________________________________________"));
console.log("\n");

var questions = [{
  question:"How many Infinity Stones are there? ",
  answer:"six"
},{
  question:"Where is Captain America from? ",
  answer:"Brooklyn"
},{
  question:"Who was able to pick up Thor’s hammer in Endgame? ",
  answer:"Captain America"
},{
  question:"Black Panther is set in which fictional country? ",
  answer:"Wakanda"
},{
  question:"Who did Captain America give his shield to in Endgame? ",
  answer:"Sam"
},{
  question:"Who is the firstborn child of Odin? ",
  answer:"Hela"
},{
  question:"Who is the Winter Soldier? ",
  answer:"Bucky"
},{
  question:"Who rescued Tony Stark and Nebula from space? ",
  answer:"Captain Marvel"
}];

score=0;

 function play(question,answer){
  if(useranswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.greenBright("You are right!"));
    score++;
  }else{
    console.log(chalk.red("you are wrong!"));
  }
  console.log(chalk.blue("Your score is ")+chalk.hex('6C00FF').bold(score));
}

for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  var useranswer = readlineSync.question(chalk.bold.hex('FF6D28')(currentQuestion.question));
  play(useranswer,currentQuestion.answer);
 console.log(chalk.bold.hex('FFE227')("_________________________________________"));
console.log("\n");
}

var highScores = [{
  name:"Sakshi Srivastava",
  score:8
},{
  name:"Aditya Srivastava",
  score:8
}]
console.log("\n");
console.log(chalk.hex('00FFAB')("The high scores are "));
for(var i=0;i<highScores.length;i++){
  console.log(chalk.hex('FD3A69')(highScores[i].name )+ " " + chalk.hex('FD3A69')(highScores[i].score));
}

console.log(chalk.bold.hex('FFE227')("_________________________________________"));
console.log("\n");

if(score >= highScores[0].score || score >= highScores[1].score ){
  console.log(chalk.hex('16FF00')("Send me a screenshot of the results."))
}else{
  console.log(chalk.hex('16FF00')("Better luck next time!"));
}
