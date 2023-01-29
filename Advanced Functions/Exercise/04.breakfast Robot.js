function solution() {
  let storage = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  let recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  return function action(input) {
    let taskHandler = commandHandler();
    let [command, option1, option2] = input.split(" ");
    return taskHandler[command](option1, option2);
  };

  function commandHandler() {
    return {
      restock: (microelement, quantity) => {
        quantity = Number(quantity);
        storage[microelement] += quantity;
        return "Success";
      },
      prepare: (recipe, quantity) => {
        let isDone = true;
        let output = "";
        let copyStore = JSON.parse(JSON.stringify(storage));
        for (let [key, value] of Object.entries(recipes[recipe])) {
          let neededValue = Number(quantity) * value;
          if (storage[key] < neededValue) {
            isDone = false;
            output = `Error: not enough ${key} in stock`;
            break;
          }
          copyStore[key] -= neededValue;
        }
        if (!isDone) {
          return output;
        }
        storage = copyStore;
        return "Success";
      },
      report: () => {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
      },
    };
  }
}
let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock

console.log("---------------------");
console.log(manager("restock flavour 50")); //Success
console.log(manager("prepare lemonade 4 ")); //Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); //Success
console.log("---------------------");

console.log(manager("restock flavour 10")); //Success
console.log(manager("prepare apple 1")); //Success
console.log(manager("restock fat 10")); //Success
console.log(manager("prepare burger 1")); //Success
console.log(manager("report")); //protein=0 carbohydrate=4 fat=3 flavour=55
