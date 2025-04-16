export class Vector {
    constructor(public x: number, public y: number) {
        this.x = x;
        this.y = y;
    }

    public add(number: number): Vector;
    public add(vector: Vector): Vector;
    public add(data: unknown): Vector {
        if(typeof data === "number") {
            return new Vector(this.x + data, this.y + data);
        }

        if(data instanceof Vector) {
            return new Vector(this.x + data.x, this.y + data.y);
        }

        throw new Error("Invalid argument type. Expected number or Vector.");
    }

    public subtract(number: number): Vector;
    public subtract(Vector: Vector): Vector;
    public subtract(data: unknown): Vector {
        if(typeof data === "number") {
            return new Vector(this.x - data, this.y - data);
        }

        if(data instanceof Vector) {
            return new Vector(this.x - data.x, this.y - data.y);
        }

        throw new Error("Invalid argument type. Expected number or Vector.");
    }

    public divide(vector: Vector): Vector;
    public divide(number: number): Vector;
    public divide(data: unknown): Vector {
        if(typeof data === "number") {
            return new Vector(this.x / data, this.y / data);
        }

        if(data instanceof Vector) {
            return new Vector(this.x / data.x, this.y / data.y);
        }

        throw new Error("Invalid argument type. Expected number or Vector.");
    }

    public multiply(vector: Vector): Vector;
    public multiply(number: number): Vector;
    public multiply(data: unknown): Vector {
        if(typeof data === "number") {
            return new Vector(this.x * data, this.y * data);
        }

        if(data instanceof Vector) {
            return new Vector(this.x * data.x, this.y * data.y);
        }

        throw new Error("Invalid argument type. Expected number or Vector.");
    }

    public min(vector: Vector): Vector {
        return new Vector(Math.min(this.x, vector.x), Math.min(this.y, vector.y));
    }

    public max(vector: Vector): Vector {
        return new Vector(Math.max(this.x, vector.x), Math.max(this.y, vector.y));
    }

    public equalsTo(vector: Vector): boolean {
        return this.x === vector.x && this.y === vector.y;
    }

    public get rounded(): Vector {
        return new Vector(Math.round(this.x), Math.round(this.y));
    }

    public get half(): Vector {
        return new Vector(this.x / 2, this.y / 2);
    }
}