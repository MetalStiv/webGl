import { drawScene } from "./drawScene";
import IProgramInfo from "./types/IProgramInfo";
import IShape from "./types/IShape";
import IShapeBuffers from "./types/IShapeBuffers";

const canvas = document.getElementById("webgl-canvas") as HTMLCanvasElement;
const gl: WebGL2RenderingContext = canvas.getContext("webgl2");

let cubeRotation: number = 0.0;
let deltaTime: number = 0;

main();

function createShader(gl: WebGL2RenderingContext, type: number, source: string) {
    let shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
}

function createBuffer(gl: WebGL2RenderingContext, data: number[], dataType: string, bufferType: string) {
    let buffer = gl.createBuffer();
    let bufType = bufferType === "ARRAY_BUFFER" ? gl.ARRAY_BUFFER
        : gl.ELEMENT_ARRAY_BUFFER
    gl.bindBuffer(bufType, buffer);
    let dataArray = dataType === "Float32" ? new Float32Array(data)
        : new Uint16Array(data);
    gl.bufferData(bufType, dataArray, gl.STATIC_DRAW);
    console.log(dataArray)
    return buffer;
}

function main() {
    if (gl === null) {
        console.error("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    let cube: IShape = require("./assets/cube.json");

    let vertexBuffer = createBuffer(gl, cube.vertexes, "Float32", "ARRAY_BUFFER");    
    let vertexesOrderBuffer = createBuffer(gl, cube.vertexOrder, "Uint16", "ELEMENT_ARRAY_BUFFER");
    let colorBuffer = createBuffer(gl, cube.colors, "Float32", "ARRAY_BUFFER");

    let buffers: IShapeBuffers = {
        vertexes: vertexBuffer,
        vertexOrder: vertexesOrderBuffer,
        colors: colorBuffer
    }

    let vertexShaderSource = require("./shaders/vertex.glsl");
    let fragmentShaderSource = require("./shaders/fragment.glsl");

    let vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    let fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    let shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert(`Unable to initialize the shader program: ${gl.getProgramInfoLog(shaderProgram)}`);
        return null;
    }

    const programInfo: IProgramInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
            vertexColor: gl.getAttribLocation(shaderProgram, "aVertexColor"),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
            modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
        },
    };

    let then = 0;
  
    function render(now: number) {
        now *= 0.001;
        deltaTime = now-then;
        then = now;
        cubeRotation += deltaTime;
        drawScene(gl, programInfo, buffers, cubeRotation);
        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}