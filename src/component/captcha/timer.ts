import * as PIXI from "pixi.js";
import {Text, TextStyle} from "pixi.js";

class Timer extends PIXI.Container {

    private interval: number;
    private time = 15;
    private timer: Text;
    private stop: boolean = false;

    constructor() {
        super();

        this.timer = new Text();
        this.timer.text = this.time.toString();
        this.timer.x = 10;
        this.timer.y = 10;
        this.timer.style = new TextStyle({
            dropShadow: {
                color: '#000',
                blur: 2,
                angle: Math.PI / 6,
                distance: 2,
            },
            fill: "#fff",
            fontFamily: "Lucida Console",
            fontSize: 36
        });
        this.addChild(this.timer);

        this.zIndex = 100;

        this.interval = setInterval(() => {
            if (this.time == 0 || this.stop) {
                clearInterval(this.interval);
                return;
            }

            this.time--;
            this.timer.text = this.time.toString();
        }, 1000);
    }

    isElapsed() {
        return this.time == 0;
    }

    stopTimer() {
        this.stop = true;
    }
}

export default Timer;
