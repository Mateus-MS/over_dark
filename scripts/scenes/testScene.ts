import { Scene } from "../engine/Scene.js";
import { GridMap } from "../objects/GridMap.js";
import { DRAW } from "../test.js";

export class TestScene extends Scene {
    
    private Map: GridMap = new GridMap(10, 10);

    constructor(canvasElement: HTMLCanvasElement) {
        super(canvasElement);

        this.StartUpdate();
        this.showFPS = true;
    }

    public override Update(){
        this.Mouse.OnMouseDown = () => {
            console.log("Mouse down");
        }

        this.Map.render();
        DRAW.Circle(this.Mouse.position, 10, "black");
    }
}