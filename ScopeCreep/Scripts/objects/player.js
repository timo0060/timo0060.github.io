var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Player() {
            _super.call(this, assetLoader.getResult("player"));
            this.up = false;
            this.down = false;
            this.left = false;
            this.right = false;
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
        Player.prototype.update = function () {
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
        };
        Player.prototype.movementHandler = function (e) {
            alert("Key down is");
            switch (e.keyCode) {
                case 87:
                    this.up = true;
                    break;
                case 65:
                    this.left = true;
                    break;
                case 83:
                    this.down = true;
                    break;
                case 68:
                    this.right = true;
                    break;
            }
        };
        return Player;
    })(createjs.Bitmap);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map