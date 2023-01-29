function lowestPrice(input) {
  let result = {};
  for (let line of input) {
    let [townName, product, price] = line.split(" | ");
    price = Number(price);
    if (!result.hasOwnProperty(product)) {
      result[product] = {
        price,
        townName,
      };
    } else {
      if (price < result[product].price) {
        result[product] = {
          price,
          townName,
        };
      } else {
        continue;
      }
    }
  }

  for (let [product, object] of Object.entries(result)) {
    console.log(`${product} -> ${object.price} (${object.townName})`);
  }
}

lowestPrice([
  //"Sofia City | Audi | 100000",
  "Sofia City | BMW | 100000",
  //"Sofia City | Mitsubishi | 10000",
  //"Sofia City | Mercedes | 10000",
  //"Sofia City | NoOffenseToCarLovers | 0",
  //"Mexico City | Audi | 1000",
  "Mexico City | BMW | 99999",
  //"Mexico City | Mitsubishi | 10000",
  //"New York City | Mitsubishi | 1000",
  //"Washington City | Mercedes | 1000",
]);
