import { Engine } from "./Engine.js";
export class Scene extends Engine {
    constructor(canvas, frameRate = 60) {
        super(canvas, frameRate);
        this.Start();
        this.StartUpdate();
    }
    Update() {
        console.log("Scene update");
    }
}
