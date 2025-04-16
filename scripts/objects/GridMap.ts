import { Vector } from "../math/Vector.js";
import { DRAW } from "../test.js";

export class GridMap{
    public col: number;
    public row: number;
    public size: number = 60;

    private position: Vector = new Vector(window.innerWidth / 2, window.innerHeight / 2);

    constructor(col: number, row: number){
        this.col = col;
        this.row = row;
    }

    public selectedCell: Vector | undefined = undefined as Vector | undefined;

    public render(){
        let startX = this.position.x - (this.col * this.size) / 2;
        let startY = this.position.y - (this.row * this.size) / 2;

        for(let i = 0; i < this.col; i++){
            for(let j = 0; j < this.row; j++){
                DRAW.Rectangle(
                    new Vector(
                        startX + i * this.size,
                        startY + j * this.size
                    ), 
                    this.size, 
                    this.size, 
                    "transparent",
                    "black", 
                    3
                )
            }
        }
    }

    public convertToGridCoordinates(position: Vector, halfDimensions: Vector): Vector{
        return position.subtract(halfDimensions).divide(this.size).rounded as Vector
    }

}