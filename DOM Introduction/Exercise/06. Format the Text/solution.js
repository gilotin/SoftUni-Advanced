function solve() {
  let text = document.getElementById("input").value;
  let output = document.getElementById("output");

  output.innerHTML = '';

  let textArr = text.split(".").filter(x => x.length > 0)

  for (let i = 0; i < textArr.length; i += 3) {
    let result = [];

    for (let x = 0; x < 3; x++) {
      if (textArr[i + x]) {
        result.push(textArr[i + x]);
      }
    }

    let resultSentence = result.join(".");

    output.innerHTML += `<p>${resultSentence}.</p>`;
  }
}
