function argumentInfo(...input) {
  let result = {};

  for (let el of input) {
    let type = typeof(el);
    console.log(`${type}: ${el}`);

    if (!result.hasOwnProperty(type)) {
      result[type] = 0;
    }

    result[type] = result[type] + 1;
  }
  let buffer = "";

  for (let [type, count] of Object.entries(result)) {
    buffer += `${type} = ${count}\n`;
  }
  console.log(buffer);
}


argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
