class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = {
      child: 150,
      student: 300,
      collegian: 500,
    };
    this.listOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    if (!this.priceForTheCamp.hasOwnProperty(condition)) {
      throw new Error("Unsuccessful registration at the camp.");
    }

    for (let el of this.listOfParticipants) {
      if (el.name === name) {
        return `The ${name} is already registered at the camp.`;
      }
    }

    for (let info of Object.entries(this.priceForTheCamp)) {
      if (info[0] === condition && info[1] > money) {
        return `The money is not enough to pay the stay at the camp.`;
      } else if (info[0] === condition && info[1] <= money) {
        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`;
      }
    }
  }

  unregisterParticipant(name) {
        
    let checkedName = this.listOfParticipants.find(el => el.name === name)

      if (checkedName === undefined) {
        throw new Error (`The ${name} is not registered in the camp.`);
      } else {
        this.listOfParticipants.splice(this.listOfParticipants.indexOf(checkedName), 1);
        return `The ${name} removed successfully.`;
      }
    
  }

  timeToPlay(typeOfGame, participant1, participant2) {
    let player1 = this.listOfParticipants.find((el) => el.name === participant1);
    let player2 = this.listOfParticipants.find((el) => el.name === participant2);
    if (typeOfGame === "WaterBalloonFights") {
      if (this.listOfParticipants.includes(participant1 && participant2)) {
        throw new Error(`Invalid entered name/s.`);
      } else {
        if (player1.condition !== player2.condition) {
         // throw new Error(`Choose players with equal condition.`);
        } else {
          if (player1.power > player2.power) {
            player1.wins = Number(player1.wins);
            player1.wins++;
            return `The ${participant1} is winner in the game ${typeOfGame}.`;
          } else if (player1.power < player2.power) {
            player2.wins = Number(player2.wins);
            player2.wins++;
            return `The ${participant2} is winner in the game ${typeOfGame}.`;
          } else {
            return `There is no winner.`;
          }
        }
      }
    } else {
      if (this.listOfParticipants.includes(participant1)) {
        throw new Error(`Invalid entered name/s.`);
      } else {
        player1.power = Number(player1.power);
        player1.power += 20;
        return `The ${participant1} successfully completed the game ${typeOfGame}.`;
      }
    }
  }

  toString() {
    let buffer = [];
    for (let el of this.listOfParticipants) {
      let info = `${el.name} - ${el.condition} - ${el.power} - ${el.wins}`;
      buffer.push(info);
    }
    return `${this.organizer} will take ${
      this.listOfParticipants.length
    } participants on camping to ${this.location} \n${buffer.join("\n").trim()}`;
  }
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

