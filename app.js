
let current=0;
let scoreA=0;
let scoreB=0;
let timer;
let time=10;

function startQuiz(){
loadQuestion();
}

function loadQuestion(){

document.getElementById("question").innerHTML =
window.questions[current].question;

document.getElementById("answer").style.display="none";

time=10;

clearInterval(timer);

timer=setInterval(()=>{

document.getElementById("timer").innerHTML=time;

time--;

if(time<0){

clearInterval(timer);

document.getElementById("answer").style.display="block";

document.getElementById("answer").innerHTML =
"✅ " + window.questions[current].answer;

}

},1000);

}

function nextQuestion(){

current++;

if(current>=window.questions.length){

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
/* LIVE SUBMITTED ANSWERS */

setInterval(async () => {

    try {

        const response = await fetch(
        "https://funsaturdayquiz-default-rtdb.asia-southeast1.firebasedatabase.app/answers.json");

        const data = await response.json();

        let html = "";

        if(data){

            const values = Object.values(data);

            values.sort((a,b)=>a.time-b.time);

            values.forEach(item=>{

                html += `
                <div style="
                font-size:18px;
                margin:5px;
                padding:5px;
                background:white;
                border-radius:8px;">
                🏷️ ${item.name}
                (${item.team || "No Team"})
                ➜ ${item.answer}
                </div>
                `;
            });

        }

        document.getElementById("liveAnswers").innerHTML = html;

    }

    catch(error){

        console.log(error);

    }

},2000);
