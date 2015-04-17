module objects {

    export class Player extends createjs.Bitmap {
        public width: number;
        public height: number;
        public name: string;
        public moveSpeed: number;

        public up = false;
        public down = false;
        public left = false;
        public right = false;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super(assetLoader.getResult("player"));

            this.name = "player";

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = constants.SCREEN_CENTER_WIDTH;
            this.y = constants.SCREEN_CENTER_HEIGHT;

            //This doesnt work right, event not firing, typescript is awful for those used to flash.
            //this.addEventListener('onkeydown', this.movementHandler);
            //this.on('onkeydown', this.movementHandler);
                        
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
            //Update the facing direction of our man turret.
            var angle = Math.atan2(stage.mouseY - this.y, stage.mouseX - this.x);

            angle = angle * (180 / Math.PI);

            this.rotation = 90 + angle;

            if (this.up) {
                this.y + 5;
            }
            if (this.down) {
                this.y - 5;
            }
            if (this.left) {
                this.x - 5;
            }
            if (this.right) {
                this.x + 5;
            }

        }

        public movementHandler(e: KeyboardEvent) {
            alert("Key down is");            
            switch (e.keyCode) {
                case 87://W
                    this.up = true;
                    break;
                case 65://A
                    this.left = true;
                    break;
                case 83://S
                    this.down = true;
                    break;
                case 68://D
                    this.right = true;
                    break;
               // default:
                 //   this.up = false;
                   // this.down = false;
                   // this.left = false;
                   // this.right = false;
            }
        }
    }
}  