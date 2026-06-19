import { questions } from "./questions.js";
import { db } from "./firebase.js";

import {
ref,
onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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

window.startQuiz = startQuiz;
window.nextQuestion = nextQuestion;
window.addScoreA = addScoreA;
window.addScoreB = addScoreB;

/* LIVE ANSWERS */

const answersRef = ref(db,"answers");

onValue(answersRef,(snapshot)=>{

const data = snapshot.val();

if(!data) return;

let html="";

for(let key in data){

html += `
<p>
🏷️ ${data[key].name}
 (${data[key].team || "No Team"})
 ➜ ${data[key].answer}
</p>
`;

}

const liveAnswers =
document.getElementById("liveAnswers");

if(liveAnswers){

liveAnswers.innerHTML = html;

}

});
```

