import { Engine } from "./Engine.js";

export class Scene extends Engine {
    constructor(canvas: HTMLCanvasElement, frameRate: number = 60) {
        super(canvas, frameRate);
    }

    public override Update(): void {
        console.log("Scene update")
    }
}