'use strict';

const game__field = document.querySelector('.game__field');
const gmae_Btn = document.querySelector('.gmae_Btn');
const game__timer = document.querySelector('.game__timer');
const popup__refresh = document.querySelector('.popup__refresh');
const bug = document.querySelector('.bug');
const carrot = document.querySelector('.carrot');




const fieldRect = game__field.getBoundingClientRect();


function initGame() {


    console.log(fieldRect);
    addItem('carrot' , 5 , 'img/carrot.png');
    addItem('bug' , 5 , 'img/bug.png');
    /*
    const carrotSRC =document.createElement('img');
    carrotSRC.setAttribute('src','img/carrot.png');
    carrotSRC.setAttribute('class','carrot');
    //carrotSRC.innerHTML = 'img/carrot.png';//

    const bugSRC = document.createElement('img');
    bugSRC.setAttribute('src','img/bug.png');
    bugSRC.setAttribute('class','bug');


    game__field.appendChild(carrotSRC);
    game__field.appendChild(bugSRC);
    
    const bugRECT = bugSRC.getBoundingClientRect();
    */
    


}
function addItem(className, count ,imgPath){
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width;
    const y2 = fieldRect.height;
    
    for(let i=0; i<count; i--){
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
    return Math.random()*(max - min)+min;
}

initGame();
