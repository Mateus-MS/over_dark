import { Vector } from "../../math/Vector.js";
export class Mouse {
    constructor() {
        this.position = new Vector(0, 0);
        this.isMouseDown = false;
    }
    static Initiate() {
        const mouse = new Mouse();
        window.addEventListener("mousemove", (e) => {
            mouse.position.x = e.clientX;
            mouse.position.y = e.clientY;
        });
        window.addEventListener("mousedown", (e) => {
            mouse.isMouseDown = true;
            mouse.OnMouseDown();
        });
        window.addEventListener("mouseup", (e) => {
            mouse.isMouseDown = false;
        });
        return mouse;
    }
    OnMouseDown() {
        throw new Error("OnMouseDown not implemented");
    }
}
