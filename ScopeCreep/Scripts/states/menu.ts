/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/grass.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />


module states {
    // MENU STATE
    export class Menu {
        // INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++
        public game: createjs.Container;
        public grass: objects.Grass;
        public playButton: objects.Button;
        public instructionButton: objects.Button;
        public instUp: Boolean = false;
        public easyButton: objects.Button;
        public normalButton: objects.Button;
        public hardButton: objects.Button;
        public backButton: objects.Button;
        public instructionLabel: objects.Label;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {

            //End former song if need be Play the game song.
            createjs.Sound.stop();
            createjs.Sound.play("assets/audio/mainTheme.ogg");

            // Instantiate Game Container
            this.game = new createjs.Container();

            // Add ocean to game
            this.grass = new objects.Grass();
            this.game.addChild(this.grass);

            var gameTitle: objects.Label = new objects.Label("Scope Creep", constants.SCREEN_CENTER_WIDTH, 100, constants.FONT_SIZE, "#52A3FA");
            gameTitle.font = "80px Consolas";
            gameTitle.regX = gameTitle.getMeasuredWidth() * 0.5;
            gameTitle.regY = gameTitle.getMeasuredHeight() * 0.5;
            this.game.addChild(gameTitle);

            this.playButton = new objects.Button("assets/images/playButton.png", constants.SCREEN_CENTER_WIDTH, constants.SCREEN_CENTER_HEIGHT);
            this.game.addChild(this.playButton);
            this.playButton.on("click", this.playButtonClicked, this);

            this.instructionButton = new objects.Button("assets/images/instructionButton.png", constants.SCREEN_CENTER_WIDTH, constants.SCREEN_CENTER_HEIGHT + 100);
            this.game.addChild(this.instructionButton);
            this.instructionButton.on("click", this.instructionClicked, this);


            stage.addChild(this.game);
        } // constructor end


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        instructionClicked() {
            this.game.removeChild(this.playButton);
            this.game.removeChild(this.instructionButton);
            this.instructionLabel = new objects.Label("Click on the zombies with\n\nyour mouse and fend them off!", constants.SCREEN_WIDTH * .8, constants.SCREEN_CENTER_HEIGHT, "24px", "yellow");
            this.game.addChild(this.instructionLabel);
            this.backButton = new objects.Button("assets/images/backButton.png", constants.SCREEN_CENTER_WIDTH, constants.SCREEN_HEIGHT * .75);
            this.game.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClicked, this);
        }

        backButtonClicked() {
            this.game.removeChild(this.backButton);
            this.game.removeChild(this.instructionLabel);
            this.game.addChild(this.playButton);
            this.game.addChild(this.instructionButton);
        }

        playButtonClicked() {
            this.game.removeChild(this.playButton);
            this.game.removeChild(this.instructionButton);

            this.easyButton = new objects.Button("assets/images/easyButton.png", constants.SCREEN_WIDTH * .25, constants.SCREEN_CENTER_HEIGHT);
            this.game.addChild(this.easyButton);
            this.easyButton.on("click", this.easyDifficultyButtonClicked, this);

            this.normalButton = new objects.Button("assets/images/normalButton.png", constants.SCREEN_WIDTH * .50, constants.SCREEN_CENTER_HEIGHT);
            this.game.addChild(this.normalButton);
            this.normalButton.on("click", this.normalDifficultyButtonClicked, this);

            this.hardButton = new objects.Button("assets/images/hardButton.png", constants.SCREEN_WIDTH * .75, constants.SCREEN_CENTER_HEIGHT);
            this.game.addChild(this.hardButton);
            this.hardButton.on("click", this.hardDifficultyButtonClicked, this);

        }

        easyDifficultyButtonClicked() {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
            //Set difficulty stats
            constants.PLAYER_LIVES = 10;          
            constants.ZOM_SPEED = .45;
            constants.ZOM_NUM = 5;
            constants.WIN_SCORE = 5;
        }

        normalDifficultyButtonClicked() {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
            //Set difficulty stats
            constants.PLAYER_LIVES = 5;  
            constants.ZOM_SPEED = .75;
            constants.ZOM_NUM = 10;
            constants.WIN_SCORE = 10;
        }

        hardDifficultyButtonClicked() {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
            //Set difficulty stats
            constants.PLAYER_LIVES = 3;  
            constants.ZOM_SPEED = 1;
            constants.ZOM_NUM = 15;
            constants.WIN_SCORE = 15;
        }

        // UPDATE METHOD
        public update() {

            

        } // update method end


    }
}   