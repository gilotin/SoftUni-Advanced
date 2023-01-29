function circleArea(input) {
    let typeOf = typeof(input);

  if (typeOf === 'number') {
    let area = Math.PI * Math.pow(input, 2);
    console.log(area.toFixed(2));
  } else {
    console.log(`We can not calculate the circle area, because we receive a ${typeOf}.`);
  }
}
circleArea(5);
circleArea("name");
