//Overowrld  
const canvas = document.querySelector(".game-canvas")
canvas.style.width = window.screen.width*(2/3) + "px";


class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
    
  }

 
init() {
  //canvas consistint height
  const canvas = document.querySelector(".game-canvas")
  canvas.style.width = window.screen.width*(2/3) + "px";
  canvas.style.height = window.screen.height*(1/7) + "px";
  
  //chose function to randomize
  function choose(arr) {return arr[Math.floor(Math.random()*arr.length)];}
  
  //music randomizer
  const gameTheme = document.getElementById("gtheme") 
  
  

  //redefine "this"
  const self = this
  //Map Load
  
  function loadMap(callback){
      
  Map.onload =  () => {
     self.ctx.drawMap(Map, 0, 0); 
     callback()
     };
  Map.src="Maps/DemoMap1.png";
  }
const Map = new Map();
    //Load Characters
    //loadHero
  function loadHero(callback) {
      const hero = new GameObject({
        x: 16,
        y: 7,
        src: "Images/Spritesheet.png",
      })
      callback
      hero.Sprite.draw(self.ctx)
      }
      //loadNPC1
  function loadNPC1() {
      const npc1 = new GameObject({
        x: 7,
        y: 9,
        src: "null",
      })
      
      //order gamobject load through function callback
      loadMap(loadHero(null));
      
      
  }
}
}

//Order the load Via callback
