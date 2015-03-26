﻿module constants {
    //FONT VARIABLES ------------------------------------------------------------------------------
    export var FONT_SIZE: string = "40px";
    export var FONT_FAMILY: string = "Consolas";
    export var FONT_COLOUR: string = "#CAD108";
    
    //SCREEN VARIABLES -----------------------------------------------------------------------------
    export var SCREEN_WIDTH: number = 800;
    export var SCREEN_HEIGHT: number = 600;
    export var SCREEN_CENTER_WIDTH: number = SCREEN_WIDTH * 0.5;
    export var SCREEN_CENTER_HEIGHT: number = SCREEN_HEIGHT * 0.5;
    export var TREE_LINE: number = 450;

    //GAME VARIABLES ---------------------------------------------------------------------------------
    export var PLAYER_LIVES: number = 5;
    export var ENEMY_NUM: number = 3;

    //STATE VARIABLES -------------------------------------------------------------------------------
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;    
}