var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Bullet() {
            _super.call(this, "bullet");
            this.name = "bullet";
            this.initBullet();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Bullet.prototype.initBullet = function () {
        };
        Bullet.prototype._checkBounds = function () {
            //            if (this.y > (constants.SCREEN_HEIGHT + this.height)) {
            //              this._reset();
            //        }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Bullet.prototype.update = function () {
            this.y += 1;
            this.x -= 1;
            this._checkBounds();
        };
        return Bullet;
    })(objects.GameObject);
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map