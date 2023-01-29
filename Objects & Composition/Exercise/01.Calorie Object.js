function calories(array) {
  let result = {};
  for (let i = 0; i < array.length; i += 2) {
    let food = array[i];
    let quantity = Number(array[i + 1]);
    result[food] = quantity;
  }
  console.log(result);
}
calories(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
