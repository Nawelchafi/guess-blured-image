class Game {
    constructor(player,levels) {
        this.player = player
        this.levels = levels
        this.currentLevel = 0
        this.isGameOver = false;
    }
    playtGame (){
        // if level one is passed call next level
        this.nextLevel()
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
