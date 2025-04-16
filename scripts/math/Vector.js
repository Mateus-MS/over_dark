export class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    add(data) {
        if (typeof data === "number") {
            return new Vector(this.x + data, this.y + data);
        }
        if (data instanceof Vector) {
            return new Vector(this.x + data.x, this.y + data.y);
        }
        throw new Error("Invalid argument type. Expected number or Vector.");
    }
    subtract(data) {
        if (typeof data === "number") {
            return new Vector(this.x - data, this.y - data);
        }
        if (data instanceof Vector) {
            return new Vector(this.x - data.x, this.y - data.y);
        }
        throw new Error("Invalid argument type. Expected number or Vector.");
    }
    divide(data) {
        if (typeof data === "number") {
            return new Vector(this.x / data, this.y / data);
        }
        if (data instanceof Vector) {
            return new Vector(this.x / data.x, this.y / data.y);
        }
        throw new Error("Invalid argument type. Expected number or Vector.");
    }
    multiply(data) {
        if (typeof data === "number") {
            return new Vector(this.x * data, this.y * data);
        }
        if (data instanceof Vector) {
            return new Vector(this.x * data.x, this.y * data.y);
        }
        throw new Error("Invalid argument type. Expected number or Vector.");
    }
    min(vector) {
        return new Vector(Math.min(this.x, vector.x), Math.min(this.y, vector.y));
    }
    max(vector) {
        return new Vector(Math.max(this.x, vector.x), Math.max(this.y, vector.y));
    }
    equalsTo(vector) {
        return this.x === vector.x && this.y === vector.y;
    }
    get rounded() {
        return new Vector(Math.round(this.x), Math.round(this.y));
    }
    get half() {
        return new Vector(this.x / 2, this.y / 2);
    }
}
