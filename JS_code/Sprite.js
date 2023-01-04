class Sprite {
    constructor(config) {


        //Image setup
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isloaded = true;
        }

        //configureing animation  & Inital state 
        this.animations = config.animations || {
            idleDown: [
                [0,0]
            ],
            //walkDown [
             //   [0,0], [1,0], [2,0], [3,0],
            //]
            }
            this.currentAnimation = config.currenAnimation || "idleDown"
            this.currentAnimationFrame = 0;
            //Reference game Object
            this.gameObject = config.gameObject
        }
        draw(ctx) {
            const x = this.gameObject.x * 26 - 15;
            const y = this.gameObject.y * 26 - 4;
                this.isLoaded && ctx.drawImage(this.image,
                0,0,
                27,27,
                x,y,
                27,27,)  
        }   
    }