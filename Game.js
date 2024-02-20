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
       picContainer.style.display = 'none'
       const imageSrc = this.pics[pictureIndex].src;
       console.log(imageSrc)
       const captionText = this.pics[pictureIndex].caption;
       const imgElement = document.getElementById('pic');
        imgElement.src = imageSrc;

  const captionElement = document.getElementById('caption').querySelector('p');
  captionElement.textContent = captionText;

  const containerElement = document.getElementById('pic-caption-container');
  containerElement.style.display = 'grid'; // Display the container

  // Hide the container after 5 seconds
  setTimeout(() => {
    containerElement.style.display = 'none';
    picContainer.style.display= 'initial'  }, 5000);
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
     loseHints() {
        if (playerGuess !== correctAnswer)
        console.assert.log("hints now are" , this.hints)
        this.hints--
    }
    }

// plan for tomorrow 
// create a caption div  with a display none once correct answer display it
// use set timout to dosiplay that screen only for 5 seconds with ability of 
//clicking skip bottton to end its display 
//use animation 
// the caption div will be like pic with no blur on the left 
//and caption on the right scip down middle 
// use great fonts 
    
    

