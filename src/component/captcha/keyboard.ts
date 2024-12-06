interface Key {
    which: number[];
    isAvailable: boolean;
    release: () => void | undefined;
    press: () => void | undefined;
    isPressed: boolean
    isReleased: boolean;
    pressHandler: ((event: KeyboardEvent) => void) | undefined;
    releaseHandler: undefined | ((event: KeyboardEvent) => void);
    unsubscribe: () => void | undefined;
}

const setKeyHandler = (index: number | number[]) => {
    const key: Key = {
        which: Number.isInteger(index) ? [index] : index,
        isDown: false,
        isUp: true,
        press: undefined,
        release: undefined,
        isAvailable: true
    };

    key.pressHandler = (event) => {
        if (key.which.includes(event.which)) {
            if (key.isReleased && key.press)
                key.press();

            key.isPressed = true;
            key.isReleased = false;

            event.preventDefault();
        }
    }

    key.releaseHandler = (event) => {
        if (key.which.includes(event.which)) {
            if (key.isPressed && key.release)
                key.release();

            key.isPressed = false;
            key.isReleased = true;

            event.preventDefault();
        }
    }

    const downListener = key.pressHandler.bind(key);
    const upListener = key.releaseHandler.bind(key);

    window.addEventListener("keydown", downListener, false);
    window.addEventListener("keyup", upListener, false);

    key.unsubscribe = function () {
        window.removeEventListener("keydown", downListener);
        window.removeEventListener("keyup", upListener);
    }

    return key;
}


namespace Keyboard {
    export const keys = {
        up: setKeyHandler([38, 90]), // ArrowUp & Z
        down: setKeyHandler([40, 83]), // ArrowDown & S
        left: setKeyHandler([37, 81]), // ArrowLeft & Q
        right: setKeyHandler([39, 68]), // ArrowRight & D
    };

    export const setLeftPressed = (handler: () => void): void => {
        keys.left.press = handler;
    }

    export const setRightPressed = (handler: () => void): void => {
        keys.right.press = handler;
    }
}

export default Keyboard;
