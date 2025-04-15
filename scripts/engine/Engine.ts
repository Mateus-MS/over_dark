import { Vector } from "../math/Vector.js"
import { DRAW } from "../test.js";
import { Mouse } from "./utils/Mouse.js";

export class Engine {
    
    private canvas: HTMLCanvasElement;
    public c: CanvasRenderingContext2D | null;
    private updateLoopInterval: number | null = null;

    public readonly frameRate: number = 60;

    public Mouse: Mouse = Mouse.Initiate();

    // Variables for FPS display
    private LastSecond: number | undefined = undefined;
    public  showFPS: boolean = false;
    private FrameCount: number = 0;
    private LastFPS: number = 0;

    constructor(canvas: HTMLCanvasElement, frameRate: number = 60) {
        this.canvas = canvas;
        this.frameRate = frameRate;
        this.c = this.canvas.getContext('2d');

        // Set up the canvas sie
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    public StartUpdate(){
        this.updateLoopInterval = setInterval(() => {
            this.UpdateLoop();
        }, 1000 / this.frameRate);
    }

    public Update(){
        throw new Error("Update method not implemented");    
    }

    private UpdateLoop(){
        // When undefined, start the FPS counter
        if (this.LastSecond === undefined){
            this.LastSecond = new Date().getSeconds();
        }

        // Get the current second
        let currentSecond = new Date().getSeconds();

        // If a second has passed, update the FPS counter
        // and reset the frame count
        if (currentSecond - this.LastSecond >= 1){
            this.LastSecond = currentSecond;
            this.LastFPS = this.FrameCount;
            this.FrameCount = 0;
        } else {
            // Otherwise, increment the frame count
            this.FrameCount++;
        }

        this.c!.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if (this.showFPS){
            DRAW.Text("FPS: " + this.LastFPS, new Vector(10, 25));
        }
        
        this.Update();
    }
}