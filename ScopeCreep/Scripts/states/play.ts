/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />


module states {
    // PLAY STATE
    export class Play {
        // INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++
        //Game Container
        public game: createjs.Container;
        //Background
        public grass: objects.Grass;
        //Game Objects
        public player: objects.Player;
        public zombies: objects.Zombie[] = [];
        public scoreboard: objects.ScoreBoard;


        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            // Add ocean to game
            this.grass = new objects.Grass();
            this.game.addChild(this.grass);

            // Add player to game
            this.player = new objects.Player();
            this.game.addChild(this.player);
                       
            // Add enemies to game
            for (var zombie = constants.ZOM_NUM; zombie > 0; zombie--) {
                this.zombies[zombie] = new objects.Zombie();
                this.game.addChild(this.zombies[zombie]);
            }

            this.scoreboard = new objects.ScoreBoard(this.game);
            this.game.addEventListener('click', this.fireGun);



            stage.addChild(this.game);
        } // constructor end


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++

        //Score method
        public fireGun() {
            createjs.Sound.play("assets/audio/gunShot.ogg");
        }

        public scored() {
            this.scoreboard.score = constants.SCORE;
        }

        // Calculate the distance between two points
        distance(p1: createjs.Point, p2: createjs.Point): number {

            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        } // distance end

        //Check Zombie Shot Collision Method
        checkShotZombie(collider: objects.GameObject) {
           
        } // checkShotZombie end

        // Check Collision With Enemy Method
        checkCollision(collider: objects.GameObject) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.player.x;
            p1.y = this.player.y;
            p2.x = collider.x;
            p2.y = collider.y;
            // Check for Collision
            if (this.distance(p2, p1) < ((this.player.height * 0.5) + (collider.height * 0.5))) {
                if (!collider.isColliding) { // Collision has occurred
                    //createjs.Sound.play(collider.soundString);
                    collider.isColliding = true;
                    switch (collider.name) {
                        case "zombie":
                            this.scoreboard.lives--;
                            break;
                    }
                }
            } else {
                collider.isColliding = false;
            }
    } // checkCollision end

        // UPDATE METHOD
        public update() {

            this.player.update();
                        
            if (this.scoreboard.lives > 0) {
                for (var zombie in this.zombies) {

                    //Update our zombies movement and rotation.
                    this.zombies[zombie].update();
                    this.zombies[zombie].updateFacing(this.player.y, this.player.x);                    
                   
                    //check zombie collisions.
                    this.checkCollision(this.zombies[zombie]);

                    //check if zom is dead
                    var isDead: number;
                    isDead = this.zombies[zombie].isDeadCheck();
                    
                    //if it is remove it.
                    if (isDead == 0) {
                        this.game.removeChild(this.zombies[zombie]);
                        this.scored();
                    } 
                }
            }

            this.scoreboard.update();

            if (this.scoreboard.lives < 1 || this.scoreboard.score == constants.WIN_SCORE) {
                createjs.Sound.stop();
                this.game.removeAllChildren();
                stage.removeAllChildren();
                finalScore = this.scoreboard.score;
                if (finalScore > highScore) {
                    highScore = finalScore;
                }
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }
        } // update method end




    }
} 