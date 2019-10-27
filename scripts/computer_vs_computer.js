/**
 * This class is for computer vs computer game type
 */

 class ComputerVsComputer {
  choiceStack = ["rock", "paper", "scissors"];
  gameEngine = new GameEngine();

  play() {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = this.choiceStack[randomNum];

    let finalResult = this.gameEngine.process(computerChoice);
    document.getElementById("result-div").innerHTML = finalResult;
    document.getElementById("times").innerText =
      "Counts: " + this.gameEngine.timesPlayed;
    document.getElementById("score").innerText =
      "Wins: " + this.gameEngine.score;
  }
}

let computerPlayer = new ComputerVsComputer();
