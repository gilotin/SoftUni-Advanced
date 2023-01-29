function addItem() {
    let input = document.getElementById("newItemText").value;
    let ul = document.getElementById("items");
  
    let li = document.createElement("li");
  
    li.textContent = input;
    ul.appendChild(li);
    if(li.length === 0){
        return;
    }
  
    let button = document.createElement("a");
    let linkedText = document.createTextNode('[Delete]');
    button.appendChild(linkedText);
    button.href="#";

    li.appendChild(button);
    
    button.addEventListener("click", deleteItem);
  
    function deleteItem(){
        li.remove()
    }

  
    input = document.getElementById("newItemText").value = "";
  }