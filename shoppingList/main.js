const Add_listButton = document.querySelector('.Add_listButton');
const Add_ListBox = document.querySelector('#Add_ListBox');
const List = document.querySelector('.List');


addEventListener('load' , ()=>{
    Add_listButton.addEventListener('click' , ()=>{
        const temp = document.createElement('li');
        const ListButton = document.createElement('button');
        const DeleteText =  document.createTextNode('삭제');
        temp.innerHTML = Add_ListBox.value;
        List.appendChild(temp);
        ListButton.innerHTML = DeleteText.nodeValue;
        
        List.appendChild(ListButton);
        

        })



    })

