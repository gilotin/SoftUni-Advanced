function generateReport() {
    let tableRow = document.querySelectorAll("tbody tr");
  let tableHeader = document.querySelectorAll("thead tr th");
  let res = [];

  for (let i = 0; i < tableRow.length; i++) {
        let tableData = tableRow[i].cells;
        let tempData = {};
    for (let z = 0; z < tableData.length; z++) {
      let infoHeader = tableHeader[z].childNodes;
      if (infoHeader[1].checked === true) {
        tempData[infoHeader[0].textContent.trim().toLowerCase()] = tableData[z].textContent;
      }
    }
    res.push(tempData);
  }
  let jsonRes = JSON.stringify(res);
  document.getElementById("output").textContent = jsonRes;
}