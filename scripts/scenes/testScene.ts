import { Collision } from "../engine/Collision.js";
import { Scene } from "../engine/Scene.js";
import { GridCoordinate, ScreenCoordinate } from "../engine/types/Coordinates.js";
import { MOUSE } from "../engine/utils/Mouse.js";
import { Vector } from "../math/Vector.js";
import { GridMap } from "../objects/GridMap.js";
import { DRAW } from "../test.js";

export class TestScene extends Scene {
    
    private Map: GridMap = new GridMap(10, 10);
    private hoveredCell: GridCoordinate | undefined = undefined as GridCoordinate | undefined;

    constructor(canvasElement: HTMLCanvasElement) {
        super(canvasElement);

        this.showFPS = true;
    }

    public override Start(){
        // Select & unselect cells with mouse clicks
        MOUSE.addEvent("mouseup", () => {
            let selectedCell = MOUSE.position.toGridCoordinate(this.Map.size, this.Map.offset);
           
            // Check if the clicked cell is in bounds
            if(!this.Map.isInBounds(selectedCell)){
                return;
            }
           
            // if a cell is already selected, unselect it
            if(this.Map.selectedCell?.equalsTo(selectedCell)){
                this.Map.selectedCell = undefined;
                return;
            }

            // If no cells are selected, mark the cell as selected
            this.Map.selectedCell = selectedCell;
        })

            // Highlight cells with mouse hover
            MOUSE.addEvent("mousemove", () => {
                this.hoveredCell = MOUSE.position.toGridCoordinate(this.Map.size, this.Map.offset);
        })     

    }

    public override Update(){
        if(this.Map.selectedCell !== undefined){
            DRAW.squareOnGrid(
                this.Map.selectedCell,
                this.Map.size, 
                "rgba(0, 0, 255, .35)",
                undefined,
                undefined,
                this.Map.offset
            )
        }

        if(this.hoveredCell !== undefined && this.Map.dimensions.half !== undefined){
            if(this.Map.isInBounds(this.hoveredCell)){
                DRAW.squareOnGrid(
                    this.hoveredCell,
                    this.Map.size, 
                    "rgba(0, 0, 0, .35)",
                    undefined,
                    undefined,
                    this.Map.offset
                )
            };
        }

        this.Map.render();
    }
}