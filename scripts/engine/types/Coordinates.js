import { Vector } from "../../math/Vector.js";
/**
 * This class is used to represent EXPLICIT that this vector is containing coordinates in screen format.
 * It is used to avoid confusion with grid and screen coordinates.
 */
export class ScreenCoordinate extends Vector {
    constructor(x, y) {
        super(x, y);
    }
    toGridCoordinate(size) {
        let x = Math.floor(this.x / size);
        let y = Math.floor(this.y / size);
        return new GridCoordinate(x, y);
    }
}
/**
 * This class is used to represent EXPLICIT that this vector is containing coordinates in grid format.
 * It is used to avoid confusion with screen and grid coordinates.
 */
export class GridCoordinate extends Vector {
    constructor(x, y) {
        super(x, y);
    }
    toScreenCoordinate(size) {
        let x = Math.floor(this.x * size);
        let y = Math.floor(this.y * size);
        return new ScreenCoordinate(x, y);
    }
}
