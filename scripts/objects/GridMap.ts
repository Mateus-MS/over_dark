import { Vector } from "../math/Vector.js";
import { DRAW } from "../test.js";

export class GridMap{
    private col: number;
    private row: number;
    private size: number = 20;

    protected position: Vector = new Vector(window.innerWidth / 2, window.innerHeight / 2);
    
    constructor(col: number, row: number){
        this.col = col;
        this.row = row;
    }

    public render(){
        for(let i = 0; i < this.col; i++){
            DRAW.Rectangle(new Vector(i * 20, 0), 17, 17, "green")
        }
    }
}