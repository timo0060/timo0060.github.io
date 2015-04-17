module objects {

    export class Bullet extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super("bullet");
            this.name = "bullet";

            this.initBullet();

        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private initBullet() {

        }

        

        private _checkBounds() {
//            if (this.y > (constants.SCREEN_HEIGHT + this.height)) {
  //              this._reset();
    //        }

            
        }
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {            
                this.y += 1;
                this.x -= 1;

                this._checkBounds();     
        }



    }
}     