import { Vector } from "../math/Vector.js";
import { DRAW } from "../test.js";
export class GridMap {
    constructor(col, row) {
        this.size = 60;
        this.position = new Vector(window.innerWidth / 2, window.innerHeight / 2);
        this.selectedCell = undefined;
        this.col = col;
        this.row = row;
    }
    render() {
        let startX = this.position.x - (this.col * this.size) / 2;
        let startY = this.position.y - (this.row * this.size) / 2;
        for (let i = 0; i < this.col; i++) {
            for (let j = 0; j < this.row; j++) {
                DRAW.Rectangle(new Vector(startX + i * this.size, startY + j * this.size), this.size, this.size, "transparent", "black", 3);
            }
        }
    }
    convertToGridCoordinates(position, halfDimensions) {
        return position.subtract(halfDimensions).divide(this.size).rounded;
    }
}
