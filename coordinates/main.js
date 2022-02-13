const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load' , ()=>{
    const targetrect = target.getBoundingClientRect();
const targethalfwidth = targetrect.width / 2;
const targethalfheith = targetrect.height / 2;

console.log(targethalfheith);
console.log(targethalfwidth);


document.addEventListener('mousemove' , (event) => {
    const x = event.clientX;
    const y = event.clientY;
    
    console.log("move!");

    

    console.log(`page: ${event.clientX},${event.clientY}`)
    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;

    target.style.transform = `translate(${x-targethalfwidth}px,${y-targethalfheith}px)`;


    tag.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.innerHTML = `${x}px , ${y}px` ;

}) 

})