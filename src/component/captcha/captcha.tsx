import {useEffect, useRef} from 'react';
import * as PIXI from "pixi.js";
import {Application, ApplicationOptions, Text, TextStyle, TexturePool} from "pixi.js";
import Background from "./background.ts"
import Boat from "./boat.ts"
import Controls from "./controls.ts";
import ObstacleSpawner from "./obstacle-spawner.ts"
import Obstacle from "./obstacle.ts";
import Timer from "./timer.ts";

const assets = [
    "https://leszigotos.github.io/bottle.png",
    "https://leszigotos.github.io/cigarette.png",
    "https://leszigotos.github.io/tile.png",
    "https://leszigotos.github.io/boat.png",
];

class Captcha extends Application {

    private readonly background: Background;
    private readonly boat: Boat;
    private readonly controls: Controls;
    private readonly timer: Timer;
    private readonly text: Text;

    private keysPressed: { [key: string]: boolean } = {};
    private obstacles: Obstacle[] = [];
    private spawnerInterval: number = 0;

    constructor() {
        super();

        this.background = new Background();
        this.boat = new Boat();
        this.controls = new Controls();
        this.timer = new Timer();
        this.text = new Text();
    }

    async init(options?: Partial<ApplicationOptions>): Promise<void> {
        await super.init(options);

        TexturePool.textureOptions.scaleMode = 'nearest';

        await PIXI.Assets.load(assets);

        this.background.setSize(this.canvas.width, this.canvas.height);
        this.background.position.set(0, 0);

        this.boat.init();
        this.boat.x = this.canvas.width / 2;
        this.boat.y = this.canvas.height - this.boat.height - 10;

        this.text.zIndex = 100;
        this.text.style = new TextStyle({
            dropShadow: {
                color: '#000',
                blur: 2,
                angle: Math.PI / 6,
                distance: 2,
            },
            fill: '#fff',
            fontFamily: "Lucida Console",
            fontSize: 36,
            wordWrap: true
        });

        this.controls.position.set(0, this.canvas.height - this.controls.height);
        this.controls.setSize(this.canvas.width);

        this.stage.addChild(this.background);
        this.stage.addChild(this.boat);
        this.stage.addChild(this.timer);
        this.stage.addChild(this.text);
        this.stage.addChild(this.controls);

        window.addEventListener('keydown', (e) => {
            this.keysPressed[e.key] = true;
        });
        window.addEventListener('keyup', (e) => {
            this.keysPressed[e.key] = false;
        });

        this.spawnerInterval = setInterval(() => {
            const obstacle = ObstacleSpawner.spawn(this.stage);
            this.obstacles.push(obstacle);
            this.stage.addChild(obstacle);
        }, 750);

        this.ticker.add((time) => this.loop(time.deltaTime));

        return Promise.resolve();
    }

    private loop = (delta: number) => {
        const hasLost = this.boat.hitCount == 3;
        if (this.timer.isElapsed() || hasLost) {
            clearInterval(this.spawnerInterval);
            this.timer.stopTimer();

            this.text.text = hasLost ? "Vous êtes un robot" : "Bravo, vous êtes un humain !";
            this.text.position.set((this.canvas.width - this.text.width) / 2, (this.canvas.height - this.text.height) / 2);
            return;
        }

        this.background.move(delta);

        this.obstacles.forEach((obstacle, index, list) => {
            if (obstacle.y > this.canvas.height) {
                list.splice(index, 1);
                this.stage.removeChild(obstacle);
                return;
            }

            if (!this.boat.invincible && this.isColliding(this.boat, obstacle)) {
                this.boat.hit();
            }

            obstacle.move(delta);
        });

        if (this.keysPressed['ArrowLeft'] || this.controls.isLeftButtonPressed()) {
            this.boat.moveLeft(delta);
        }
        if (this.keysPressed['ArrowRight'] || this.controls.isRightButtonPressed()) {
            this.boat.moveRight(delta);
        }
    }

    private isColliding(object1: PIXI.Container, object2: PIXI.Container) {
        const bounds1 = object1.getBounds();
        const bounds2 = object2.getBounds();

        return (
            bounds1.x < bounds2.x + bounds2.width
            && bounds1.x + bounds1.width > bounds2.x
            && bounds1.y < bounds2.y + bounds2.height
            && bounds1.y + bounds1.height > bounds2.y
        );
    }
}

const PixiApp = () => {
    const pixiContainerRef = useRef<HTMLDivElement | null>(null);
    const appRef = useRef<Captcha | null>(new Captcha());

    useEffect(() => {
        if (!pixiContainerRef.current || !appRef.current) return;

        appRef.current.init({
            width: window.innerWidth < 600 ? window.innerWidth : window.innerWidth / 2,
            height: window.innerHeight / 2
        }).then(() => {
            if (!appRef.current) return;

            pixiContainerRef.current?.appendChild(appRef.current.canvas);
        })
    }, []);

    return <div ref={pixiContainerRef}></div>;
};

export default PixiApp;
