function deleteByEmail() {
  let table = document.querySelectorAll("#customers tr td:nth-child(2)");
  let searchedElement = document.querySelector("label input").value;

  for (let el of table) {
    if (el.textContent === searchedElement) {
      let row = el.parentNode;
      row.parentNode.removeChild(row);
      document.getElementById("result").textContent = "Deleted.";
      return;
    }
  }
  document.getElementById("result").textContent = "Not found.";
}
