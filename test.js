function solve(input) {
    let students = JSON.parse(input);
    let htmlText = ['<table>'];
    let objNames = students[0];
  
    htmlText.push(makeKeyRow(objNames));
    students.forEach(obj => htmlText.push(makeValueRow(obj)));
    htmlText.push('</table>');
    console.log(htmlText);
    
    function makeKeyRow(arr) {
      let keys = [];
      Object.keys(arr).forEach(key => {
        keys.push(`<th>${escapeHTML(key)}</th>`);
      });
      return ("<tr>" + keys.join('') + "</tr>");
    }
  
    function makeValueRow(obj) {
      let rows = [];
      Object.values(obj).forEach(value => {
        rows.push(`<td>${escapeHTML(value)}</td>`);
      });
      return ("<tr>" + rows.join('') + "</tr>");
    }
  
    function escapeHTML(value) {
      return value
        .toString()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }
  
    //console.log(htmlText.join('\r\n'));
  }
  
  solve(`[{"Name":"Pesho",
  "Score":4,
  " Grade":8},
  {"Name":"Gosho",
  "Score":5,
  " Grade":8},
  {"Name":"Angel",
  "Score":5.50,
  " Grade":10}]`
  )