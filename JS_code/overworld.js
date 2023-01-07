//Overowrld  
const canvas= document.getElementById(".game-canvas");


class Overworld {
  constructor(config) {
    
    
  }

 
init() {
  //chose function to randomize
  function choose(arr) {return arr[Math.floor(Math.random()*arr.length)];}
  
  //music randomizer
  const gameTheme = document.getElementById("gtheme") ;
  
  

  //redefine "this"
  const self = this;
  
  //Map Load
  function loadMap(callback) {   
    Map.onload =  () => {
       self.ctx.drawMap(Map, 0, 0); 
       callback()
       };
    Map.src="Maps/DemoMap1.png";
  }

    //Load Characters
    //loadHero
  function loadHero(callback) {
      const hero = new GameObject({
        x: 16,
        y: 7,
        src: "Images/Spritesheet.png",
      })
      callback()
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
      loadMap(loadHero(loadNPC1));
      const Map = new Map();
      
  }
}
}

//Order the load Via callback
