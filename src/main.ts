import { clearScene1, initScene1 } from "./scene1";
import { clearScene2, initScene2 } from "./scene2";

const canvas = document.getElementById("webgl-canvas") as HTMLCanvasElement;
const gl: WebGL2RenderingContext = canvas.getContext("webgl2");
const txtContext: CanvasRenderingContext2D = canvas.getContext("2d");

let sceneNumber: number = 1;

document.getElementById('scene1').addEventListener('click', e => {
    sceneNumber = 1;
    main()
});

document.getElementById('scene2').addEventListener('click', e => {
    sceneNumber = 2;
    main()
});

function clear() {
    clearScene1(gl);
    clearScene2(gl);
}

function main() {
    if (gl === null) {
        console.error("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    if (sceneNumber === 1){
        clear();
        initScene1(gl);
    }
    if (sceneNumber === 2){
        clear();
        initScene2(gl);
    }
}