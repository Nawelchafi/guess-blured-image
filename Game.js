class Game {
    constructor(pics) {
        this.startScreen = document.getElementById("start-screen");
        this.gameEndScreen = document.getElementById("game-end");
        this.picContainer = document.getElementById("game-container")
        //this.this.pics = pics
        this.pics = pics
        this.score = 0
        this.hints = null
        this.currentLevel = 0
        this.usedIndex = []
        this.isGameOver = false;
        this.blurPercentage = null
        

    }
   startGame() {
     this.blurPercentage = 10 
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
    label = "Enter your guess:";
    input.type = "text";
    checkButton.textContent = "Check Answer";


    // Add css classes to elements
    image.classList.add("game-image");
    label.classList.add("game-label");
    input.classList.add("game-input");
    checkButton.classList.add("check-button");
    this.picContainer.innerHTML = ''
    // Append elements to the container and hide the start button
    document.getElementById('start-button').style.display = 'none';  
    this.picContainer.appendChild(image);
    this.picContainer.appendChild(document.createElement("br")); // Line break
    this.picContainer.appendChild(label);
    this.picContainer.appendChild(document.createElement("br"));
    this.picContainer.appendChild(input);
    this.picContainer.appendChild(document.createElement("br"));
    this.picContainer.appendChild(checkButton);
    const imageElement = document.querySelector(".game-image");
    imageElement.addEventListener("click", () => {
      this.reduceBlur();
      //this.decreaseHints();
      
    });
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
       this.picContainer.style.display = 'none'
       const imageSrc =`./assets/${this.pics[pictureIndex].img}`
       const captionText = this.pics[pictureIndex].caption;
       const imgElement = document.getElementById('pic');
        imgElement.src = imageSrc;

  const captionElement = document.getElementById('caption');
  captionElement.textContent += captionText;

  const containerElement = document.getElementById('pic-caption-container');
  containerElement.style.display = 'grid'; // Display the container

  // Hide the container after 5 seconds
  setTimeout(() => {
    containerElement.style.display = 'none';
    this.picContainer.style.display= 'flex'  }, 5000);
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
        if (this.score == 10 ) {}// won screen
        else {}  //loosing screen and dsiplaying the correct value
       }
     assignHints() {
        if (this.currentLevel === 1)  this.hints = 10
         else if (this.currentLevel === 2)  this.hints = 6
         else if (this.currentLevel === 3)  this.hints = 4
        
    }
     decreaseHints() {
         this.hints--;
         console.log(`Hints left: ${this.hints}`);
       
    }
    reduceBlur() {
      const imageElement = document.querySelector(".game-image");
      this.blurPercentage -= 2; // Reduce blur 
      imageElement.style.filter = `blur(${this.blurPercentage}px)`
    
  }

 
    ;
  
      
    }

// plan for tomorrow 
// create a caption div  with a display none once correct answer display it
// use set timout to dosiplay that screen only for 5 seconds with ability of 
//clicking skip bottton to end its display 
//use animation 
// the caption div will be like pic with no blur on the left 
//and caption on the right scip down middle 
// use great fonts 
    
    

