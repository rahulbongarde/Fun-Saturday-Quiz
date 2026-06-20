setInterval(async () => {

    try {

        const response = await fetch(
        "https://funsaturdayquiz-default-rtdb.asia-southeast1.firebasedatabase.app/answers.json"
        );

        const data = await response.json();

        if (!data) {
            document.getElementById("liveAnswers").innerHTML = "";
            return;
        }

        let html = "";

        const values = Object.values(data);

        values.sort((a,b)=>b.time-a.time);

        // फक्त शेवटची 5 answers दाखवेल
        const latest = values.slice(0,5);

        latest.forEach(item => {

            html += `
            <div style="
            background:white;
            padding:8px;
            margin:5px;
            border-radius:10px;
            font-size:18px;">
            🏷️ ${item.name}
            (${item.team})
            ➜ ${item.answer}
            </div>
            `;

        });

        document.getElementById("liveAnswers").innerHTML = html;

    }

    catch(error){

        console.log(error);

    }

},2000);
