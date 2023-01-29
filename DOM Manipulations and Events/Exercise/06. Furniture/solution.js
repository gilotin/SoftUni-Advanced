function solve() {
  let buttons = document.querySelectorAll("button");

  buttons[0].addEventListener("click", genetare);
  buttons[1].addEventListener("click", buy);

  function genetare() {
    let currentItems = JSON.parse(document.querySelectorAll("textarea")[0].value);
    let tableBody = document.getElementsByTagName("tbody")[0];
    for (let item of currentItems) {
      let tableRow = document.createElement("tr");
      tableRow.innerHTML = `<td><img src="${item.img}"></td>`+
                           `<td><p>${item.name}</p></td>`+
                           `<td><p>${item.price}</p></td>`+
                           `<td><p>${item.decFactor}</p></t>`+
                           `<td><input type ="checkbox"></t>`;
      tableBody.appendChild(tableRow);
    }
  }

  let result = [];
  function buy() {
    let resultArea = document.querySelectorAll("textarea")[1];
    let table = Array.from(document.querySelectorAll("tbody tr"));
    for (let el of table) {
      if (el.querySelector("input[type=checkbox]:checked")) {
        let tableData = Array.from(el.querySelectorAll("td"));
        let info = {
          name: tableData[1].textContent,
          price: tableData[2].textContent,
          decFactor: tableData[3].textContent,
        };
      result.push(info);

      }

    }
    let names = "";
    let totalPrice = 0;
    let decFactor = 0;
    for (let i = 0; i < result.length; i++) {
      let item = result[i];
      let sep = i == result.length - 1 ? "" : ", ";
      names += item.name + sep;
      totalPrice += Number(item.price);
      decFactor += Number(item.decFactor);
    }
    decFactor /= result.length;
    resultArea.value = `Bought furniture: ${names}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactor}`;
  }
}
