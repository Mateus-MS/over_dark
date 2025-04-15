import { Vector } from "../math/Vector.js";
import { DRAW } from "../test.js";
export class GridMap {
    constructor(col, row) {
        this.size = 20;
        this.position = new Vector(window.innerWidth / 2, window.innerHeight / 2);
        this.col = col;
        this.row = row;
    }
    render() {
        for (let i = 0; i < this.col; i++) {
            DRAW.Rectangle(new Vector(i * 20, 0), 17, 17, "green");
        }
    }
}
