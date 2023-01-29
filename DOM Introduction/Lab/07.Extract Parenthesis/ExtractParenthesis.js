function extract(content) {
  let elementText = document.getElementById(content).textContent;
  let regex = /\(([^)]+)\)/g;
  let result = [];

  let matches = elementText.matchAll(regex);

  for (let text of matches) {
    result.push(text[1]);
  }

  return result.join('; ')
}
