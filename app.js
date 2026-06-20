
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

        if (time <= 0) {

            clearInterval(timer);

            document.getElementById("answer").style.display = "block";

            document.getElementById("answer").innerHTML =
                "✅ " + window.questions[current].answer;

        }

    }, 1000);

}
```
