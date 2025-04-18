import { Scene } from "../engine/Scene.js";
import { MOUSE } from "../engine/utils/Mouse.js";
import { GridMap } from "../objects/GridMap.js";
import { DRAW } from "../test.js";
export class TestScene extends Scene {
    constructor(canvasElement) {
        super(canvasElement);
        this.Map = new GridMap(10, 10);
        this.hoveredCell = undefined;
        this.showFPS = true;
    }
    Start() {
        // Select & unselect cells with mouse clicks
        MOUSE.addEvent("mouseup", () => {
            var _a;
            let selectedCell = MOUSE.position.toGridCoordinate(this.Map.size);
            // if a cell is already selected, unselect it
            if ((_a = this.Map.selectedCell) === null || _a === void 0 ? void 0 : _a.equalsTo(selectedCell)) {
                this.Map.selectedCell = undefined;
                return;
            }
            // If no cells are selected, mark the cell as selected
            this.Map.selectedCell = selectedCell;
        });
        // Highlight cells with mouse hover
        MOUSE.addEvent("mousemove", () => {
            this.hoveredCell = MOUSE.position.toGridCoordinate(this.Map.size);
            console.log(this.hoveredCell);
        });
    }
    Update() {
        if (this.Map.selectedCell !== undefined) {
            DRAW.Rectangle(this.Map.selectedCell.toScreenCoordinate(this.Map.size), this.Map.size, this.Map.size, "rgba(0, 0, 255, .35)");
        }
        if (this.hoveredCell !== undefined && this.Map.dimensions.half !== undefined) {
            if (this.hoveredCell.x >= -this.Map.dimensions.half.x &&
                this.hoveredCell.x < this.Map.dimensions.half.x &&
                this.hoveredCell.y >= -this.Map.dimensions.half.y &&
                this.hoveredCell.y < this.Map.dimensions.half.y) {
                DRAW.squareOnGrid(this.hoveredCell, this.Map.size, "rgba(0, 0, 0, .35)");
            }
            ;
        }
        this.Map.render();
    }
}
