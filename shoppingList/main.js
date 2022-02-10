const Add_listButton = document.querySelector('.Add_listButton');
const Add_ListBox = document.querySelector('#Add_ListBox');


addEventListener('load' , ()=>{

    Add_listButton.addEventListener('click' , ()=>{
        console.log("클릭!");
        console.log(Add_ListBox.value);
    
    });
});
