/**
 * The class is for human vs computer player game
 */

class PlayerVSComputer {
  gameEngine = new GameEngine();
   

  play(choice) {
    console.log(choice);
    this.controlButtons(choice);

    let finalResult = this.gameEngine.process(choice, "humanvscomputer");
    document.getElementById("result-div").innerHTML = finalResult;
    document.getElementById("times").innerText =
      "Counts: " + this.gameEngine.timesPlayed;
    document.getElementById("score").innerText =
      "Wins: " + this.gameEngine.score;
  }

  playAgain() {
    document.getElementById("rock").hidden = false;
    document.getElementById("scissors").hidden = false;
    document.getElementById("paper").hidden = false;

    
    document.getElementById("rock1").hidden = true;
    document.getElementById("scissors1").hidden = true;
    document.getElementById("paper1").hidden = true;
  }
  controlButtons(choice){
    if (choice == "paper") {
      document.getElementById("paper1").hidden = false;
      document.getElementById("paper").hidden = true;
      document.getElementById("rock").hidden = true;
      document.getElementById("scissors").hidden = true;
    }
    if (choice == "rock") { 
      document.getElementById("rock1").hidden = false;
      document.getElementById("rock").hidden = true;
      document.getElementById("paper").hidden = true;
      document.getElementById("scissors").hidden = true;
    }
    if (choice == "scissors") {
      document.getElementById("scissors1").hidden = false;
      document.getElementById("scissors").hidden = true;
      document.getElementById("rock").hidden = true;
      document.getElementById("paper").hidden = true;
    }
  }
}

let game = new PlayerVSComputer();
