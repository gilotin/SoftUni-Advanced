function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  let result = [];

  function onClick() {
    let data = JSON.parse(document.getElementById("inputs").children[1].value);
    let bestRestoraunt = document.getElementById("bestRestaurant").children[1];
    let bestWorker = document.getElementById("workers").children[1];

      for (let info of data) {
         let [restoraunt, workersInfo] = info.split(" - ");

         if (!result.find((e) => e.restoraunt === restoraunt)) {
         result.push({ restoraunt, avgSalary: 0, bestSalary: 0, sumSalary: 0, workerList: [] });
         }

         let currentRestoraunt = result.find((e) => e.restoraunt === restoraunt);

         workersInfo = workersInfo && workersInfo.split(", ");

         for (let currentWorker of workersInfo) {
         updateRestoraunt(currentRestoraunt, currentWorker);
         }
      }

      let sortResult = result.sort((a, b) => {
         return b.avgSalary - a.avgSalary;
      })[0];

      bestRestoraunt.textContent = `Name: ${
         sortResult.restoraunt
      } Average Salary: ${sortResult.avgSalary.toFixed(
         2
      )} Best Salary: ${sortResult.bestSalary.toFixed(2)}`;

      let sortedWorkers = sortResult.workerList.sort((a, b) => {
         return b.salary - a.salary;
      });

      let buff = "";

      for (let worker of sortedWorkers) {
         buff += `Name: ${worker.name} With Salary: ${worker.salary} `;
      }
      bestWorker.textContent += buff;
  }

  function updateRestoraunt(obj, worker) {
      let [name, salary] = worker.split(" ");
      salary = Number(salary);
      obj.sumSalary += Number(salary);
      if (obj.bestSalary < salary) {
         obj.bestSalary = salary;
      }

      obj.workerList.push({
         name,
         salary,
      });

      obj.avgSalary = obj.sumSalary / obj.workerList.length;
   }
}
