import { TestScene } from "./scenes/testScene.js";
import { Vector } from "./math/Vector.js";
var canvas = document.getElementById('canvas');
if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error("Canvas element not found or is not a valid HTMLCanvasElement");
}
var scene = new TestScene(canvas);
let a = new Vector(0, 0);
let b = new Vector(100, 100);
scene.Draw.Line(a, b, 'red');
