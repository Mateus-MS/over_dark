import { Vector } from "../../math/Vector.js";
import { SCREENSIZE } from "../Engine.js";

/**
 * This kind of coordinate is the actual coordinate of the screen.
 * 
 * As an example, the coordinate (0, 0) is on the top left corner of the screen.
 */
export class ScreenCoordinate extends Vector{
    constructor(x: number, y: number){
        super(x, y);
    }

    public toGridCoordinate(size: number, offset: ScreenCoordinate): GridCoordinate {
        let x = Math.floor((this.x - offset.x) / size);
        let y = Math.floor((this.y - offset.y) / size);

        return new GridCoordinate(x , y);
    }

    public toGameCoordinate(): GameCoordinate {
        return new GameCoordinate(this.x, this.y).subtract(SCREENSIZE.half) as GameCoordinate;
    }
}

/**
 * This kind of coordinate is the actual coordinate of the game.
 * 
 * As an example, the coordinate (0, 0) is on the center of the screen.
 */
export class GameCoordinate extends Vector {
    constructor(x: number, y: number){
        super(x, y);
    }

    public toScreenCoordinate(): ScreenCoordinate {
        return new ScreenCoordinate(this.x, this.y).add(SCREENSIZE.half) as ScreenCoordinate;
    }
}

/**
 * This kind of coordinate is the actual coordinate of the grid.
 * 
 * So a grid (10, 10) will be from (-5, -5) top left > (5, 5) bottom down. The center being (0, 0).
 */
export class GridCoordinate extends Vector{

    constructor(x: number, y: number){
        super(x, y);
    }

    public toScreenCoordinate(size: number): ScreenCoordinate {
        if(SCREENSIZE.half === undefined){
            throw new Error("SCREENSIZE.half is undefined. Make sure to set SCREENSIZE before using this method.");
        };
        
        let x = this.x * size + SCREENSIZE.half.x;
        let y = this.y * size + SCREENSIZE.half.y;

        return new ScreenCoordinate(x, y);
    }

}