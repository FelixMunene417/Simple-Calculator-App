let score=JSON.parse(localStorage.getItem('score'));
    if(!score) {
        score={
            wins: 0,
            loses: 0,
            ties: 0
        }
    }
    let computerMove='';
function pickComputerMove() {
    const randomNumber=Math.random();
    if(randomNumber>=0 && randomNumber<1/3) {
        computerMove='Rock';
    }
    else if (randomNumber>=1/3 && randomNumber<2/3) {
        computerMove='Paper';
    }
    else {
        computerMove='Scissors';
    }
    return computerMove
}

let result='';
function playGame(playerMove) {
    const computerMove=pickComputerMove();
    if(playerMove==='Rock') {
        if(computerMove==='Rock') {
            result='Its a tie';
        }
        else if(computerMove==='Paper') {
            result='You lose';
        }
        else {
            result='You win';
        }
    }
    else if (playerMove==='Paper') {
        if(computerMove==='Rock') {
            result='You win';
        }
        else if(computerMove==='Paper') {
            result='Its a tie';
        }
        else {
            result='You lose';
        }
    }
    else {
         if(computerMove==='Rock') {
            result='You lose';
        }
        else if(computerMove==='Paper') {
            result='You win';
        }
        else {
            result='Its a tie';
        }
    }
    if(result==='You win') {
        score.wins+=1;
    }
    else if(result==='You lose') {
        score.loses+=1;
    }
    else {
        score.ties+=1;
    }
    const playermove=document.querySelector('.Results');
    playermove.innerHTML=`
    <p style="font-style: italic;
    font-size: large;
    margin: 0;
    ">
    <b>RESULTS</b><br>
    Player Move: <b>${playerMove}</b>.</p>
    `;
    renderResults();
    return playerMove;

    }
function renderResults() {
    const Result=document.querySelector('.Results');
    Result.innerHTML+=`
    <p style="font-style: italic;
    font-size: large;
    margin: 0;
    ">Computer Move: <b>${computerMove}</b>.
    </p>
    <p style="font-style: italic;
    font-size: large;
    "><b>${result}</b></p>
    `;
    renderScore();
    localStorage.setItem('score',JSON.stringify(score));
}
function renderScore() {
    const Result=document.querySelector('.Results');
    Result.innerHTML+=`<p style="font-style: italic;
    font-size: x-large;
    " class="result-scrn">Wins: <b>${score.wins}</b>, Loses: <b>${score.loses}</b>, Ties: <b>${score.ties}</b></p>`
}
function resetScore() {
    localStorage.removeItem('score');
}

let isAutoplaying=false;
let intervalId;
function Autoplay() {
    autoBtnInnerText ();
    if(!isAutoplaying){
    intervalId=setInterval(()=>{
        const playerMove=pickComputerMove();
        playGame(playerMove);
    },1000);
    isAutoplaying=true;
    }
    else {
        clearInterval(intervalId);
        isAutoplaying=false;
    }
}
function autoBtnInnerText () {
    if(document.querySelector('.auto-btn').innerHTML==='Auto Play') {
        document.querySelector('.auto-btn').innerHTML='Stop Auto Play';
    }
    else {
        document.querySelector('.auto-btn').innerHTML='Auto Play';
    }
}
