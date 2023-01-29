class footballTeam {
  constructor(clubName, country, invitedPlayers) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    //footballPlayers ="{name}/{age}/{playerValue}"
    //["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]
    //playerValue is in MILIONS;
    for (let player of footballPlayers) {
      let [name, age, playerValue] = player.split("/");

      this.invitedPlayers.push({ name, age, playerValue });

      if (this.invitedPlayers.find((el) => el).name === name) {
        if (this.invitedPlayers.find((el) => el).playerValue < playerValue) {
          this.invitedPlayers.find((el) => el).playerValue = playerValue;
          this.invitedPlayers.pop();
        }
      }
    }
    let nameBuffer = '';
    for (let info of Object.entries(this.invitedPlayers)) {
      let name = info[1].name;
      nameBuffer += name + ', '
    }
    nameBuffer =  nameBuffer.substring(0,nameBuffer.length-2)

    return `You successfully invite ${nameBuffer.trim()}.`;
    
  }

  signContract(selectedPlayer) {
    // selectedPlayer = "{name}/{playerOffer}"

    let [playerName, playerOffer] = selectedPlayer.split("/");

    if (this.invitedPlayers.find((el) => el.name === playerName) === undefined) {
      throw new Error(`${playerName} is not invited to the selection list!`);
    } else {
      if (this.invitedPlayers.find((el) => el.name === playerName).playerValue > playerOffer) {
        let priceDifference =
          Number(this.invitedPlayers.find((el) => el.name === playerName).playerValue) -
          Number(playerOffer);
        throw new Error(`The manager's offer is not enough to sign a contract with ${playerName}, ${priceDifference} million more are needed to sign the contract!`);
      } else {
        this.invitedPlayers.find((el) => el.name === playerName).playerValue = "Bought";
        return `Congratulations! You sign a contract with ${playerName} for ${playerOffer} million dollars.`;
      }
    }
  }

  ageLimit(name, age) {
    let playerName = this.invitedPlayers.find((el) => el.name === name);
    let playerAge = this.invitedPlayers.find((el) => el.name === name).age;
    if (playerName === undefined) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    if (playerAge > age || playerAge === age) {
      return `${name} is above age limit!`;
    } else if (age - playerAge < 5) {
      return `${name} will sign a contract for ${age - playerAge} years with ${this.clubName} in ${
        this.country
      }!`;
    } else if (age - playerAge > 5) {
      return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
    }
  }

  transferWindowResult(){
    let buffer = []
    
    let sorted = this.invitedPlayers.sort((a,b)=>{
        return (a.name).localeCompare(b.name)
    });

    for(let info of this.invitedPlayers){
        buffer.push(`Player ${info.name}-${info.playerValue}`)
    }
    return `Players list:\n${buffer.join('\n').trim()}`
  }
}


let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
