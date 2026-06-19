let time=10;

function startTimer(){

time=10;

let x=setInterval(()=>{

document.getElementById("timer").innerHTML=time;

time--;

if(time<0){

clearInterval(x);

document.getElementById("answer").style.display="block";

}

},1000);

}
