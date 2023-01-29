function listProcessor(array) {
  let result = [];

  let executor = {
    add: (string) => {
      result.push(string);
    },
    remove: (string) => {
      result = result.filter((el) => el !== string);
    },
    print: () => {
      console.log(result.join(","));
    },
  };

  array.forEach((el) => {
    let [command, string] = el.split(" ");
    return executor[command](string);
  });
}

listProcessor(["add pesho", "add george", "add peter", "remove peter", "print"]);
listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
