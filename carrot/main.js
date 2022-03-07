const game__field = document.querySelector('.game__field');
const gmae_Btn = document.querySelector('.gmae_Btn');
const game__timer = document.querySelector('.game__timer');
const popup__refresh = document.querySelector('.popup__refresh');
const bug = document.querySelector('.bug');
const carrot = document.querySelector('.carrot');




const fieldRect = game__field.getBoundingClientRect();

function initGame() {


    console.log(fieldRect);

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
    console.log(bugRECT);


}

initGame();