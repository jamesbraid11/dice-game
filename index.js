// in order for Prompt to work on Js you have to install
//  npm i prompt prompt-sync
prompt = require("prompt-sync")();

class Player {
  constructor(name, result) {
    this.name = name || prompt("Please enter your name: ");
  }

  introduce() {
    console.log(`Hi! Welcome to this Dice Game, ${this.name}`);
  }
}

class HumanPlayer extends Player {
  constructor(name, result) {
    super(name, result);
  }
  rollDice() {
    prompt("Enter 'go' to roll the dice: ").toLowerCase();
    let result = Math.floor(Math.random() * 6) + 1;
    this.result = result;
    console.log(`${this.name} has rolled ${this.result}`);
  }
}

class ComputerPlayer extends Player {
  constructor(name, result) {
    super((name = "Computer"), result);
  }

  computerRoll() {
    console.log(`it is now ${this.name}'s Turn`);
    console.log(`${this.name} is now Rolling`);
  }
  rollDice() {
    let result = Math.floor(Math.random() * 6) + 1;
    this.result = result;
    console.log(`${this.name} has rolled ${this.result}`);
  }
}

class Game {
  constructor(humanScore, computerScore, rounds) {
    this.humanScore = humanScore;
    this.computerScore = computerScore;
    this.rounds = rounds;
  }

  winner(humanPlayer, computerPlayer) {
    const human = humanPlayer.result;
    const computer = computerPlayer.result;
    if (human === computer) {
      console.log("Game has ended in a Draw");
      return "draw";
    } else if (human > computer) {
      this.humanScore++;
      console.log("Player wins");
      return humanPlayer.name;
    } else {
      this.computerScore++;
      console.log("Sorry, Computer Wins");
      return computerPlayer.name;
    }
  }

  play() {
    let rounds = prompt(
      "Please choose how many rounds you would like to play - 1, 2 or 3: "
    );

    while (!["1", "2", "3"].includes(rounds)) {
      prompt("Please enter only 1, 2 or 3: ");
    }

    if (rounds === "1") {
      this.rounds = 1;
    } else if (rounds === "2") {
      this.rounds = 2;
    } else if (rounds === "3") {
      this.rounds = 3;
    }

    for (let i = 0; i < this.rounds; i++) {
      console.log(`Round ${i + 1}`);
      human.rollDice();
      computer.computerRoll();
      computer.rollDice();

      this.winner(human, computer);
    }

    console.log("Final Score:");
    console.log(`Player: ${this.humanScore}\nComputer: ${this.computerScore}`);
    if (this.humanScore > this.computerScore) {
      console.log(
        "//////////////// \nCongrats friend, you win!\n////////////////"
      );
    } else if (this.humanScore < this.computerScore) {
      console.log(
        "//////////////// \nUnlucky friend, Computer wins!\n////////////////"
      );
    } else {
      console.log("//////////////// \nIt's a draw!\n////////////////");
    }

    let restartGame = prompt(
      "Would you like to play again? (yes / no): "
    ).toLowerCase();
    const newGameChoices = ["yes", "y", "no", "n"];
    while (!newGameChoices.includes(restartGame)) {
      restartGame = prompt(
        "invalid choice, please type yes or no: "
      ).toLowerCase();
    }
    if (restartGame === "yes" || restartGame === "y") {
      playGame();
    } else if (restartGame === "no" || restartGame === "n") {
      console.log("Whatevs, bruv. See ya!");
      process.exit();
    }
  }
}

const human = new HumanPlayer();
human.introduce();

const computer = new ComputerPlayer();


function playGame() {
  const game = new Game(0, 0, "");
  game.play();
}

// Start the game
playGame();
