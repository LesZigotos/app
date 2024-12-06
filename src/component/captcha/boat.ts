import * as PIXI from "pixi.js";
import {Sprite, Texture} from "pixi.js";

class Boat extends PIXI.Container {

    public hitCount: number = 0;
    public invincible = false;

    private invincibilityCounter = 0;
    private invincibilityInterval: number = 0;
    private blinkInterval = 200;
    private blinkDuration = 2000;

    private sprite: Sprite | undefined;

    private readonly speed: number;

    constructor() {
        super();

        this.speed = 5;
        this.zIndex = 50;
    }

    init() {
        const texture = Texture.from("https://leszigotos.github.io/boat.png");
        texture.source.scaleMode = 'nearest';
        this.sprite = new PIXI.Sprite(texture);
        this.setSize(this.sprite.width, this.sprite.height);
        this.scale.set(5, 5);
        this.addChild(this.sprite);
    }

    moveLeft = (delta: number) => {
        if (this.position.x - this.speed > 0)
            this.x -= this.speed * delta;
    }

    moveRight = (delta: number) => {
        if (this.position.x + this.width + this.speed < this.parent?.width)
            this.x += this.speed * delta;
    }

    hit() {
        if (this.invincible) return;

        this.hitCount++;
        this.invincible = true;
        this.invincibilityInterval = setInterval(() => {
            this.invincibilityCounter++;
            this.alpha = this.alpha == 1 ? 0.5 : 1;

            if (this.invincibilityCounter == this.blinkDuration / this.blinkInterval) {
                this.invincible = false;
                this.invincibilityCounter = 0;
                clearInterval(this.invincibilityInterval);
            }
        }, this.blinkInterval);
    }
}

export default Boat;
