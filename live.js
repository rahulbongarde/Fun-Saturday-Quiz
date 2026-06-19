```javascript
setInterval(async () => {

    try {

        const response = await fetch(
        "https://funsaturdayquiz-default-rtdb.asia-southeast1.firebasedatabase.app/answers.json"
        );

        const data = await response.json();

        if(!data) return;

        let html = "";

        const values = Object.values(data);

        values.sort((a,b)=>a.time-b.time);

        values.forEach(item=>{

            html += `
            <div style="
            background:white;
            padding:5px;
            margin:4px;
            border-radius:8px;
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
```
