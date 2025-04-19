import { Vector } from "../math/Vector.js";

export class Collision {
    static PointInSquare(point: Vector, square: Vector, size: number): boolean {
        return point.x >= square.x && point.x <= square.x + size && 
               point.y >= square.y && point.y <= square.y + size;
    }
}