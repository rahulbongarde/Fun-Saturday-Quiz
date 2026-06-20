
alert("APP LOADED");

let current = 0;
let scoreA = 0;
```

let current = 0;
let scoreA = 0;
let scoreB = 0;
let timer;
let time = 10;

function startQuiz() {
    loadQuestion();
}

function loadQuestion() {

    document.getElementById("question").innerHTML =
        window.questions[current].question;

    document.getElementById("answer").style.display = "none";

    document.getElementById("winner").innerHTML =
        "🏆 Winner : Waiting...";

    time = 10;

    clearInterval(timer);

    timer = setInterval(() => {

        document.getElementById("timer").innerHTML = time;

        time--;

        if (time < 0) {

            clearInterval(timer);

            document.getElementById("answer").style.display = "block";

            document.getElementById("answer").innerHTML =
                "✅ " + window.questions[current].answer;

        }

    }, 1000);

}

function nextQuestion() {

    current++;

    if (current >= window.questions.length) {
        current = 0;
    }

    loadQuestion();

}

function addScoreA() {

    scoreA++;

    document.getElementById("scoreA").innerHTML = scoreA;

    document.getElementById("winner").innerHTML =
        "🏆 Winner : Team A";

}

function addScoreB() {

    scoreB++;

    document.getElementById("scoreB").innerHTML = scoreB;

    document.getElementById("winner").innerHTML =
        "🏆 Winner : Team B";

}

window.startQuiz = startQuiz;
window.nextQuestion = nextQuestion;
window.addScoreA = addScoreA;
window.addScoreB = addScoreB;
```
