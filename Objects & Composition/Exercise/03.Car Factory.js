function carFactory(input) {
  let car = {};

  car.model = input.model;

  if (input.power <= 90) {
    car.engine = {
      power: 90,
      volume: 1800,
    };
  } else if (input.power <= 120) {
    car.engine = {
      power: 120,
      volume: 2400,
    };
  } else if (input.power <= 200) {
    car.engine = {
      power: 200,
      volume: 3500,
    };
  }

  if (input.carriage === "hatchback") {
    car.carriage = {
      type: "hatchback",
      color: input.color,
    };
  } else {
    car.carriage = {
      type: "coupe",
      color: input.color,
    };
  }

  function wheels() {
    let size = new Array(4);
    if (input.wheelsize % 2 === 0) {
      size.fill(input.wheelsize - 1);
      return size;
    } else {
      return size.fill(input.wheelsize);
    }
  }

  car.wheels = wheels();

  return car;
}

console.log(
  carFactory({ model: "Opel Vectra", power: 110, color: "grey", carriage: "coupe", wheelsize: 17 })
);

// ver 2.0 //

function carFactory(input) {
  let car = {};

  car.model = input.model;
  let engineEnum = {
    "Small engine": { power: 90, volume: 1800 },
    "Normal engine": { power: 120, volume: 2400 },
    "Monster engine": { power: 200, volume: 3500 },
  };

  if (input.power <= 90) {
    car.engine = engineEnum["Small engine"];
  } else if (input.power <= 120) {
    car.engine = engineEnum["Normal engine"];
  } else if (input.power <= 200) {
    car.engine = engineEnum["Monster engine"];
  }


  if (input.carriage === "hatchback") {
    car.carriage = {
      type: "hatchback",
      color: input.color,
    };
  } else {
    car.carriage = {
      type: "coupe",
      color: input.color,
    };
  }

  function wheels() {
    let size = new Array(4);
    if (input.wheelsize % 2 === 0) {
      size.fill(input.wheelsize - 1);
      return size;
    } else {
      return size.fill(input.wheelsize);
    }
  }

  car.wheels = wheels();

  return car;
}

console.log(
  carFactory({ model: "Opel Vectra", power: 110, color: "grey", carriage: "coupe", wheelsize: 17 })
);
