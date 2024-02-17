class Game {
    constructor(pics) {
        this.startScreen = document.getElementById("start-screen");
        this.gameEndScreen = document.getElementById("game-end");
        this.pics = pics 
        this.levels = 3
        this.currentLevel = 0
        this.isGameOver = false;
    }
    
    
   startGame() {
    const index = Math.floor(Math.random() * this.pics.length);
    console.log(index)
    const randomPic = this.pics[index];
    // Get a random picture from the pics array
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
       //this.displayCaption()s
       //this.nextpic()
       console.log("correct!")
       pics.splice(pictureIndex, 1)
       this.startGame()
       
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
        console.log(this.isGameOver)
       }
    }

    
    

