import ICardioidProgramInfo from "./types/ICardioidProgramInfo";

let cardioidShaderProgram: WebGLProgram;
let start: number = 0;

function createShader(gl: WebGL2RenderingContext, type: number, source: string) {
    let shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
}

function initScene2(gl: WebGL2RenderingContext){
    let vertexShaderSource = require("./shaders/cardioid-vertex.glsl");
    let fragmentShaderSource = require("./shaders/cardioid-fragment.glsl");

    let vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    let fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

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

    setInterval(() => {
        start += 0.01;
        render(start);
    }, 30);
}

function drawScene2(gl: WebGL2RenderingContext, programInfo: ICardioidProgramInfo, time: number) {
    console.log(time)
    gl.clearColor(0.5, 0.5, 0.5, 0.9);
    gl.enable(gl.DEPTH_TEST);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.useProgram(programInfo.program);

    gl.uniform2fv(programInfo.uniformLocations.resolution, [gl.canvas.width, gl.canvas.height]);
    gl.uniform1f(programInfo.uniformLocations.time, time);

    let vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    let position = gl.getAttribLocation(programInfo.program, "aPosition");
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 2*Float32Array.BYTES_PER_ELEMENT, 0); 
    gl.enableVertexAttribArray(position);

    gl.drawArrays(gl.TRIANGLES, 0, 3);
}

function clearScene2(gl: WebGL2RenderingContext){
    gl.deleteProgram(cardioidShaderProgram);
}

export { initScene2, clearScene2 };