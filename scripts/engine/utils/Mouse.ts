import { Vector } from "../../math/Vector.js";

class Mouse {
    public position: Vector = new Vector(0, 0);
    public isMouseDown: boolean = false;

    private constructor(){
    }

    public static Initiate(): Mouse {
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

    public OnMouseDown(){
        throw new Error("OnMouseDown not implemented");
    }

    public OnMouseUp() {
        throw new Error("OnMouseUp not implemented");
    }

    public OnMouseMove() {
        throw new Error("OnMouseMove not implemented");
    }
}

export const MOUSE: Mouse = Mouse.Initiate();