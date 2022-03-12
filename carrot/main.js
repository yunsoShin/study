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
const popup__message=document.querySelector('.pop-up__message');
const popup = document.querySelector('.pop-up');
let gameStarted = false;
let score =5;
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
        item.addEventListener('click',()=>{
            if(item.className === 'carrot'){
                game__field.removeChild(item);
                game__score.innerHTML = --score
                if(score===0){
                    Tosucceed();
                }
            }
            if(item.className === 'bug'){
                Tofail();
            }
            
                
        })
    }
    
    
}

function Tofail(){
    game__field.innerHTML = '';
    popup__message.innerHTML = 'fail'
    stopGame();
    
}

function Tosucceed(){
    stopTimer();
    game__field.innerHTML = '';
    popup__message.innerHTML = 'To succeed!';
    popup.classList.remove('pop-up--hide');
    hidegamebtn();
    refresh();
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
    icon.classList.remove('fa-play');
}

function refresh(){
    popup__refresh.addEventListener('click',()=>{
        gameStarted=false;
        game_Btn.style.visibility='visible';
        popup.classList.add('pop-up--hide');
        score=carrot__count;
        let Timesec=Game__Durattion;
        startGame();
});
}


function stopGame(){
    
    stopTimer();
    hidegamebtn();
    refresh();


    

    
}
function hidegamebtn(){
    game_Btn.style.visibility='hidden';
    popup.classList.remove('pop-up--hide');

}


function startTimer(){
    let Timesec=Game__Durattion;
    updateSec(Timesec);
    timers=setInterval(()=>{
        if(Timesec>0){
            updateSec(--Timesec)
        }
        else{
            clearInterval(timers);
            Tofail();
            return;
        }
    },1000);
}


function updateSec(time){
    let sec = time%60;
    let min = Math.floor(time/60);
    game__timer.innerHTML=`${min}:${sec}`;
}







function stopTimer(){
    clearInterval(timers);
}



function showTimerandScore(){
    game__timer.style.visibility = 'visible';
    game__score.style.visibility = 'visible';
    game__score.innerHTML = score

    
}