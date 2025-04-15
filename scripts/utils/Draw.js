export class Draw {
    constructor(context) {
        this.c = context;
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
    Text(text, position, color = "black", fontSize = 16, fontFamily = "Arial") {
        this.c.beginPath();
        this.c.font = "20px Arial";
        this.c.fillStyle = color;
        this.c.fillText(text, position.x, position.y);
        this.c.closePath();
    }
}
