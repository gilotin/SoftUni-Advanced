function townToJSON(input) {
  input.shift();
  let info = {};
  let result = [];

  for (let el of input) {
    let [town, latitude, longitude] = el.split(" | ");
    town = town.split("| ")[1];
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude.split(" |")[0]).toFixed(2);

    info = {
      Town: town,
      Latitude: Number(latitude),
      Longitude: Number(longitude),
    };
    result.push(info);
  }
  return JSON.stringify(result);
}

console.log(
  townToJSON([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
  ])
);
