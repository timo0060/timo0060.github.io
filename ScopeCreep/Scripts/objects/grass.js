var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Grass = (function (_super) {
        __extends(Grass, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Grass() {
            _super.call(this, assetLoader.getResult("grass"));
        }
        return Grass;
    })(createjs.Bitmap);
    objects.Grass = Grass;
})(objects || (objects = {}));
//# sourceMappingURL=grass.js.map