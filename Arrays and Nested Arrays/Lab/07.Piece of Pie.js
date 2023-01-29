function solve(array, flavorOne, flavorTwo) {
  let starIndex = array.indexOf(flavorOne);
  let endIndex = array.indexOf(flavorTwo);
  let result = array.slice(starIndex, endIndex+1);
  console.log(result);
}

solve(
  ["Pumpkin Pie", "Key Lime Pie", "Cherry Pie", "Lemon Meringue Pie", "Sugar Cream Pie"],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);

solve(
  [
    "Apple Crisp",
    "Mississippi Mud Pie",
    "Pot Pie",
    "Steak and Cheese Pie",
    "Butter Chicken Pie",
    "Smoked Fish Pie",
  ],
  "Pot Pie",
  "Smoked Fish Pie"
);
