export class Vector {
    static zero() {
        return new Vector(0, 0);
    }
    constructor(x, y) {
        this.half = undefined;
        this.x = x;
        this.y = y;
    }
    add(data, b = undefined) {
        if (typeof data === "number") {
            if (b !== undefined) {
                return new Vector(this.x + data, this.y + b);
            }
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
    differentTo(vector) {
        return this.x !== vector.x || this.y !== vector.y;
    }
    calcHalf() {
        this.half = new Vector(this.x / 2, this.y / 2);
    }
    getHalf(save = false) {
        // If hald is already calculated, return it
        if (this.half !== undefined) {
            return this.half;
        }
        // If save is true, save the half value then return it
        if (save) {
            this.half = new Vector(this.x / 2, this.y / 2);
            return this.half;
        }
        // If save is false, return the half value without saving it
        return new Vector(this.x / 2, this.y / 2);
    }
    getFloor() {
        return new Vector(Math.floor(this.x), Math.floor(this.y));
    }
    getRounded() {
        return new Vector(Math.round(this.x), Math.round(this.y));
    }
}
