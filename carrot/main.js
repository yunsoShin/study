'use strict';

const game__field = document.querySelector('.game__field');
const game_Btn = document.querySelector('.game_Btn');
const game__timer = document.querySelector('.game__timer');
const popup__refresh = document.querySelector('.popup__refresh');
const bug = document.querySelector('.bug');
const carrot = document.querySelector('.carrot');
const game__score = document.querySelector('.game__score');
const fieldRect = game__field.getBoundingClientRect();
const bug__count = 5;
const carrot__count = 5;
const Game__Durattion = 5;
let gameStarted = false;
let score =0;
let timers =undefined;




function initGame() {
    game__field.innerHTML = '';
    addItem('carrot' , carrot__count , 'img/carrot.png');
    addItem('bug' , bug__count , 'img/bug.png');
}
function addItem(className, count ,imgPath){
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - 50;
    const y2 = fieldRect.height - 50;
    
    for(let i=0; i<count; i++){
        const item =document.createElement('img');
        item.setAttribute('src',imgPath);
        item.setAttribute('class',className);
        item.style.position = 'absolute';
        const x=randomNumber(x1,x2);
        const y=randomNumber(y1,y2);
        item.style.left=`${x}px`;
        item.style.top=`${y}px`;
        game__field.appendChild(item);
    }
    
}

function randomNumber(min,max){
    return Math.random()*(max - min)+min
}

game_Btn.addEventListener('click',()=>{

    if(gameStarted){
        stopGame();
        
    }
    else{
        startGame();
        
    }
    gameStarted =!gameStarted;
})

function startGame(){
    initGame();
    showStartgame();
    showTimerandScore();
    startTimer();
}
function showStartgame(){
    const icon = document.querySelector('.fa-circle-play');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play')


    
}

function stopGame(){
    console.log('시간초과');
    stopTimer();

    
}

function startTimer(){
    let sec = Game__Durattion%60;
    let min = Math.floor(Game__Durattion/60);
    timers=setTimeout(function Timer(){
        if(sec>=0){
            game__timer.innerHTML=`${min}:${sec}`;
            setTimeout(Timer,1000);
            sec--;
        }
        else{
            stopTimer();
            return;
        }
        
    },0);
}
function stopTimer(){
    clearTimeout(timers);
    
}

function showTimerandScore(){
    game__timer.style.visibility = 'visible';
    game__score.style.visibility = 'visible';
    game__score.innerHTML = score
    
}