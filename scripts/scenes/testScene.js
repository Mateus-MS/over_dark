import { Scene } from "../engine/Scene.js";
import { MOUSE } from "../engine/utils/Mouse.js";
import { GridMap } from "../objects/GridMap.js";
import { DRAW } from "../test.js";
export class TestScene extends Scene {
    constructor(canvasElement) {
        super(canvasElement);
        this.Map = new GridMap(11, 11);
        this.hoveredCell = undefined;
        this.showFPS = true;
    }
    Start() {
        MOUSE.OnMouseDown = () => {
            var _a;
            let selectedCell = this.Map.convertToGridCoordinates(MOUSE.position, this.halfDimensions);
            // if a cell is already selected, unselect it
            if ((_a = this.Map.selectedCell) === null || _a === void 0 ? void 0 : _a.equalsTo(selectedCell)) {
                this.Map.selectedCell = undefined;
                return;
            }
            // If no cells are selected, mark the cell as selected
            this.Map.selectedCell = selectedCell;
        };
        MOUSE.OnMouseUp = () => {
        };
        MOUSE.OnMouseMove = () => {
            this.hoveredCell = this.Map.convertToGridCoordinates(MOUSE.position, this.halfDimensions);
        };
    }
    Update() {
        if (this.Map.selectedCell !== undefined) {
            DRAW.Rectangle(this.Map.selectedCell.multiply(this.Map.size).add(this.halfDimensions).subtract(this.Map.size / 2), this.Map.size, this.Map.size, "rgba(0, 0, 255, .35)");
        }
        if (this.hoveredCell !== undefined) {
            DRAW.Rectangle(this.hoveredCell.multiply(this.Map.size).add(this.halfDimensions).subtract(this.Map.size / 2), this.Map.size, this.Map.size, "rgba(0, 0, 0, .35)");
        }
        this.Map.render();
    }
}
