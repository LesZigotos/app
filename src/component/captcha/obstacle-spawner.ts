import * as PIXI from "pixi.js";
import Obstacle from "./obstacle.ts";

const textures = [
    "public/bottle.png",
    "public/cigarette.png"
];

class ObstacleSpawner {
    static spawn(parent: PIXI.Container): Obstacle {
        const randomTexture = textures[this.getRandom(0, textures.length)];
        const obstacle = new Obstacle(randomTexture);
        obstacle.speed = this.getRandom(1, 3);
        obstacle.x = this.getRandom(0, parent.width - obstacle.width);

        return obstacle;
    }

    private static getRandom = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

export default ObstacleSpawner;
