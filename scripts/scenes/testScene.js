import { Scene } from "../engine/Scene.js";
import { GridMap } from "../objects/GridMap.js";
import { DRAW } from "../test.js";
export class TestScene extends Scene {
    constructor(canvasElement) {
        super(canvasElement);
        this.Map = new GridMap(10, 10);
        this.StartUpdate();
        this.showFPS = true;
    }
    Update() {
        this.Mouse.OnMouseDown = () => {
            console.log("Mouse down");
        };
        this.Map.render();
        DRAW.Circle(this.Mouse.position, 10, "black");
    }
}
