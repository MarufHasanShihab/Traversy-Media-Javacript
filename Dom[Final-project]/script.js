// finding element 
const form = document.getElementById('addForm');
const itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);

// remove item
itemList.addEventListener('click', removeItem);


// add item function
function addItem(e){
    e.preventDefault();
    // new item
    const newItem = document.getElementById('item').value;
    // create new li element
    const li = document.createElement('li');
    li.classList = 'list-group-item';
    // add text noe with input value
    li.innerText = newItem;
    // create delete button element
    const deleteBtn = document.createElement('button');
    // add delete button classList
    deleteBtn.classList = "btn btn-danger btn-sm float-right delete";
    // add delete button text
    deleteBtn.innerText = "X";
    // append delte btn to li
    li.appendChild(deleteBtn);
    // append li to list
    itemList.appendChild(li);
}

// remove item function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}