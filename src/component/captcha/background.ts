import * as PIXI from "pixi.js";
import {Texture, TilingSprite} from "pixi.js";

class Background extends PIXI.Container {

    private readonly speed: number;

    private upper: TilingSprite | undefined;
    private lower: TilingSprite | undefined;

    constructor() {
        super();

        this.speed = 1;
    }

    move = (delta: number) => {
        if (!this.upper || !this.lower) return;

        this.upper.y += this.speed * delta;
        this.lower.y += this.speed * delta;

        if (this.lower.y > 0) {
            this.upper.y = -this.upper.height + 1;
            [this.upper, this.lower] = [this.lower, this.upper];
        }
    }

    setSize(width: number, height?: number) {
        super.setSize(width, height);

        if (!height) return;

        const texture = Texture.from("public/tile.png");
        texture.source.scaleMode = 'nearest';

        this.upper = new TilingSprite({
            texture: texture,
            width: width,
            height: height * 2
        });
        this.upper.y = -this.upper.height;
        this.upper.tileScale.set(5, 5);

        this.lower = new TilingSprite({
            texture: texture,
            width: width,
            height: height * 2
        });
        this.lower.position.set(0, 0);
        this.lower.tileScale.set(5, 5);

        this.addChild(this.upper);
        this.addChild(this.lower);
    }
}

export default Background;
