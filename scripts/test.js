import { TestScene } from "./scenes/testScene.js";
import { Draw } from "./utils/Draw.js";
var canvas = document.getElementById('canvas');
if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error("Canvas element not found or is not a valid HTMLCanvasElement");
}
var scene = new TestScene(canvas);
if (scene.c === null) {
    throw new Error("Canvas context is null");
}
export const DRAW = new Draw(scene.c);
