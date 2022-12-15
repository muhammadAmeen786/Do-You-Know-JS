//lets check How much js you know
var readLine = require('readline-sync');
var name = readLine.question("What is your name ?\n");
console.log(`Welcome ${name}
let's check how much you Know about Js!! 
......................................................
Please enter the scores as they are suggested.(consider uppercases and LowerCases)
........................................................`);

var score = 0;
var fscore = 0;


var questionArray = [
  {
  question: "When was js Invented (1990/2010/1995/2000)",
  ans: 1995
},
  {
  question: "How many day's it took to invent it (15/10/20/21)",
  ans: 10
},
  {
  question: "What is --> {}  (object/array/class/module)",
  ans: "object"
},
  {
  question: "what will be output console.log(2>3) (true or False)",
  ans: "false"
},
  {
  question: `what will be output (console.log("11"+1 +"1"))`,
  ans: "1111"
}, 
  {
  question: `what will be output (console.log(1+1 +"1"))`,
  ans: "21"
}, 
  {
  question: `who deveoloped JS? (Dennis Richie/ BillGates/Google/Brendan Eich))`,
  ans: "Brendan Eich"
} 
]
function check(question, answer){
  var userAns = readLine.question(question +"\n");
  if(userAns==answer){
    console.log("Cool go Ahead...........................................................");
    score = score+1;
  }
  else{
    console.log("your answer is wrong.............................................................");
    if(score<=0){
      score = 0;
    }
    else{
      score = score-1;
      
    }
    
  }

  console.log("Your score is " + score);
  fscore = score;
}

for(let ques=0; ques < questionArray.length; ques++){
var currques = questionArray[ques];
  check(currques.question , currques.ans);
}
if(fscore>=4){
  console.log(`Well ${name} 
  that is it from our side 
  we think
  you know JavaScript !! Congrats`)
}
else{
  console.log(`\n Sorry  ${name}\n 
  we think 
  you don't know JavaScript well 
  Don't worry it takes some Time!!
  keep practising...`)
}

