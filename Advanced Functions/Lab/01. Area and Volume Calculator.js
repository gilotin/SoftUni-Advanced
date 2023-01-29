function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

function solve(area, vol, input) {
  input = JSON.parse(input);

  let result = [];

  for (let entry of input) {
    let calculatedArea = area.call(entry);
    let calculatedVolume = vol.call(entry);

    result.push({
      area: calculatedArea,
      volume: calculatedVolume,
    });
  }
  return result;
}

console.log(
  solve(
    area,
    vol,
    `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
  )
);
