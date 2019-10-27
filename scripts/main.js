/**
 * The Engine of the Game.
 * This class has a process method that handles  user's input and processes it.
 *
 */

class GameEngine {
  choiceStack = ["rock", "paper", "scissors"];
  timesPlayed = 0;
  score = 0;

  /** This method handles the actual processing of the game
   *  It returns the result of the game
   *
   * @param {string} userChoice
   * @param {string} gameType
   */
  process(userChoice, gameType) {
    this.timesPlayed++;

    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = this.choiceStack[randomNum];

    let userStackIndex = this.choiceStack.indexOf(userChoice);

    /** A two dimensional array  */
    const results = [["t", "c", "u"], ["u", "t", "c"], ["c", "u", "t"]];

    /** dimensional array */
    let userResult;
    if (userStackIndex >= 0) {
      // The user entered a valid input
      userResult = results[userStackIndex][randomNum];

      /** Make an object to convert the final result to a sentence */
      const userResultMap = {
        t: "Tie",
        u: "You Win",
        c: "You Lose"
      };

      /** Make an object to convert the final result to a sentence suitable for a computer vs computer */
      const computerResultMap = {
        t: "Tie",
        u: "Computer 2 Win",
        c: "Computer 2 Lose"
      };
      let resultImage = `<img src="../images/${computerChoice}.jpeg"/>`;

      let finalResult;
      if (gameType == "humanvscomputer") {
        // The game is between human and computer
        finalResult = userResultMap[userResult];
        finalResult = this.modifyResult(finalResult);
        // finalResult = `<p>${userResultMap[userResult]}</p>`;

        finalResult += `<br/> ${resultImage}`;
        finalResult += ` <p style="font-size:15px;">Computer</p> `;
      } else {
        // The game is between computers
        finalResult = computerResultMap[userResult];
        finalResult = this.modifyResult(finalResult);
        finalResult += `<br/>  ${resultImage} 
        
        <p style="font-size:15px;" >Computer 1</p>
         <hr/>
        <img src="../images/${userChoice}.jpeg"/>
        <p style="font-size:15px;" >Computer 2</p>
        `;
      }

      if (finalResult.includes("Win")) {
        this.score++;
      }
      return finalResult;
    } else {
      return "Invalid input";
    }
  }
  modifyResult(finalResult) {
    if (finalResult.includes("Win")) {
      finalResult = `<p style="color:green">${finalResult}</p>`;
    } else if (finalResult.includes("Lose")) {
      finalResult = `<p style="color:red">${finalResult}</p>`;
    } else {
      finalResult = `<p style="color:grey">${finalResult}</p>`;
    }
    return finalResult;
  }
}
