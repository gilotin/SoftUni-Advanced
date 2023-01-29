function listProcesor(array) {
  let result = [];
  functions = {
    add,
    remove,
    print,
  };

  array.forEach((el) => {
    let [command, string] = el.split(" ");
    return functions[command](string);
  });

  function add(string) {
    result.push(string);
  }
  function remove(string) {
    result = result.filter((el) => el !== string);
  }
  function print() {
    console.log(result.join(","));
  }
}

listProcesor(["add hello", "add again", "remove hello", "add again", "print"]);
