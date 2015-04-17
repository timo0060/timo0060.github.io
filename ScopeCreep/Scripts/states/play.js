/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    // PLAY STATE
    var Play = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Play() {
            this.zombies = [];
            // Instantiate Game Container
            this.game = new createjs.Container();
            // Add ocean to game
            this.grass = new objects.Grass();
            this.game.addChild(this.grass);
            // Add player to game
            this.player = new objects.Player();
            this.game.addChild(this.player);
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
        Play.prototype.fireGun = function () {
            createjs.Sound.play("assets/audio/gunShot.ogg");
        };
        Play.prototype.scored = function () {
            this.scoreboard.score = constants.SCORE;
        };
        // Calculate the distance between two points
        Play.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }; // distance end
        //Check Zombie Shot Collision Method
        Play.prototype.checkShotZombie = function (collider) {
        }; // checkShotZombie end
        // Check Collision With Enemy Method
        Play.prototype.checkCollision = function (collider) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.player.x;
            p1.y = this.player.y;
            p2.x = collider.x;
            p2.y = collider.y;
            // Check for Collision
            if (this.distance(p2, p1) < ((this.player.height * 0.5) + (collider.height * 0.5))) {
                if (!collider.isColliding) {
                    //createjs.Sound.play(collider.soundString);
                    collider.isColliding = true;
                    switch (collider.name) {
                        case "zombie":
                            this.scoreboard.lives--;
                            break;
                    }
                }
            }
            else {
                collider.isColliding = false;
            }
        }; // checkCollision end
        // UPDATE METHOD
        Play.prototype.update = function () {
            this.player.update();
            if (this.scoreboard.lives > 0) {
                for (var zombie in this.zombies) {
                    //Update our zombies movement and rotation.
                    this.zombies[zombie].update();
                    this.zombies[zombie].updateFacing(this.player.y, this.player.x);
                    //check zombie collisions.
                    this.checkCollision(this.zombies[zombie]);
                    //check if zom is dead
                    var isDead;
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
        }; // update method end
        return Play;
    })();
    states.Play = Play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map