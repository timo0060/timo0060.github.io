var constants;
(function (constants) {
    // Font Constants
    constants.FONT_SIZE = "40px";
    constants.FONT_FAMILY = "Consolas";
    constants.FONT_COLOUR = "#FF0000";
    // Stage Constants
    constants.SCREEN_WIDTH = 640;
    constants.SCREEN_HEIGHT = 480;
    constants.SCREEN_CENTER_WIDTH = constants.SCREEN_WIDTH * 0.5;
    constants.SCREEN_CENTER_HEIGHT = constants.SCREEN_HEIGHT * 0.5;
    constants.OCEAN_RESET_HEIGHT = 960;
    // Game Constants
    constants.PLAYER_LIVES = 5;
    constants.ZOM_NUM = 5;
    constants.ZOM_SPEED = 1;
    constants.WIN_SCORE = 5;
    constants.SCORE = 0;
    // States Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map