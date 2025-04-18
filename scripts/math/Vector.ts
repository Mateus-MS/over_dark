export class Vector {

    public x: number;
    public y: number;
    public half: Vector | undefined = undefined as Vector | undefined;

    public static zero(): Vector {
        return new Vector(0, 0);
    }

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public add<T>(data: T, b: number | undefined = undefined as number | undefined): T{
        if(typeof data === "number") {
            if(b !== undefined) {
                return new Vector(this.x + data, this.y + b) as T;
            }
            return new Vector(this.x + data, this.y + data) as T;
        }

        if(data instanceof Vector) {
            return new Vector(this.x + data.x, this.y + data.y) as T;
        }

        throw new Error("Invalid argument type. Expected number or Vector.");
    }

    public subtract<T>(data: T): Vector{
        if(typeof data === "number") {
            return new Vector(this.x - data, this.y - data);
        }

        if(data instanceof Vector) {
            return new Vector(this.x - data.x, this.y - data.y);
        }

        throw new Error("Invalid argument type. Expected number or Vector.");
    }

    public divide<T>(data: T): Vector{
        if(typeof data === "number") {
            return new Vector(this.x / data, this.y / data);
        }

        if(data instanceof Vector) {
            return new Vector(this.x / data.x, this.y / data.y);
        }

        throw new Error("Invalid argument type. Expected number or Vector.");
    }

    public multiply<T>(data: T): Vector{
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

    public calcHalf() {
        this.half = new Vector(this.x / 2, this.y / 2);
    }

    public getHalf(save: boolean = false): Vector {
        // If hald is already calculated, return it
        if (this.half !== undefined) {
            return this.half;
        }
        
        // If save is true, save the half value then return it
        if(save){
            this.half = new Vector(this.x / 2, this.y / 2);
            return this.half;
        }

        // If save is false, return the half value without saving it
        return new Vector(this.x / 2, this.y / 2);
    }

    public getFloor(): Vector {
        return new Vector(Math.floor(this.x), Math.floor(this.y));
    }

    public getRounded(): Vector {
        return new Vector(Math.round(this.x), Math.round(this.y));
    }
    
}