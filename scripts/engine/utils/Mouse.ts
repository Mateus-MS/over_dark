import { Vector } from "../../math/Vector.js";

export class Mouse {
    public position: Vector = new Vector(0, 0);
    public isMouseDown: boolean = false;

    private constructor(){
    }

    public static Initiate(): Mouse {
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

    public OnMouseDown(){
        throw new Error("OnMouseDown not implemented");
    }
}