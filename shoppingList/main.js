const delete__Btn = document.querySelector('.delete__Btn');
const Add__Btn = document.querySelector('.Add__Btn');
const items = document.querySelector('.items');
const Add__List = document.querySelector('#Add__List')

function onAdd() {
    const text = Add__List.value
    if(text ===  ''){
        Add__List.focus();
        return;
    }
    const item = createItem(text);
    items.appendChild(item);
    console.log(text);
    Add__List.value = '';
    Add__List.focus();
}

Add__Btn.addEventListener('click' , ()=>{
    onAdd();
})

function createItem(text){



    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item__row');
    
    const item = document.createElement('div')
    item.setAttribute('class','item');

    const name = document.createElement('span');
    name.setAttribute('class','item__name');
    name.innerText = text;

    const DBtn = document.createElement('button');
    DBtn.setAttribute('class','delete__Btn');
    DBtn.innerHTML = '❌';
    DBtn.addEventListener('click' , ()=>{
        items.removeChild(itemRow);
    })
    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class','item__divider');

    

    item.appendChild(name);
    item.appendChild(DBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    return itemRow;
}

Add__List.addEventListener('keypress' , (event) => {
    if(event.key === 'Enter'){
        onAdd();
    }
    console.log('key');
});