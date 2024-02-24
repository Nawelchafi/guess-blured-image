const pics = [
  { name: 'Acropolis', img: 'Acropolis.jpg' , caption: "The Acropolis of Athens is said to be home to a secret chamber that was used for mysterious rituals."},
  { name: 'Alhambra', img: 'Alhambra.jpg' , caption: "The Alhambra is rumored to have hidden passages and secret rooms where forgotten treasures are said to be hidden."},
  { name: 'Belem Tower', img: 'Belem-Tower.jpg' , caption: "Belem Tower is believed to have hidden chambers beneath its foundations that were used by ancient alchemists."},
  { name: 'Colosseum', img: 'Colosseum.jpg' , caption: "Legend has it that the Colosseum is haunted by the spirits of gladiators who perished in its arena."},
  { name: 'Eiffel tower', img: 'Eiffel.jpg' , caption: "During cold weather, the Eiffel Tower shrinks by about 6 inches due to thermal contraction."},
  { name: 'Fly Geyser', img: 'Fly-Geyser-Nevada.jpg', caption: "The vibrant colors of Fly Geyser are the result of thermophilic algae, which thrive in its warm waters."},
  { name: 'Pyramids Of Giza', img: 'Pyramide.jpg' , caption: "Some theories suggest that the Pyramids of Giza were built by ancient astronauts."},
  { name: 'Hagia Sophia', img: 'Hagia-Sophia.jpg' , caption: "It is believed that Hagia Sophia possesses hidden chambers containing ancient relics and lost treasures."},
  { name: 'Rialto Bridge', img: 'Rialto-Bridge.jpg', caption: "Rumors persist of a secret network of tunnels beneath the Rialto Bridge that were used by Venetian merchants for smuggling."},
  //{ name: 'Great Wall of China', img: 'Great-wall-of-china' , caption: "The Great Wall of China is rumored to be guarded by the spirits of ancient soldiers."},
  { name: 'Machu Picchu', img: 'Machu-Picchu.jpg' , caption: "Machu Picchu is believed to have been built by the Inca civilization as a secret sanctuary."},
  { name: 'Petra', img: 'Petra.jpg' , caption: "Petra is said to harbor hidden tombs and chambers that have yet to be discovered by modern archaeologists."},
  { name: 'Stonehenge', img: 'Stonehenge.jpg' , caption: "Some speculate that Stonehenge was built by a race of giants, while others believe it was constructed by aliens."},
  { name: 'The Forbidden City', img: 'The Forbidden City.jpg' , caption: "The Forbidden City is rumored to be guarded by the spirits of ancient emperors."},
  //{ name: 'the door to hell', img: 'the door to hell.jpg' , caption: "The Door to Hell is believed to be a gateway to the underworld, according to local folklore."},
  { name: 'Taj mahal', img: 'taj mahal.jpg' , caption: "Legend has it that Shah Jahan, the builder of the Taj Mahal, intended to construct an identical black marble mausoleum for himself on the opposite bank of the Yamuna River."},
  { name: 'victoria falls', img: 'victoria falls.jpg' , caption: "Victoria Falls is known as 'Mosi-oa-Tunya' by the locals, which means 'The Smoke That Thunders'."},
  { name: 'Burg Eltz', img: 'Burg Eltz.jpg' , caption: "Burg Eltz is said to be haunted by the ghost of a young girl who tragically died there centuries ago."}
];
startButton = document.getElementById("start-button")
window.onload = function () {
  
 let game = new Game(pics)
  startButton.onclick = function () {
    game.startGame(pics);
    document.getElementById("game-container").style.display = "flex"
  };

}

