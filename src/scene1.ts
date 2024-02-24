import IFongProgramInfo from "./types/IFongProgramInfo";
import IShape from "./types/IShape";
import IShapeBuffers from "./types/IShapeBuffers";

let mat4 = require('gl-mat4');

let cubeRotation: number = 0.0;
let deltaTime: number = 0;
let fongShaderProgram: WebGLProgram; 
let requestFrame: number;

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
    return buffer;
}

function initScene1(gl: WebGL2RenderingContext){
    let cube: IShape = require("./assets/cube.json");

    let vertexBuffer = createBuffer(gl, cube.vertexes, "Float32", "ARRAY_BUFFER");    
    let vertexesOrderBuffer = createBuffer(gl, cube.vertexOrder, "Uint16", "ELEMENT_ARRAY_BUFFER");
    let colorBuffer = createBuffer(gl, cube.colors, "Float32", "ARRAY_BUFFER");
    let normalBuffer = createBuffer(gl, cube.vertexOrder, "Float32", "ARRAY_BUFFER");

    let buffers: IShapeBuffers = {
        vertexes: vertexBuffer,
        vertexOrder: vertexesOrderBuffer,
        normals: normalBuffer,
        colors: colorBuffer
    }

    let fongVertexShaderSource = require("./shaders/fong-vertex.glsl");
    let fongFragmentShaderSource = require("./shaders/fong-fragment.glsl");

    let fongVertexShader = createShader(gl, gl.VERTEX_SHADER, fongVertexShaderSource);
    let fongFragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fongFragmentShaderSource);

    fongShaderProgram = gl.createProgram();
    gl.attachShader(fongShaderProgram, fongVertexShader);
    gl.attachShader(fongShaderProgram, fongFragmentShader);
    gl.linkProgram(fongShaderProgram);

    if (!gl.getProgramParameter(fongShaderProgram, gl.LINK_STATUS)) {
        alert(`Unable to initialize the shader program: ${gl.getProgramInfoLog(fongShaderProgram)}`);
        return null;
    }

    const fongProgramInfo: IFongProgramInfo = {
        program: fongShaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(fongShaderProgram, "aVertexPosition"),
            vertexNormal: gl.getAttribLocation(fongShaderProgram, "aVertexNormal"),
            vertexColor: gl.getAttribLocation(fongShaderProgram, "aVertexColor"),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(fongShaderProgram, "uProjectionMatrix"),
            modelViewMatrix: gl.getUniformLocation(fongShaderProgram, "uModelViewMatrix"),
            normalMatrix: gl.getUniformLocation(fongShaderProgram, "uNormalMatrix"),

            ambientColor: gl.getUniformLocation(fongShaderProgram, "uAmbientColor"),
            specularColor: gl.getUniformLocation(fongShaderProgram, "uSpecularColor"),
            lightPosition: gl.getUniformLocation(fongShaderProgram, "uLightPosition"),
            viewPosition: gl.getUniformLocation(fongShaderProgram, "uViewPosition"),
        },
    };

    let then = 0;
  
    function render(now: number) {
        now *= 0.001;
        deltaTime = now-then;
        then = now;
        cubeRotation += deltaTime;
        drawScene1(gl, fongProgramInfo, buffers, cubeRotation);
        requestAnimationFrame(render);
    }

    requestFrame = requestAnimationFrame(render);
}

function drawScene1(gl: WebGL2RenderingContext, programmInfo: IFongProgramInfo, buffers: IShapeBuffers, cubeRotation: number) {
    gl.clearColor(0.5, 0.5, 0.5, 1.0);
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST); 
    gl.depthFunc(gl.LEQUAL);
  
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  
    const fieldOfView: number = (45 * Math.PI) / 180;
    const aspect: number = gl.canvas.width / gl.canvas.height;
    const zNear: number = 0.1;
    const zFar: number = 100.0;
    const projectionMatrix: Float32List = mat4.create();
  
    mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);
  
    const modelViewMatrix = mat4.create();
  
    mat4.translate(
      modelViewMatrix,
      modelViewMatrix,
      [-0.0, 0.0, -6.0]
    );
  
    mat4.rotate(
      modelViewMatrix,
      modelViewMatrix,
      cubeRotation,
      [0, 0, 1]
    );

    mat4.rotate(
      modelViewMatrix,
      modelViewMatrix,
      cubeRotation*0.7,
      [0, 1, 0]
    );

    mat4.rotate(
      modelViewMatrix,
      modelViewMatrix,
      cubeRotation*0.3,
      [1, 0, 0]
    );

    const normalMatrix = mat4.create();
    mat4.invert(normalMatrix, modelViewMatrix);
    mat4.transpose(normalMatrix, normalMatrix);
  

    setPositionAttribute(gl, buffers, programmInfo);
    setColorAttribute(gl, buffers, programmInfo);
  
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.vertexOrder);
  
    gl.useProgram(programmInfo.program);

    
    gl.uniform4fv(programmInfo.uniformLocations.ambientColor, new Float32Array([0.3, 0.3, 0.3, 0.0]));
    gl.uniform4fv(programmInfo.uniformLocations.specularColor, new Float32Array([0.9, 0.9, 0.8, 1]));
    gl.uniform3fv(programmInfo.uniformLocations.lightPosition, new Float32Array([-1.85, 1.8, 1.75]));
    gl.uniform3fv(programmInfo.uniformLocations.viewPosition, new Float32Array([0.85, 0.8, 0.75]));

    gl.uniformMatrix4fv(
      programmInfo.uniformLocations.projectionMatrix,
      false,
      projectionMatrix
    );
    gl.uniformMatrix4fv(
      programmInfo.uniformLocations.modelViewMatrix,
      false,
      modelViewMatrix
    );
    gl.uniformMatrix4fv(
      programmInfo.uniformLocations.normalMatrix,
      false,
      modelViewMatrix
    );

    {
        const vertexCount: number = 36;
        const type: number = gl.UNSIGNED_SHORT;
        const offset: number = 0;
        gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }
}

function clearScene1(gl: WebGL2RenderingContext){
    cancelAnimationFrame(requestFrame);
    gl.deleteProgram(fongShaderProgram);
}
  
function setPositionAttribute(gl: WebGL2RenderingContext, buffers: IShapeBuffers, programInfo: IFongProgramInfo) {
    const numComponents: number = 3;
    const type: number = gl.FLOAT; // the data in the buffer is 32bit floats
    const normalize: boolean = false; // don't normalize
    const stride: number = 0; // how many bytes to get from one set of values to the next 0 = use type and numComponents above
    const offset: number = 0; // how many bytes inside the buffer to start from
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.vertexes);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        numComponents,
        type,
        normalize,
        stride,
        offset
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
}

function setColorAttribute(gl: WebGL2RenderingContext, buffers: IShapeBuffers, programInfo: IFongProgramInfo) {
    const numComponents: number = 4;
    const type: number = gl.FLOAT;
    const normalize: boolean = false;
    const stride: number = 0;
    const offset: number = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.colors);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexColor,
        numComponents,
        type,
        normalize,
        stride,
        offset
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
}

export { initScene1, clearScene1 };