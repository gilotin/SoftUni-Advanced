function addItem() {
  let inputText = document.getElementById("newItemText");
  let inputValue = document.getElementById("newItemValue");
  let menu = document.getElementById("menu");

  let li = document.createElement("option");

  li.textContent = inputText.value;
  li.value = inputValue.value;
   menu.appendChild(li);

  inputText.value = "";
  inputValue.value = "";
}
