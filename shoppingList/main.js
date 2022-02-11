const Add_listButton = document.querySelector('.Add_listButton');
const Add_ListBox = document.querySelector('#Add_ListBox');
const List = document.querySelector('.List');


addEventListener('load' , ()=>{
    Add_listButton.addEventListener('click' , ()=>{
        const temp = document.createElement('li');
        const Delete_button=document.createElement('button');
        const Check_button = document.createElement('button');

        temp.innerHTML = Add_ListBox.value;

        Delete_button.innerHTML = "❌";
        Check_button.innerHTML = "☑️";
        Delete_button.addEventListener('click' , (event)=>{
            const reMoving = event.target;
            

        })
        temp.appendChild(Check_button);
        temp.appendChild(Delete_button);
        List.appendChild(temp);

        
        

        })



    })

