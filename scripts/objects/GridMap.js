import { Collision } from "../engine/Collision.js";
import { GridCoordinate, ScreenCoordinate } from "../engine/types/Coordinates.js";
import { DRAW } from "../test.js";
export class GridMap {
    constructor(col, row) {
        this.size = 40;
        this.offset = new ScreenCoordinate(0, 0);
        this.dimensions = new GridCoordinate(col, row);
        this.dimensions.calcHalf();
    }
    render() {
        if (this.dimensions.half === undefined)
            return;
        for (let i = -this.dimensions.half.x; i <= this.dimensions.half.x; i++) {
            for (let j = -this.dimensions.half.y; j <= this.dimensions.half.y; j++) {
                DRAW.squareOnGrid(new GridCoordinate(i, j), this.size, "transparent", "black", 3, this.offset);
            }
        }
    }
    isInBounds(coordinate) {
        if (this.dimensions.half === undefined) {
            throw new Error("GridMap dimensions are not set. Make sure to set them before using this method.");
        }
        return Collision.PointInSquare(coordinate, this.dimensions.half.multiply(-1), this.dimensions.x);
    }
}
