function addItem() {
    let newText = document.getElementById('newItemText').value;
   
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(newText));
    document.getElementById('items').appendChild(li)
    document.getElementById('newItemText').value = '';

}

