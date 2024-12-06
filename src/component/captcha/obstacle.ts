import * as PIXI from "pixi.js";
import {Sprite, Texture, TextureSourceLike} from "pixi.js";

class Obstacle extends PIXI.Container {

    public speed: number;

    private sprite: Sprite;

    constructor(textureSource: TextureSourceLike) {
        super();

        this.speed = 2;

        const texture = Texture.from(textureSource);
        texture.source.scaleMode = 'nearest';
        this.sprite = new PIXI.Sprite(texture);
        this.sprite.scale.set(3, 3);
        this.addChild(this.sprite);
    }

    move(delta: number) {
        this.y += this.speed * delta;
    }
}

export default Obstacle;
