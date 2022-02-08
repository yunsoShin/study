
const rabbit=document.querySelector('.rabbit');
const rabbits_button=document.querySelector('.rabbits_button');
console.log(`page: ${rabbit.clientX},${rabbit.clientY}`)

rabbit.addEventListener('click' , () => {
  const rect = rabbit.getBoundingClientRect();
  console.log(rect);
  

})

rabbits_button.addEventListener('click' , () => {

  const y = 100;
  console.log("버튼을 눌렀습니다");

  scrollTo(0,392);
})






