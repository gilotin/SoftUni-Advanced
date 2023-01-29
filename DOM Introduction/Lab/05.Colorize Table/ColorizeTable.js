function colorize() {
  let tableRows = document.querySelectorAll('table tr');

  for (let row = 0; row < tableRows.length; row++) {
    if (row % 2 === 1) {
      tableRows[row].style.background = "teal";
    }
  }
}
