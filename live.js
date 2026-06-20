let alreadyWinner = false;

setInterval(async () => {

    try {

        const response = await fetch(
        "https://funsaturdayquiz-default-rtdb.asia-southeast1.firebasedatabase.app/answers.json"
        );

        const data = await response.json();

        if (!data) {

            document.getElementById("liveAnswers").innerHTML = "";

            alreadyWinner = false;

            return;
        }

        let html = "";

        const values = Object.values(data);

        values.sort((a,b)=>a.time-b.time);

        values.forEach(item => {

            html += `
            <div style="
            background:white;
            padding:10px;
            margin:5px;
            border-radius:10px;
            font-size:18px;">
            🏷️ ${item.name}
            (${item.team})
            ➜ ${item.answer}
            </div>
            `;

            if(
                !alreadyWinner &&
                item.answer.trim().toLowerCase() ===
                window.questions[current].answer
                .trim()
                .toLowerCase()
            ){

                alreadyWinner = true;

                document.getElementById("winner").innerHTML =
                "🏆 Winner : " +
                item.name +
                " (" + item.team + ")";

                if(item.team === "Team A"){

                    scoreA++;

                    document.getElementById("scoreA").innerHTML =
                    scoreA;

                }

                if(item.team === "Team B"){

                    scoreB++;

                    document.getElementById("scoreB").innerHTML =
                    scoreB;

                }

            }

        });

        document.getElementById("liveAnswers").innerHTML =
        html;

    }

    catch(error){

        console.log(error);

    }

},1000);
