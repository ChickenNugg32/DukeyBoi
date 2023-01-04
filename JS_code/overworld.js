//Overowrld
class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.style.background = "purple"
  }

 
init() {
  //chose function to randomize
  function choose(arr) {return arr[Math.floor(Math.random()*arr.length)];}
  //music randomizer
  const gameTheme = document.getElementById("gtheme") 
  
  

    //redefine "this"
    const self = this
    //Map Load
    const Map = new Map();
    function loadMap(callback){
      
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
      hero.Sprite.draw(self.ctx)
  }
}

//Order the load Via callback
