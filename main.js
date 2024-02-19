const pics = [
  { name: 'Acropolis', img: 'Acropolis.jpg' , caption: ""},
  { name: 'Alhambra', img: 'Alhambra.jpg' , caption: ""},
  { name: 'Belem Tower', img: 'Belem-Tower.jpg' , caption: ""},
  { name: 'Colosseum', img: 'Colosseum.jpg' , caption: ""},
  { name: 'Eiffel', img: 'Eiffel.jpg' , caption: ""},
  { name: 'Fly Geyser', img: 'Fly-Geyser-Nevada.jpg', caption: "" },
  { name: 'Pyramids', img: 'Pyramide.jpg' , caption: ""},
  { name: 'Hagia Sophia', img: 'Hagia-Sophia.jpg' , caption: ""},
  { name: 'Rialto Bridge', img: 'Rialto-Bridge.jpg', caption: "" },
  { name: 'Sagrada Familia', img: 'Sagrada-Familia.jpg' , caption: ""},
]
startButton = document.getElementById("start-button")
window.onload = function () {
 let game = new Game(pics)
  startButton.onclick = function () {
    game.startGame(pics);
  };

}