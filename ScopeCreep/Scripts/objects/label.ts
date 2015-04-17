module objects {
    // LABEL CLASS
    export class Label extends createjs.Text {
        // INSTANCE VARIALBES
        public width: number;
        public height: number;

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(labelString: string, x: number, y: number, fontSize: string, color: string) {
            super(labelString, fontSize + " " + constants.FONT_FAMILY, color);

            this.width = this.getMeasuredWidth();
            this.height = this.getMeasuredHeight();

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = x;
            this.y = y;
        }
    }
} 