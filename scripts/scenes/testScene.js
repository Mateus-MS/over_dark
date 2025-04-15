import { Scene } from "../engine/Scene.js";
export class TestScene extends Scene {
    constructor(canvasElement) {
        super(canvasElement);
        this.StartUpdate();
        this.showFPS = true;
    }
    Update() {
        this.Mouse.OnMouseDown = () => {
            console.log("Mouse down");
        };
        this.Draw.Circle(this.Mouse.position, 10, "black");
    }
}
