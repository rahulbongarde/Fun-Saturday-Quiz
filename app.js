let current=0;
let scoreA=0;
let scoreB=0;
let timer;
let time=10;

function startQuiz(){
loadQuestion();
}

function loadQuestion(){

document.getElementById("question").innerHTML=
questions[current].question;

document.getElementById("answer").style.display="none";

time=10;

clearInterval(timer);

timer=setInterval(()=>{

document.getElementById("timer").innerHTML=time;

time--;

if(time<0){

clearInterval(timer);

document.getElementById("answer").style.display="block";

document.getElementById("answer").innerHTML=
"✅ "+questions[current].answer;

}

},1000);

}

function nextQuestion(){

current++;

if(current>=questions.length){

alert("Quiz Completed");

current=0;

}

loadQuestion();

}

function addScoreA(){

scoreA++;

document.getElementById("scoreA").innerHTML=scoreA;

}

function addScoreB(){

scoreB++;

document.getElementById("scoreB").innerHTML=scoreB;

}
