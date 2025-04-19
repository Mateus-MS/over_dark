export class Collision {
    static PointInSquare(point, square, size) {
        return point.x >= square.x && point.x <= square.x + size &&
            point.y >= square.y && point.y <= square.y + size;
    }
}
