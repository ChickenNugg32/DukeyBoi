//Overowrld
class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
  }

 
init() {
  function choose(arr) {return arr[Math.floor(Math.random()*arr.length)];}
  //music randomizer
  const gameTheme = document.getElementById("gtheme") 
  
  for (let i=0;  i < 1;)
    {
    setInterval(() => {
    gameTheme.src = choose([ "Audio/Happy themes/happy_game_theme.mp3", ""  ]);  i =+ 1}, 45000)
  }
  

    //redefine "this"
    self = this
    //Map Load

    function loadMap(callback){
    const Map = new Map();
    Map.onload =  () => {
      self.ctx.drawMap(Map, 0, 0); 
      callback()
    };
    Map.src="Maps/DemoMap1.png";
    }

    //Load Characters

    //loadHero
      const hero = new GameObject({
        x: 16,
        y: 7,
        src: "Images/Spritesheet.png"
      })

      //loadNPC1

      const npc1 = new GameObject({
        x: 7,
        y: 9,
        src: "null",
      })
      loadMap()
      hero.Sprite.draw(this.ctx)
  }
}

//Order the load Via callback
