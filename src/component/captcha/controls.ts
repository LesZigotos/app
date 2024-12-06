import * as PIXI from 'pixi.js';

interface Button {
    shape: PIXI.Graphics;
    isPressed: boolean;
}

class Controls extends PIXI.Container {

    private readonly buttonLeft: Button;
    private readonly buttonRight: Button;

    constructor() {
        super();

        this.buttonLeft = this.createButton('left');
        this.buttonRight = this.createButton('right');

        this.buttonLeft.shape.on('pointerdown', () => {
            this.buttonLeft.shape.tint = 0xcccccc;
            this.buttonLeft.isPressed = true;
        });
        this.buttonLeft.shape.on('pointerup', () => {
            this.buttonLeft.shape.tint = 0xffffff;
            this.buttonLeft.isPressed = false;
        });

        this.buttonRight.shape.on('pointerdown', () => {
            this.buttonRight.shape.tint = 0xcccccc;
            this.buttonRight.isPressed = true;
        });
        this.buttonRight.shape.on('pointerup', () => {
            this.buttonRight.shape.tint = 0xffffff;
            this.buttonRight.isPressed = false;
        });

        this.addChild(this.buttonLeft.shape);
        this.addChild(this.buttonRight.shape);

        this.zIndex = 100;
    }

    private createButton(direction: string): Button {
        const shape = new PIXI.Graphics();

        const arrow = new PIXI.Graphics();
        arrow.beginFill(0xffffff);
        if (direction === 'left') {
            arrow.moveTo(45, -20);
            arrow.lineTo(15, 0);
            arrow.lineTo(45, 20);
        }
        else if (direction === 'right') {
            arrow.moveTo(-15, -20);
            arrow.lineTo(15, 0);
            arrow.lineTo(-15, 20);
        }
        arrow.closePath();
        arrow.endFill();

        arrow.x = 0;
        arrow.y = 0;

        shape.addChild(arrow);

        shape.eventMode = "static"
        shape.interactive = true;

        return { shape: shape, isPressed: false };
    }

    setSize(width: number) {
        // super.setSize(width, height);

        this.buttonLeft.shape.x = 0;
        this.buttonRight.shape.x = width - this.buttonRight.shape.width;
    }

    isLeftButtonPressed() {
        return this.buttonLeft.isPressed;
    }

    isRightButtonPressed() {
        return this.buttonRight.isPressed;
    }
}

export default Controls;
