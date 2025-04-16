import { Scene } from "../engine/Scene.js";
import { MOUSE } from "../engine/utils/Mouse.js";
import { Vector } from "../math/Vector.js";
import { GridMap } from "../objects/GridMap.js";
import { DRAW } from "../test.js";

export class TestScene extends Scene {
    
    private Map: GridMap = new GridMap(11, 11);
    private hoveredCell: Vector | undefined = undefined as Vector | undefined;

    constructor(canvasElement: HTMLCanvasElement) {
        super(canvasElement);

        this.showFPS = true;
    }

    public override Start(){
        MOUSE.OnMouseDown = () => {
            let selectedCell = this.Map.convertToGridCoordinates(MOUSE.position, this.halfDimensions);
            // if a cell is already selected, unselect it
            if(this.Map.selectedCell?.equalsTo(selectedCell)){
                this.Map.selectedCell = undefined;
                return;
            }

            // If no cells are selected, mark the cell as selected
            this.Map.selectedCell = selectedCell;
            
        }
        
        MOUSE.OnMouseUp = () => {
        }
        
        MOUSE.OnMouseMove = () => {
            this.hoveredCell = this.Map.convertToGridCoordinates(MOUSE.position, this.halfDimensions);
        }
    }

    public override Update(){
        if(this.Map.selectedCell !== undefined){
            DRAW.Rectangle(
                this.Map.selectedCell.multiply(this.Map.size).add(this.halfDimensions).subtract(this.Map.size / 2),
                this.Map.size, 
                this.Map.size, 
                "rgba(0, 0, 255, .35)"
            )
        }

        if(this.hoveredCell !== undefined){
            DRAW.Rectangle(
                this.hoveredCell.multiply(this.Map.size).add(this.halfDimensions).subtract(this.Map.size / 2),
                this.Map.size, 
                this.Map.size, 
                "rgba(0, 0, 0, .35)"
            )
        }

        this.Map.render();
    }
}