module objects {

    export class Zombie extends objects.GameObject {

        private zombiePos: Number = 0;
        public zombieHP: number = 5;
        private zombieSpeed: number = constants.ZOM_SPEED;
        

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super("zombie");
            this.name = "zombie";

            // set the zombie to start at a random screen position
            this.zombiePos = Math.floor(Math.random() * 4);

            this.on("click", this.hitOrKilledZombie);

            this.addEventListener("mouseover", this._mouseOver);
            this.addEventListener("mouseout", this._mouseOut);

            this.initZombie();

        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private initZombie() {
            
            if (this.zombiePos == 1) {
                this.x = Math.floor(Math.random() * constants.SCREEN_WIDTH);
                this.y = - this.height;
            }

            else if (this.zombiePos == 2) {
                this.x = constants.SCREEN_WIDTH + this.width;
                this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            }

            else if (this.zombiePos == 3) {
                this.x = Math.floor(Math.random() * constants.SCREEN_WIDTH);
                this.y = constants.SCREEN_HEIGHT + this.height;
            }

            else {
                this.x = - this.width;
                this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            }
        }

        private _reset() {

            this.zombiePos = this.zombiePos = Math.floor(Math.random() * 4);

            if (this.zombiePos == 1) {
                this.x = Math.floor(Math.random() * constants.SCREEN_WIDTH);
                this.y = - this.height;
            }

            else if (this.zombiePos == 2) {
                this.x = constants.SCREEN_WIDTH + this.width;
                this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            }

            else if (this.zombiePos == 3) {
                this.x = Math.floor(Math.random() * constants.SCREEN_WIDTH);
                this.y = constants.SCREEN_HEIGHT + this.height;
            }

            else {
                this.x = - this.width;
                this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            }
        }

        private _checkBounds() {
            if (this.zombiePos == 1) {

                if (this.y > (constants.SCREEN_HEIGHT + this.height)) {
                    this._reset();
                }
            }

            else if (this.zombiePos == 2) {

                if (this.x < 0 + this.width) {
                    this._reset();
                }
            }

            else if (this.zombiePos == 3) {

                if (this.y < 0 + this.height) {
                    this._reset();
                }
            }

            else {

                if (this.x > (constants.SCREEN_WIDTH + this.width)) {
                    this._reset();
                }
            }
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public hitOrKilledZombie() {
            
            //Detract health, play sound.
            this.zombieHP = this.zombieHP - 5;            
            constants.SCORE++;
            
            createjs.Sound.play("assets/audio/gunShot.ogg");
            createjs.Sound.play("assets/audio/zombieDead.ogg");            
          }

        public isDeadCheck(): number {
            if (this.zombieHP > 0) {
                return 1;
            }
            else {
                return 0;
            }

        }

        public updateFacing(playerY:number, playerX:number) {
            var angle = Math.atan2(playerY - this.y, playerX - this.x);

            angle = angle * (180 / Math.PI);

            this.rotation = 90 + angle;
        }

        public update() {

            if (this.zombiePos == 1) {

                this.y += this.zombieSpeed;

                if (this.x > constants.SCREEN_CENTER_WIDTH) {

                    this.x -= this.zombieSpeed;
                }
                else {

                    this.x += this.zombieSpeed;
                }

                this._checkBounds();
            }

            else if (this.zombiePos == 2) {

                this.x -= this.zombieSpeed;
                

                if (this.y > constants.SCREEN_CENTER_HEIGHT) {

                    this.y -= this.zombieSpeed;    
                }
                else {

                    this.y += this.zombieSpeed;  
                }

                this._checkBounds();
            }

            else if (this.zombiePos == 3) {

                this.y -= this.zombieSpeed;

                if (this.x > constants.SCREEN_CENTER_WIDTH) {

                    this.x -= this.zombieSpeed;
                }
                else {

                    this.x += this.zombieSpeed;
                }

                this._checkBounds();
            }

            else {
                
                this.x += this.zombieSpeed;


                if (this.y > constants.SCREEN_CENTER_HEIGHT) {

                    this.y -= this.zombieSpeed;
                }
                else {

                    this.y += this.zombieSpeed;
                }

                this._checkBounds();
            }
        }


        // EVENT HANDLERS

        private _mouseOut(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 1.0;
        }

        private _mouseOver(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 0.75;
        }


    }
}    