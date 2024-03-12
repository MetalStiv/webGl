import ISdfProgramInfo from "./types/ISdfProgramInfo";
import { createShader } from "./webglUtils";

var sdfShaderProgram: WebGLProgram;
var start: number = 0;
var mouseCoord: number[] = [0, 0, -1];

var interval: ReturnType<typeof setInterval>;

function initScene3(gl: WebGL2RenderingContext, canvas: HTMLCanvasElement){
    canvas.addEventListener('mousemove', (e: MouseEvent) => {
        mouseCoord[0] = e.pageX;
        mouseCoord[1] = canvas.height-e.pageY;
    }, false);
    canvas.addEventListener('click', (e: MouseEvent) => {
        mouseCoord[2] = mouseCoord[2]*-1;
    }, false);

    var vertexShaderSource = require("./shaders/sdf-vertex.glsl");
    var fragmentShaderSource = require("./shaders/sdf-fragment.glsl");

    var vertexShader: WebGLShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    var fragmentShader: WebGLShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    sdfShaderProgram = gl.createProgram();
    gl.attachShader(sdfShaderProgram, vertexShader);
    gl.attachShader(sdfShaderProgram, fragmentShader);
    gl.linkProgram(sdfShaderProgram);

    if (!gl.getProgramParameter(sdfShaderProgram, gl.LINK_STATUS)) {
        alert(`Unable to initialize the shader program: ${gl.getProgramInfoLog(sdfShaderProgram)}`);
        return null;
    }

    const cardioidProgramInfo: ISdfProgramInfo = {
        program: sdfShaderProgram,
        attribLocations: {},
        uniformLocations: {
            resolution: gl.getUniformLocation(sdfShaderProgram, "uResolution"),
            time: gl.getUniformLocation(sdfShaderProgram, "uTime"),
            mouse: gl.getUniformLocation(sdfShaderProgram, "uMouse"),
        },
    };

    function render(now: number) {
        drawScene3(gl, cardioidProgramInfo, now);
    }

    interval = setInterval(() => {
        start += 0.05;
        render(start);
    }, 30);
}

function drawScene3(gl: WebGL2RenderingContext, programInfo: ISdfProgramInfo, time: number) {
    gl.clearColor(0.5, 0.5, 0.5, 0.9);
    gl.enable(gl.DEPTH_TEST);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.useProgram(programInfo.program);

    gl.uniform2fv(programInfo.uniformLocations.resolution, [gl.canvas.width, gl.canvas.height]);
    gl.uniform3fv(programInfo.uniformLocations.mouse, mouseCoord);
    gl.uniform1f(programInfo.uniformLocations.time, time);

    gl.drawArrays(gl.TRIANGLES, 0, 3);
}

function clearScene3(gl: WebGL2RenderingContext){
    gl.deleteProgram(sdfShaderProgram);
    clearInterval(interval);
}

export { initScene3, clearScene3 };