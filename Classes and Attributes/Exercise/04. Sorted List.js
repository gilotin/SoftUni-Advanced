class List {
  constructor() {
    this.list = [];
    this.size = 0;
  }

  add(element) {
    this.list.push(element);
    this.list.sort((a, b) => a - b);
    this.size++;
  }

  remove(index) {
    if (index >= 0 && index < this.list.length) {
      this.list.splice(index, 1);
      this.size--;
    } else {
      throw Error("Index out of reach");
    }
  }

  get(index) {
    if (index >= 0 && index < this.list.length) {
      return this.list[index];
    } else {
      throw Error("Index out of reach");
    }
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
