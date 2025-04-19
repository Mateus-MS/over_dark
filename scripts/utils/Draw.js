import { SCREENSIZE } from "../engine/Engine.js";
export class Draw {
    constructor(context) {
        this.c = context;
    }
    squareOnGrid(position, size, color = "black", borderColor, borderWidth = 0, offset) {
        if (SCREENSIZE.half === undefined)
            return;
        this.c.beginPath();
        this.c.fillStyle = color;
        if (borderColor) {
            this.c.strokeStyle = borderColor;
        }
        this.c.lineWidth = borderWidth;
        let pos = position.toScreenCoordinate(size);
        if (offset !== undefined) {
            pos = pos.add(offset);
        }
        this.c.rect(pos.x, pos.y, size, size);
        this.c.fill();
        if (borderWidth > 0) {
            this.c.stroke();
        }
        this.c.closePath();
    }
    Line(pa, pb, color = "black", width = 1) {
        this.c.beginPath();
        this.c.strokeStyle = color;
        this.c.lineWidth = width;
        this.c.moveTo(pa.x, pa.y);
        this.c.lineTo(pb.x, pb.y);
        this.c.stroke();
        this.c.closePath();
    }
    Rectangle(position, width, height, color = "black", borderColor, borderWidth = 0) {
        this.c.beginPath();
        this.c.fillStyle = color;
        if (borderColor) {
            this.c.strokeStyle = borderColor;
        }
        this.c.lineWidth = borderWidth;
        this.c.rect(position.x, position.y, width, height);
        this.c.fill();
        if (borderWidth > 0) {
            this.c.stroke();
        }
        this.c.closePath();
    }
    Circle(position, radius, color = "black", borderColor, borderWidth = 0) {
        this.c.beginPath();
        this.c.fillStyle = color;
        if (borderColor) {
            this.c.strokeStyle = borderColor;
        }
        this.c.lineWidth = borderWidth;
        this.c.arc(position.x, position.y, radius, 0, Math.PI * 2);
        this.c.fill();
        if (borderWidth > 0) {
            this.c.stroke();
        }
        this.c.closePath();
    }
    Text(text, position, color = "black", fontSize = 16, fontFamily = "Arial", alignment = "left") {
        this.c.beginPath();
        this.c.font = "20px Arial";
        this.c.fillStyle = color;
        this.c.textAlign = alignment;
        this.c.fillText(text, position.x, position.y);
        this.c.closePath();
    }
}
