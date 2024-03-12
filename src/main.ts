import { clearScene1, initScene1 } from "./scene1";
import { clearScene2, initScene2 } from "./scene2";
import { clearScene3, initScene3 } from "./scene3";
import { clearScene4, initScene4 } from "./scene4";
import { clearScene5, initScene5 } from "./scene5";

const canvas = document.getElementById("webgl-canvas") as HTMLCanvasElement;
const gl: WebGL2RenderingContext = canvas.getContext("webgl2");

var sceneNumber: number = 1;

document.getElementById('scene1').addEventListener('click', e => {
    sceneNumber = 1;
    main()
});

document.getElementById('scene2').addEventListener('click', e => {
    sceneNumber = 2;
    main()
});

document.getElementById('scene3').addEventListener('click', e => {
    sceneNumber = 3;
    main()
});

document.getElementById('scene4').addEventListener('click', e => {
    sceneNumber = 4;
    main()
});

document.getElementById('scene5').addEventListener('click', e => {
    sceneNumber = 5;
    main()
});

function clear() {
    clearScene1(gl);
    clearScene2(gl);
    clearScene3(gl);
    clearScene4(gl);
    clearScene5(gl);
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
    if (sceneNumber === 3){
        clear();
        initScene3(gl, canvas);
    }
    if (sceneNumber === 4){
        clear();
        initScene4(gl);
    }
    if (sceneNumber === 5){
        clear();
        initScene5(gl);
    }
}