function solve(input) {
  let info = {};
  for (let el of input) {
    let [town, townPopulation] = el.split(" <-> ");
    if (info.hasOwnProperty(town)) {
      info[town] += Number(townPopulation);
    } else {
      info[town] = Number(townPopulation);
    }
  }

  info = Object.entries(info);

  for(let [town,population] of info){
    console.log(`${town} : ${population}`)
  }
}
  solve([
    "Istanbul <-> 100000",
    "Honk Kong <-> 2100004",
    "Jerusalem <-> 2352344",
    "Mexico City <-> 23401925",
    "Istanbul <-> 1000"
  ]);

