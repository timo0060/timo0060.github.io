/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    // PLAY STATE
    var GameOver = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function GameOver() {
            this.condition = "";
            // Instantiate Game Container
            this.game = new createjs.Container();
            // Add ocean to game
            this.grass = new objects.Grass();
            this.game.addChild(this.grass);
            if (constants.SCORE < constants.WIN_SCORE) {
                this.condition = "You Died. Try Again?";
                createjs.Sound.play("assets/audio/playerDeath.ogg");
            }
            else {
                this.condition = "You Won. Try Again?";
                createjs.Sound.play("assets/audio/victoryTheme.ogg");
            }
            var gameOverLabel = new objects.Label(this.condition, constants.SCREEN_CENTER_WIDTH, 100, constants.FONT_SIZE, "#52A3FA");
            gameOverLabel.font = "50px Consolas";
            gameOverLabel.regX = gameOverLabel.getMeasuredWidth() * 0.5;
            gameOverLabel.regY = gameOverLabel.getMeasuredHeight() * 0.5;
            this.game.addChild(gameOverLabel);
            var finalScoreLabel = new objects.Label("FINAL SCORE: " + finalScore, constants.SCREEN_CENTER_WIDTH, 200, constants.FONT_SIZE, "#52A3FA");
            this.game.addChild(finalScoreLabel);
            var highScoreLabel = new objects.Label("HIGH SCORE: " + highScore, constants.SCREEN_CENTER_WIDTH, 300, constants.FONT_SIZE, "#52A3FA");
            this.game.addChild(highScoreLabel);
            this.tryAgainButton = new objects.Button("assets/images/tryButton.png", constants.SCREEN_CENTER_WIDTH, 400);
            this.game.addChild(this.tryAgainButton);
            this.tryAgainButton.on("click", this.tryAgainButtonClicked, this);
            stage.addChild(this.game);
        } // constructor end
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        GameOver.prototype.tryAgainButtonClicked = function () {
            constants.SCORE = 0;
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.MENU_STATE;
            stateChanged = true;
        };
        // UPDATE METHOD
        GameOver.prototype.update = function () {
        }; // update method end
        return GameOver;
    })();
    states.GameOver = GameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map