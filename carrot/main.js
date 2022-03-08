'use strict';

const game__field = document.querySelector('.game__field');
const game_Btn = document.querySelector('.game_Btn');
const game__timer = document.querySelector('.game__timer');
const popup__refresh = document.querySelector('.popup__refresh');
const bug = document.querySelector('.bug');
const carrot = document.querySelector('.carrot');
const score = document.querySelector('.game__score');
const fieldRect = game__field.getBoundingClientRect();


function initGame() {
    console.log(fieldRect);
    addItem('carrot' , 5 , 'img/carrot.png');
    addItem('bug' , 5 , 'img/bug.png');
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
    score.innerHTML = count
}

function randomNumber(min,max){
    return Math.random()*(max - min)+min
}

game_Btn.addEventListener('click',()=>{
    
    game_Btn.setAttribute('class','game__stop');
    initGame();
    let time = 5;
    let timer = setInterval(function(){
        
            game__timer.innerHTML =`0:${time}`;
            time--
            console.log(time);
            if(time<0){
                replay();
                clearInterval(timer);
            }
        
    }, 1000)

})

function replay(){
    
};
