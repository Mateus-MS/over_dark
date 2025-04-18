import { SCREENSIZE } from "../engine/Engine.js";
import { GridCoordinate } from "../engine/types/Coordinates.js";
import { Vector } from "../math/Vector.js"

export class Draw{
    private c: CanvasRenderingContext2D

    constructor(context: CanvasRenderingContext2D){
        this.c = context
    }

    public squareOnGrid(position: GridCoordinate, size: number, color: string = "black", borderColor?: string, borderWidth: number = 0){
        if(SCREENSIZE.half === undefined) return;
        
        this.c.beginPath();
        this.c.fillStyle = color;
        if(borderColor){
            this.c.strokeStyle = borderColor;
        }
        this.c.lineWidth = borderWidth;


        this.c.rect(position.x * size + SCREENSIZE.half.x, position.y * size + SCREENSIZE.half.y, size, size);
        
        
        this.c.fill();
        if(borderWidth > 0){
            this.c.stroke();
        }
        this.c.closePath();
    }

    public Line(pa: Vector, pb: Vector, color: string = "black", width: number = 1){
        this.c.beginPath();
        this.c.strokeStyle = color;
        this.c.lineWidth = width;
        this.c.moveTo(pa.x, pa.y);
        this.c.lineTo(pb.x, pb.y);
        this.c.stroke();
        this.c.closePath();
    }

    public Rectangle(position: Vector, width: number, height: number, color: string = "black", borderColor?: string, borderWidth: number = 0){
        this.c.beginPath();
        this.c.fillStyle = color;
        if(borderColor){
            this.c.strokeStyle = borderColor;
        }
        this.c.lineWidth = borderWidth;
        this.c.rect(position.x, position.y, width, height);
        this.c.fill();
        if(borderWidth > 0){
            this.c.stroke();
        }
        this.c.closePath();
    }

    public Circle(position: Vector, radius: number, color: string = "black", borderColor?: string, borderWidth: number = 0){
        this.c.beginPath();
        this.c.fillStyle = color;
        if(borderColor){
            this.c.strokeStyle = borderColor;
        }
        this.c.lineWidth = borderWidth;
        this.c.arc(position.x, position.y, radius, 0, Math.PI * 2);
        this.c.fill();
        if(borderWidth > 0){
            this.c.stroke();
        }
        this.c.closePath();
    }

    public Text(text: string, position: Vector, color: string = "black", fontSize: number = 16, fontFamily: string = "Arial"){
        this.c.beginPath();
        this.c.font = "20px Arial";
        this.c.fillStyle = color;
        this.c.fillText(text, position.x, position.y);
        this.c.closePath();
    }
}