class Player {
    constructor(level, hints) {
        this.level = level
        this.hints = hints
        this.score = 0
    }

    assignHints() {
        if (this.level === 1)  this.hints = 10
         else if (this.level === 2)  this.hints = 5
         else if (this.level === 3)  this.hints = 2
        
    }

    loseHints() {
        this.hints--
    }
    playerGuess() {

    }
}
