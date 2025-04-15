import { Engine } from "./Engine.js";
export class Scene extends Engine {
    constructor(canvas, frameRate = 60) {
        super(canvas, frameRate);
    }
}
