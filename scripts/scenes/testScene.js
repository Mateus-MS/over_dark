import { SCREENSIZE } from "../engine/Engine.js";
import { Scene } from "../engine/Scene.js";
import { GridCoordinate } from "../engine/types/Coordinates.js";
import { MOUSE } from "../engine/utils/Mouse.js";
import { Vector } from "../math/Vector.js";
import { GridMap } from "../objects/GridMap.js";
import { DRAW } from "../test.js";
export class TestScene extends Scene {
    constructor(canvasElement) {
        super(canvasElement);
        this.Map = new GridMap(10, 10);
        this.hoveredCell = undefined;
        this.selectedCell = undefined;
        this.selectedArea = [];
        this.showFPS = true;
    }
    Start() {
        MOUSE.addEvent("mousedown", () => {
            if (this.selectedArea.length === 0) {
                this.selectedArea.push(this.hoveredCell);
            }
            else {
                this.selectedArea = [];
            }
        });
        // Select & unselect cells with mouse clicks
        MOUSE.addEvent("mouseup", () => {
            if (this.selectedArea.length === 1) {
                this.selectedArea.push(this.hoveredCell);
            }
            console.log(this.selectedArea);
            // let selectedCell = MOUSE.position.toGridCoordinate(this.Map.size, this.Map.offset);
            // Check if the clicked cell is in bounds
            // if(!this.Map.isInBounds(selectedCell)){
            //     return;
            // }
            // if a cell is already selected, unselect it
            // if(this.selectedCell?.equalsTo(selectedCell)){
            //     this.selectedCell = undefined;
            //     return;
            // }
            // If no cells are selected, mark the cell as selected
            // this.selectedCell = selectedCell;
        });
        // Highlight cells with mouse hover
        MOUSE.addEvent("mousemove", () => {
            this.hoveredCell = MOUSE.position.toGridCoordinate(this.Map.size, this.Map.offset);
        });
    }
    Update() {
        /**
         * The end position will have two different behaviors:
         *
         * 1. If the mouse is pressed (MouseUp don't happen yet), the end position will be the mouse position.
         * 2. If the mouse is released, the end position will be the second object in the selectedArea array.
         */
        let endPosition = undefined;
        // If the mouse still pressed
        if (this.selectedArea.length === 1) {
            endPosition = MOUSE.position.toGridCoordinate(this.Map.size, this.Map.offset);
        }
        else 
        // If the mouse is released 
        if (this.selectedArea.length === 2) {
            endPosition = this.selectedArea[1];
        }
        if (endPosition !== undefined) {
            // TODO: The way it works for now is by ordering the coordinates in the array by their x and y values crescently.
            // CHECK: if this is more performatic than calculating the xDiff and directions. Or if there is a smarter way to do this.
            let minX = Math.min(this.selectedArea[0].x, endPosition.x);
            let minY = Math.min(this.selectedArea[0].y, endPosition.y);
            let maxX = Math.max(this.selectedArea[0].x, endPosition.x);
            let maxY = Math.max(this.selectedArea[0].y, endPosition.y);
            for (let i = minX; i <= maxX; i++) {
                for (let j = minY; j <= maxY; j++) {
                    DRAW.squareOnGrid(new GridCoordinate(i, j), this.Map.size, "rgba(0, 0, 255, .35)", undefined, undefined, this.Map.offset);
                }
            }
        }
        if (this.selectedArea !== undefined && this.selectedArea.length === 2) {
            // Show on screen the selected area
            if (this.selectedArea[0].differentTo(this.selectedArea[1])) {
                DRAW.Text(`Selected area: [${this.selectedArea[0].x}, ${this.selectedArea[0].y}], [${this.selectedArea[1].x}, ${this.selectedArea[1].y}]`, new Vector(SCREENSIZE.x - 20, 65), "black", undefined, undefined, "right");
            }
            // Draw the selected cell's coordinates
            if (this.selectedArea[0].equalsTo(this.selectedArea[1])) {
                DRAW.Text("Selected: " + this.selectedArea[0].x + ", " + this.selectedArea[0].y, new Vector(SCREENSIZE.x - 20, 65), "black", undefined, undefined, "right");
            }
        }
        if (this.hoveredCell !== undefined && this.Map.dimensions.half !== undefined) {
            if (this.Map.isInBounds(this.hoveredCell)) {
                // Highlight the hovered cell
                DRAW.squareOnGrid(this.hoveredCell, this.Map.size, "rgba(0, 0, 0, .35)", undefined, undefined, this.Map.offset);
                // Draw the hovered cell's coordinates
                DRAW.Text("Hovered: " + this.hoveredCell.x + ", " + this.hoveredCell.y, new Vector(SCREENSIZE.x - 20, 35), "black", undefined, undefined, "right");
            }
            ;
        }
        this.Map.render();
    }
}
