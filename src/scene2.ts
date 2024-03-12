import ICardioidProgramInfo from "./types/ICardioidProgramInfo";
import { createShader } from "./webglUtils";

var cardioidShaderProgram: WebGLProgram;
var start: number = 0;
var interval: ReturnType<typeof setInterval>;

function initScene2(gl: WebGL2RenderingContext){
    var vertexShaderSource = require("./shaders/cardioid-vertex.glsl");
    var fragmentShaderSource = require("./shaders/cardioid-fragment.glsl");

    var vertexShader: WebGLShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    var fragmentShader: WebGLShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    cardioidShaderProgram = gl.createProgram();
    gl.attachShader(cardioidShaderProgram, vertexShader);
    gl.attachShader(cardioidShaderProgram, fragmentShader);
    gl.linkProgram(cardioidShaderProgram);

    if (!gl.getProgramParameter(cardioidShaderProgram, gl.LINK_STATUS)) {
        alert(`Unable to initialize the shader program: ${gl.getProgramInfoLog(cardioidShaderProgram)}`);
        return null;
    }

    const cardioidProgramInfo: ICardioidProgramInfo = {
        program: cardioidShaderProgram,
        attribLocations: {},
        uniformLocations: {
            resolution: gl.getUniformLocation(cardioidShaderProgram, "uResolution"),
            time: gl.getUniformLocation(cardioidShaderProgram, "uTime"),
        },
    };

    function render(now: number) {
        drawScene2(gl, cardioidProgramInfo, now);
    }

    interval = setInterval(() => {
        start += 0.01;
        render(start);
    }, 30);
}

function drawScene2(gl: WebGL2RenderingContext, programInfo: ICardioidProgramInfo, time: number) {
    gl.clearColor(0.5, 0.5, 0.5, 0.9);
    gl.enable(gl.DEPTH_TEST);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.useProgram(programInfo.program);

    gl.uniform2fv(programInfo.uniformLocations.resolution, [gl.canvas.width, gl.canvas.height]);
    gl.uniform1f(programInfo.uniformLocations.time, time);

    gl.drawArrays(gl.TRIANGLES, 0, 3);
}

function clearScene2(gl: WebGL2RenderingContext){
    gl.deleteProgram(cardioidShaderProgram);
    clearInterval(interval);
}

export { initScene2, clearScene2 };