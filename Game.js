class Game {
    constructor(player,levels,pics) {
        this.startScreen = document.getElementById("start-screen");
        this.gameEndScreen = document.getElementById("game-end");
        this.pics = pics 
        this.player = new Player (level,hints)
        this.levels = levels
        this.currentLevel = 0
        this.isGameOver = false;
    }
    
   startGame() {
    // Clear the start screen content
    this.startScreen.innerHTML = "";

    // Get a random picture from the pics array
    const index = Math.floor(Math.random() * this.pics.length);
    const randomPic = this.pics[index];

    // Create elements
    const picContainer = document.getElementById("game-container");
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

    // Append elements to the container
    picContainer.innerHTML = ""; // Clear previous content
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
       //this.nextpic()
       console.log("correct!")
     }
     else {
        this.end()
     }

}
    nextLevel() {
       if (this.currentLevel<this.levels)
       this.currentLevel++
       else this.end()
    }   
       end () {
        this.isGameOver = true
       }
    }

    
    

