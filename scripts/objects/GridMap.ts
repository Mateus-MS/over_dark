import { GridCoordinate, ScreenCoordinate } from "../engine/types/Coordinates.js";
import { DRAW } from "../test.js";

// BUG: If the gris is ODD, may the cells not be centered in the screen, and the hover effect will be off by half a cell.

export class GridMap{
    public dimensions: GridCoordinate;
    public size: number = 40;

    public offset: ScreenCoordinate = new ScreenCoordinate(0, 0);

    constructor(col: number, row: number){
        this.dimensions = new GridCoordinate(col, row);
        this.dimensions.calcHalf();
    }

    public selectedCell: GridCoordinate | undefined = undefined as GridCoordinate | undefined;

    public render(){
        if (this.dimensions.half === undefined) return;

        for(let i = -this.dimensions.half.x; i < this.dimensions.half.x; i++){
            for(let j = -this.dimensions.half.y; j < this.dimensions.half.y; j++){
                DRAW.squareOnGrid(
                    new GridCoordinate(i, j),
                    this.size, 
                    "transparent",
                    "black", 
                    3
                )
            }
        }

        
    }

}