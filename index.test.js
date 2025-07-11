const { Player, HumanPlayer, ComputerPlayer } = require("./index.js");

describe("Player Class", () => {
  it("should set player name", () => {
    const player = new Player("Alice");
    expect(player.name).toBe("Alice");
  });

  it("introduce() should return correct message", () => {
    const player = new Player("Bob");
    expect(player.introduce()).toBe("Hi! Welcome to this Dice Game, Bob");
  });
});

describe("HumanPlayer Class", () => {
  it("should roll a number between 1 and 6", () => {
    const human = new HumanPlayer("Alice");
    const roll = human.rollDice();
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(6);
  });
});

describe("ComputerPlayer Class", () => {
  it('should always have name "Computer"', () => {
    const computer = new ComputerPlayer();
    expect(computer.name).toBe("Computer");
  });

  it("computerRoll() should return roll message", () => {
    const computer = new ComputerPlayer();
    expect(computer.computerRoll()).toBe("Computer is now rolling");
  });
});
