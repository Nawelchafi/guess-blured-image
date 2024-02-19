class Game {
    constructor(pics) {
        this.startScreen = document.getElementById("start-screen");
        this.gameEndScreen = document.getElementById("game-end");
        //this.this.pics = pics
        this.pics = pics
        this.score = 0
        this.hints = null
        this.currentLevel = 0
        this.usedIndex = []
        this.isGameOver = false;
    }
    uniqueGenerate () {

    }

   startGame() {
     let index;
     let randomPic;
    do {
        index = Math.floor(Math.random() * this.pics.length);
    } while (this.usedIndex.includes(index));

    randomPic = this.pics[index];
    this.usedIndex.push(index);
     console.log("used index list :", this.usedIndex)
     //uniqueGenerate ()
    // Create elements
    const image = document.createElement("img");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const checkButton = document.createElement("button");

    // Set attributes and content for the elements
    image.src = `./assets/${randomPic.img}`;
    label.textContent = "Enter your guess:";
    input.type = "text";
    checkButton.textContent = "Check Answer";


    // Add css classes to elements
    image.classList.add("game-image");
    label.classList.add("game-label");
    input.classList.add("game-input");
    checkButton.classList.add("check-button");
    const picContainer = document.getElementById("game-container");
    picContainer.innerHTML = ''
    // Append elements to the container and hide the start button
    document.getElementById('start-button').style.display = 'none';  
    picContainer.appendChild(image);
    picContainer.appendChild(document.createElement("br")); // Line break
    picContainer.appendChild(label);
    picContainer.appendChild(document.createElement("br"));
    picContainer.appendChild(input);
    picContainer.appendChild(document.createElement("br"));
    picContainer.appendChild(checkButton);
    checkButton.addEventListener("click", () => {
     
    this.checkGuess(input.value.toLowerCase(), index);
    });
}
    checkGuess(playerGuess,pictureIndex) {
    const correctAnswer = this.pics[pictureIndex].name.toLowerCase();
     if (playerGuess === correctAnswer) {
       //this.displayCaption()
       console.log("correct!")
       this.score ++
       console.log("your score is" , this.score)
        this.nextLevel()
        this.startGame()
      
     }
     else {
        this.end()
     }

}
    nextLevel() {
       if (this.score == 3){
       this.currentLevel++
        
    }
       else return
    }   
       end () {
        this.isGameOver = true
        console.log(this.isGameOver)
       }
     assignHints() {
        if (this.currentLevel === 1)  this.hints = 10
         else if (this.currentLevel === 2)  this.hints = 6
         else if (this.currentLevel === 3)  this.hints = 4
        
    }
     loseHints() {
        if (playerGuess !== correctAnswer)
        console.assert.log("hints now are" , this.hints)
        this.hints--
    }
    }

    
    

