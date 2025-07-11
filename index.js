// in order for Prompt to work on Js you have to install
//  npm i prompt prompt-sync
prompt = require("prompt-sync")();

class Player {
  constructor(name, result) {
    this.name = prompt("PLease enter your name : ");
  }

  introduce() {
    console.log(`Hi Welcome to this Dice Game ${this.name} `);
  }
}

class HumanPlayer extends Player {
  constructor(name, result) {
    super(name, result);
  }
  rollDice() {
    prompt("Enter 'go' to roll the dice: ").toLowerCase();
    const result = Math.floor(Math.random() * 7);
    this.result = result;
    console.log(`${this.name} has rolled ${this.result}`);
  }
}

class ComputerPlayer extends Player {
  constructor(name = "Computer", choice) {
    super(name, choice);
  }
  rollDice() {
    const result = Math.floor(Math.random() * 7);
    this.result = result;
    console.log(`${this.name} has rolled ${this.result}`);
  }
}
