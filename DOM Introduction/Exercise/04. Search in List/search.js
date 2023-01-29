// function search() {
//   let list = Array.from(document.querySelectorAll("ul li"));
//   let searchedText = document.getElementById("searchText").value;
//   let result = document.getElementById("result");
//   let counter = 0;

//   for (let el of list) {
//     let town = el.textContent;

//     if (town.includes(searchedText)) {
//       el.style.fontWeight = "bold";

//       el.style.textDecoration = "underline";
//       counter++;
//     }
//   }
//   result.textContent = `${counter} matches found`;
// }

function search() {
  let list = Array.from(document.querySelectorAll("ul li"));
  let searchedText = document.getElementById("searchText").value;
  let result = document.getElementById("result");
  let counter = 0;

  for (let i = 0; i < list.length; i++) {
    let town = list[i].textContent;
    if (town.includes(searchedText)) {
      list[i].style.fontWeight = "bold";

      list[i].style.textDecoration = "underline";
      counter++;
    }
  }
  result.textContent = `${counter} matches found`;
}
