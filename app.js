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

    document.getElementById("timer").innerHTML = time;

    clearInterval(timer);

    timer = setInterval(() => {

        time--;

        document.getElementById("timer").innerHTML = time;

        if(time <= 0){

            clearInterval(timer);

            document.getElementById("answer").style.display =
            "block";

            document.getElementById("answer").innerHTML =
            "✅ " + window.questions[current].answer;

        }

    },1000);

}

async function nextQuestion(){

    await fetch(
    "https://funsaturdayquiz-default-rtdb.asia-southeast1.firebasedatabase.app/answers.json",
    {
        method:"DELETE"
    });

    document.getElementById("liveAnswers").innerHTML = "";

    current++;

    if(current >= window.questions.length){

        alert("Quiz Completed");

        current = 0;

    }

    loadQuestion();

}

window.startQuiz = startQuiz;
window.nextQuestion = nextQuestion;
