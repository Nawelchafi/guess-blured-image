class Game {
    constructor(pics) {
        this.startScreen = document.getElementById("start-screen");
        this.picContainer = document.getElementById("game-container");
        this.pics = pics;
        this.score = 0;
        this.hints = null;
        this.currentLevel = 0;
        this.usedIndex = [];
        this.isGameOver = false;
        this.blurPercentage = null;
        this.timer = null;
    }

    startGame() {
      
        this.blurPercentage = 10;
        let index;
        let randomPic;
        do {
            index = Math.floor(Math.random() * this.pics.length);
        } while (this.usedIndex.includes(index));

        randomPic = this.pics[index];
        this.usedIndex.push(index);
        console.log("used index list :", this.usedIndex);

        const image = document.createElement("img");
        const label = document.createElement("label");
        const input = document.createElement("input");
        const checkButton = document.createElement("button");
        const timerDisplay = document.createElement("div");

        image.src = `./assets/${randomPic.img}`;
        label.innerHTML = "Enter your guess:";
        input.type = "text";
        checkButton.textContent = "Check Answer";
        timerDisplay.textContent = "";

        image.classList.add("game-image");
        label.classList.add("game-label");
        input.classList.add("game-input");
        checkButton.classList.add("check-button");
        timerDisplay.classList.add("timer-display");

        this.picContainer.innerHTML = "";
        document.getElementById("start-button").style.display = "none";
        document.getElementById("instruction-button").style.display = "none";
        this.picContainer.appendChild(image);
        this.picContainer.appendChild(document.createElement("br"));
        this.picContainer.appendChild(label);
        this.picContainer.appendChild(document.createElement("br"));
        this.picContainer.appendChild(input);
        this.picContainer.appendChild(document.createElement("br"));
        this.picContainer.appendChild(checkButton);
        this.picContainer.appendChild(timerDisplay);
        const scoreDisplay = document.createElement("div");
        scoreDisplay.classList.add("score-display");
        this.picContainer.insertBefore(scoreDisplay, image);

        // Create hints display element
        const hintsDisplay = document.createElement("div");
        hintsDisplay.classList.add("hints-display");
        this.picContainer.insertBefore(hintsDisplay, image);

        image.addEventListener("click", () => {
            this.reduceBlur();
            this.hints--;
            if (this.hints < 0) hintsDisplay.textContent = `Hints: 0`;

                if (this.hints  >= 0)hintsDisplay.textContent = `Hints: ${this.hints}`;
            
        });

        if (this.score < 3) {
            this.hints = 3;
            this.displayRandomLetters(randomPic.name.toLowerCase(), input);
        } else if (this.score >= 3 && this.score <= 9) {
            this.hints = 2;
        } else {
            this.hints = 0;
            this.startTimer(30, timerDisplay);
        }
        scoreDisplay.textContent = `Score: ${this.score}`;
        hintsDisplay.textContent = `Hints: ${this.hints}`;
        checkButton.addEventListener("click", () => {
            this.checkGuess(input.value.toLowerCase().trim(), index);
        });

        // Clear previous timer and start a new one for each new picture
        clearInterval(this.timer);
        if (this.score > 7) {
            this.startTimer(30, timerDisplay);
        }
    }

    displayRandomLetters(correctAnswer, inputField) {
        const letters = correctAnswer.split('');
        const randomLetters = [];
        while (randomLetters.length < 5) {
            const randomCharCode = Math.floor(Math.random() * 26) + 97; // Random lowercase letter ASCII code
            const randomLetter = String.fromCharCode(randomCharCode);
            if (!letters.includes(randomLetter)) {
                randomLetters.push(randomLetter);
            }
        }
        const allLetters = letters.concat(randomLetters).sort(() => Math.random() - 0.5);
        const lettersContainer = document.createElement('div');
        lettersContainer.classList.add('letters-container');
        allLetters.forEach(letter => {
            const letterElement = document.createElement('span');
            letterElement.textContent = letter;
            letterElement.classList.add('letter');
            letterElement.addEventListener('click', () => {
                inputField.value += letter;
            });
            lettersContainer.appendChild(letterElement);
        });
        this.picContainer.insertBefore(lettersContainer, inputField);
    }

    checkGuess(playerGuess, pictureIndex) {
        const correctAnswer = this.pics[pictureIndex].name.toLowerCase();
        if (playerGuess === correctAnswer) {
            console.log("correct!");
            var audio = new Audio('correct.mp3');
            audio.play();
            this.score++;
            this.picContainer.style.display = "none";
            const imageSrc = `./assets/${this.pics[pictureIndex].img}`;
            const captionText = this.pics[pictureIndex].caption;
            const imgElement = document.getElementById("pic");
            imgElement.src = imageSrc;

            const captionElement = document.getElementById("caption");
            captionElement.textContent = captionText;

            const containerElement = document.getElementById("pic-caption-container");
            containerElement.style.display = "grid";

            setTimeout(() => {
                containerElement.style.display = "none";
                this.picContainer.style.display = "flex";
            }, 4000);

            console.log("your score is", this.score);
            this.nextLevel();
            this.startGame();
        } else {
            this.end();
        }
    }
 nextLevel() {
        if (this.score == 3) {
            this.currentLevel++;
        } else if (this.score > 13) {
            this.end();
        }
    }
   

    end() {
      var audio = new Audio('gameOver.mp3');
      audio.play();
        this.isGameOver = true;
        console.log(this.isGameOver);
        const gameOverContainer = document.createElement("div");
        const restartButton = document.createElement("button");
        restartButton.classList.add ('restart-button')
        restartButton.textContent = "Restart Game";
        restartButton.addEventListener("click", () => {
            window.location.reload();
        });
        gameOverContainer.classList.add('end-screen')
        gameOverContainer.innerHTML = '<p>Game Over</p><br><p>good luck next time </p>'
        gameOverContainer.appendChild(restartButton);
        this.picContainer.innerHTML = "";
        this.picContainer.appendChild(gameOverContainer);
    }

    reduceBlur() {
        const imageElement = document.querySelector(".game-image");
         if (this.hints > 0) {this.blurPercentage -= 2;
        imageElement.style.filter = `blur(${this.blurPercentage}px)`;}
    }

    startTimer(duration, display) {
        let timeLeft = duration;
        this.timer = setInterval(() => {
            display.innerHTML = `<p>Time left: ${timeLeft} seconds</p>`;
            display.classList.add ('timer')

            timeLeft -= 1;
            if (timeLeft < 0) {
                clearInterval(this.timer);
                this.end();
            }
        }, 1000);
    
}
}