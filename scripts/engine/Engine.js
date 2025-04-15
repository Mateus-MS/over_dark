import { Vector } from "../math/Vector.js";
import { Draw } from "../utils/Draw.js";
import { Mouse } from "./utils/Mouse.js";
export class Engine {
    constructor(canvas, frameRate = 60) {
        this.updateLoopInterval = null;
        this.frameRate = 60;
        this.Mouse = Mouse.Initiate();
        // Variables for FPS display
        this.LastSecond = undefined;
        this.showFPS = false;
        this.FrameCount = 0;
        this.LastFPS = 0;
        this.canvas = canvas;
        this.frameRate = frameRate;
        this.c = this.canvas.getContext('2d');
        // Set up the canvas sie
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.Draw = new Draw(this.c);
    }
    StartUpdate() {
        this.updateLoopInterval = setInterval(() => {
            this.Update();
        }, 1000 / this.frameRate);
    }
    Update() {
        throw new Error("Update method not implemented");
    }
    UpdateLoop() {
        // When undefined, start the FPS counter
        if (this.LastSecond === undefined) {
            this.LastSecond = new Date().getSeconds();
        }
        // Get the current second
        let currentSecond = new Date().getSeconds();
        // If a second has passed, update the FPS counter
        // and reset the frame count
        if (currentSecond - this.LastSecond >= 1) {
            this.LastSecond = currentSecond;
            this.LastFPS = this.FrameCount;
            this.FrameCount = 0;
        }
        else {
            // Otherwise, increment the frame count
            this.FrameCount++;
        }
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.showFPS) {
            this.Draw.Text("FPS: " + this.LastFPS, new Vector(10, 25));
        }
        this.Update();
    }
}
