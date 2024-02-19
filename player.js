class Player {
    constructor() {
        
        this.hints = null
        this.score = 0
    
    }

    assignHints() {
        if (this.levels === 1)  this.hints = 10
         else if (this.level === 2)  this.hints = 6
         else if (this.level === 3)  this.hints = 4
        
    }

    loseHints() {
        this.hints--
    }
    
}