const pics = [
  { name: 'Acropolis', img: 'Acropolis.jpg' , caption: ""},
  { name: 'Alhambra', img: 'Alhambra.jpg' , caption: ""},
  { name: 'Belem Tower', img: 'Belem-Tower.jpg' , caption: ""},
  { name: 'Colosseum', img: 'Colosseum.jpg' , caption: ""},
  { name: 'Eiffel', img: 'Eiffel.jpg' , caption: ""},
  { name: 'Fly Geyser', img: 'Fly-Geyser-Nevada.jpg', caption: "" },
  { name: 'Pyramide', img: 'Pyramide.jpg' , caption: ""},
  { name: 'Hagia Sophia', img: 'Hagia-Sophia.jpg' , caption: ""},
  { name: 'Rialto Bridge', img: 'Rialto-Bridge.jpg', caption: "" },
  { name: 'Sagrada Familia', img: 'Sagrada-Familia.jpg' , caption: ""},

];
let game = new Game(pics); 

window.onload = function () {
 // let game;
  startButton.onclick( function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game(); 

    game.start(); 
  }

}