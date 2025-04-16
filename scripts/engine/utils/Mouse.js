import { Vector } from "../../math/Vector.js";
class Mouse {
    constructor() {
        this.position = new Vector(0, 0);
        this.isMouseDown = false;
    }
    static Initiate() {
        let mouse = new Mouse();
        window.addEventListener("mousemove", (e) => {
            mouse.position.x = e.clientX;
            mouse.position.y = e.clientY;
            mouse.OnMouseMove();
        });
        window.addEventListener("mousedown", (e) => {
            mouse.isMouseDown = true;
            mouse.OnMouseDown();
        });
        window.addEventListener("mouseup", (e) => {
            mouse.isMouseDown = false;
            mouse.OnMouseUp();
        });
        return mouse;
    }
    OnMouseDown() {
        throw new Error("OnMouseDown not implemented");
    }
    OnMouseUp() {
        throw new Error("OnMouseUp not implemented");
    }
    OnMouseMove() {
        throw new Error("OnMouseMove not implemented");
    }
}
export const MOUSE = Mouse.Initiate();
