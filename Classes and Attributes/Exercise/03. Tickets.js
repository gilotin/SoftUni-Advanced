function ticketReport(array, command) {
  let result = [];

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }

  for (let info of array) {
    let [destination, price, status] = info.split("|");

    let currentTicket = new Ticket(destination, price, status);
    result.push(currentTicket);
  }

  let sortedArray = result.sort((a, b) => {
    if (command === "price") {
      return a[command] - b[command];
    } else {
      return a[command].localeCompare(b[command]);
    }
  });

  return sortedArray;
}
console.log(
  ticketReport(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "status"
  )
);
