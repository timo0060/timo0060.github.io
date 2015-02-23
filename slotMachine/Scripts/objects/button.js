var objects;
(function (objects) {
    var Button = (function () {
        //The constructor for this class
        function Button(path, x, y, disabled) {
            this.setX(x);
            this.setY(y);
            this.setDisabled(disabled);

            this._buttonImage = new createjs.Bitmap(path);
            this._buttonImage.x = this.getX();
            this._buttonImage.y = this.getY();
            this._buttonImage.addEventListener("mouseover", this._buttonOver);
            this._buttonImage.addEventListener("mouseout", this._buttonOut);
        }
        // PUBLIC PROPERTIES
        Button.prototype.getImage = function () {
            return this._buttonImage;
        };

        Button.prototype.getX = function () {
            return this._x;
        };

        Button.prototype.isDisabled = function () {
            return this._disabled;
        };

        Button.prototype.getY = function () {
            return this._y;
        };

        Button.prototype.setX = function (x) {
            this._x = x;
        };

        Button.prototype.setY = function (y) {
            this._y = y;
        };

        //Used to disable, or enable the button
        Button.prototype.setDisabled = function (disabled) {
            this._disabled = disabled;
        };

        // EVENT HANDLERS
        //Fires when the mouse leaves a button, sets it back to a solid image
        Button.prototype._buttonOut = function (event) {
            event.currentTarget.alpha = 1.0;
        };

        //When a mouse is hovering of the button, make it shy and go half way to invisibility
        Button.prototype._buttonOver = function (event) {
            event.currentTarget.alpha = 0.5;
        };
        return Button;
    })();
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=Button.js.map
