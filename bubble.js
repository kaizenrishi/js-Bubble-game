
var timer = 60;
var hitrn = 0;
var score = 0;

function makeBubble() {
    
var clutter = "" ;


for (var i = 1; i <=100; i++){
    var rn = Math.floor(Math.random()*10)
   clutter += ` <div class="bubble">${rn}</div>`;
}
document.querySelector("#pbottom").innerHTML = clutter;
}
makeBubble();   


function getNewHit() {
   hitrn =  Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
getNewHit();



function runTimer() {
   var time = setInterval(function(){
        if (timer>0) {
            timer--; 
            document.querySelector("#timerval").textContent = timer;
        }
        else
        {
            clearInterval(time);
            document.querySelector("#pbottom").innerHTML =`<h1>Game Over</h1>`;
        }
    },1000)
}
runTimer();



function increaseScore(){
    score ++    ;
    document.querySelector("#ScoreVal").textContent = score;
}
increaseScore();


document.querySelector("#pbottom")
.addEventListener("click",function (dets) {
   var clickedNum =  Number(dets.target.textContent);
    if (clickedNum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})


