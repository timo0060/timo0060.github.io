var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Zombie = (function (_super) {
        __extends(Zombie, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Zombie() {
            _super.call(this, "zombie");
            this.zombiePos = 0;
            this.zombieHP = 5;
            this.zombieSpeed = constants.ZOM_SPEED;
            this.name = "zombie";
            // set the zombie to start at a random screen position
            this.zombiePos = Math.floor(Math.random() * 4);
            this.on("click", this.hitOrKilledZombie);
            this.addEventListener("mouseover", this._mouseOver);
            this.addEventListener("mouseout", this._mouseOut);
            this.initZombie();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Zombie.prototype.initZombie = function () {
            if (this.zombiePos == 1) {
                this.x = Math.floor(Math.random() * constants.SCREEN_WIDTH);
                this.y = -this.height;
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
                this.x = -this.width;
                this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            }
        };
        Zombie.prototype._reset = function () {
            this.zombiePos = this.zombiePos = Math.floor(Math.random() * 4);
            if (this.zombiePos == 1) {
                this.x = Math.floor(Math.random() * constants.SCREEN_WIDTH);
                this.y = -this.height;
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
                this.x = -this.width;
                this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            }
        };
        Zombie.prototype._checkBounds = function () {
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
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Zombie.prototype.hitOrKilledZombie = function () {
            //Detract health, play sound.
            this.zombieHP = this.zombieHP - 5;
            constants.SCORE++;
            createjs.Sound.play("assets/audio/gunShot.ogg");
            createjs.Sound.play("assets/audio/zombieDead.ogg");
        };
        Zombie.prototype.isDeadCheck = function () {
            if (this.zombieHP > 0) {
                return 1;
            }
            else {
                return 0;
            }
        };
        Zombie.prototype.updateFacing = function (playerY, playerX) {
            var angle = Math.atan2(playerY - this.y, playerX - this.x);
            angle = angle * (180 / Math.PI);
            this.rotation = 90 + angle;
        };
        Zombie.prototype.update = function () {
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
        };
        // EVENT HANDLERS
        Zombie.prototype._mouseOut = function (event) {
            event.currentTarget.alpha = 1.0;
        };
        Zombie.prototype._mouseOver = function (event) {
            event.currentTarget.alpha = 0.75;
        };
        return Zombie;
    })(objects.GameObject);
    objects.Zombie = Zombie;
})(objects || (objects = {}));
//# sourceMappingURL=zombie.js.map
