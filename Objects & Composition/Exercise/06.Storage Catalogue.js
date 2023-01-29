function catalogue(input) {
  let result = {};
  input.sort((a, b) => {
    return a.localeCompare(b);
  });

  for (let i = 0; i < input.length; i++) {
    let startingIndex = input[i][0];
    product = input[i];
    if (!result.hasOwnProperty(startingIndex)) {
      result[startingIndex] = [];
    }
    result[startingIndex].push(product);
  }

  for (let [key, value] of Object.entries(result)) {
    console.log(key);
    for (let el of value) {
      let [name, price] = el.split(" : ");
      console.log(`  ${name}: ${price}`);
    }
  }
}
console.log(
  catalogue([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
  ])
);
