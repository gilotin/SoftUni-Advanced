function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  table = Array.from(document.querySelectorAll("tbody  tr"));

  function onClick() {
  let searchedText = document.getElementById("searchField").value;

    for (let info of table) {
      let word = info.textContent;
      if (word.includes(searchedText)) {
        info.classList = "select";
      }else{
         info.classList.remove('select')
      }
    }
  }
}
