const Add_listButton = document.querySelector('.Add_listButton');
const Add_ListBox = document.querySelector('#Add_ListBox');
const List = document.querySelector('.List');


addEventListener('load' , ()=>{
    
    
    
    Add_listButton.addEventListener('click' , ()=>{
        const temp = document.createElement('li');
        temp.innerHTML = Add_ListBox.value;
        List.appendChild(temp);
        

        

    
    })
});
