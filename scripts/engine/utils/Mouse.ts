import { SCREENSIZE } from "../Engine.js";
import { ScreenCoordinate } from "../types/Coordinates.js";

class Mouse {
    /**
     * The position is not EXACTLY in screen cordinates. If it was in screen coordinates, top left would be (0, 0).
     * But in this case, (0, 0) is the center of the screen.
     */
    public position: ScreenCoordinate = new ScreenCoordinate(0, 0);
    public isMouseDown: boolean = false;

    public constructor(){
        this.initiateListeners();
    }

    private initiateListeners() {
        window.addEventListener("mousemove", (e) => {
            if(SCREENSIZE.half === undefined) return;

            this.position.x = e.clientX - SCREENSIZE.half.x;
            this.position.y = e.clientY - SCREENSIZE.half.y;
        });
    
        window.addEventListener("mousedown", (e) => {
            this.isMouseDown = true;
        });
    
        window.addEventListener("mouseup", (e) => {
            this.isMouseDown = false;
        });
    }

    public addEvent(event: string, callback: (this: Window, ev: MouseEvent) => any){
        switch(event){
            case "mousedown":
                window.addEventListener("mousedown", callback);
                break;
            case "mouseup":
                window.addEventListener("mouseup", callback);
                break;
            case "mousemove":
                window.addEventListener("mousemove", callback);
                break;
            default:
                throw new Error(`Unknown event: ${event}`);
        }
    }

}

export const MOUSE: Mouse = new Mouse();