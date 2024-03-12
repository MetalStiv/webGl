import IShape from "./types/IShape";
import IShapeBuffers from "./types/IShapeBuffers";
import ITextureFongProgramInfo from "./types/ITextureFongProgramInfo";
import { createBuffer, createShader, loadTexture, setTexImage } from "./webglUtils";
import img from './assets/textures/sand.png';

var mat4 = require('gl-mat4');

var cubeRotation: number = 0.0;
var deltaTime: number = 0;
var fongShaderProgram: WebGLProgram; 
var requestFrame: number;

function initScene5(gl: WebGL2RenderingContext){
    var cube: IShape = require("./assets/cube.json");

    var vertexBuffer: WebGLBuffer = createBuffer(gl, cube.vertexes, "Float32", "ARRAY_BUFFER");    
    var vertexesOrderBuffer: WebGLBuffer = createBuffer(gl, cube.vertexOrder, "Uint16", "ELEMENT_ARRAY_BUFFER");
    var normalBuffer: WebGLBuffer = createBuffer(gl, cube.vertexOrder, "Float32", "ARRAY_BUFFER");
    var textureBuffer: WebGLBuffer = createBuffer(gl, cube.textureCoordinates, "Float32", "ARRAY_BUFFER");

    var buffers: IShapeBuffers = {
        vertexes: vertexBuffer,
        vertexOrder: vertexesOrderBuffer,
        normals: normalBuffer,
        textureCoords: textureBuffer,
    }

    var textureFongVertexShaderSource = require("./shaders/texture-fong-vertex.glsl");
    var textureFongFragmentShaderSource = require("./shaders/texture-fong-fragment.glsl");

    var textureFongVertexShader: WebGLShader = createShader(gl, gl.VERTEX_SHADER, textureFongVertexShaderSource);
    var textureFongFragmentShader: WebGLShader = createShader(gl, gl.FRAGMENT_SHADER, textureFongFragmentShaderSource);

    var textureFongShaderProgram: WebGLProgram = gl.createProgram();
    gl.attachShader(textureFongShaderProgram, textureFongVertexShader);
    gl.attachShader(textureFongShaderProgram, textureFongFragmentShader);
    gl.linkProgram(textureFongShaderProgram);

    if (!gl.getProgramParameter(textureFongShaderProgram, gl.LINK_STATUS)) {
        alert(`Unable to initialize the shader program: ${gl.getProgramInfoLog(textureFongShaderProgram)}`);
        return null;
    }

    const textureFongProgramInfo: ITextureFongProgramInfo = {
        program: textureFongShaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(textureFongShaderProgram, "aVertexPosition"),
            vertexNormal: gl.getAttribLocation(textureFongShaderProgram, "aVertexNormal"),
            vertexTextureCoord: gl.getAttribLocation(textureFongShaderProgram, "aTextureCoord"),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(textureFongShaderProgram, "uProjectionMatrix"),
            modelViewMatrix: gl.getUniformLocation(textureFongShaderProgram, "uModelViewMatrix"),
            normalMatrix: gl.getUniformLocation(textureFongShaderProgram, "uNormalMatrix"),

            ambientColor: gl.getUniformLocation(textureFongShaderProgram, "uAmbientColor"),
            specularColor: gl.getUniformLocation(textureFongShaderProgram, "uSpecularColor"),
            lightPosition: gl.getUniformLocation(textureFongShaderProgram, "uLightPosition"),
            viewPosition: gl.getUniformLocation(textureFongShaderProgram, "uViewPosition"),

            sampler: gl.getUniformLocation(textureFongShaderProgram, "uSampler"),
        },
    };

    const texture: WebGLTexture = loadTexture(gl, img);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);

    var then = 0;
  
    function render(now: number) {
        now *= 0.001;
        deltaTime = now-then;
        then = now;
        cubeRotation += deltaTime;
        drawScene5(gl, textureFongProgramInfo, buffers, cubeRotation);
        requestAnimationFrame(render);
    }

    requestFrame = requestAnimationFrame(render);
}

function drawScene5(gl: WebGL2RenderingContext, programInfo: ITextureFongProgramInfo, buffers: IShapeBuffers, cubeRotation: number) {
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
  

    setPositionAttribute(gl, buffers, programInfo);
    setTextureAttribute(gl, buffers, programInfo);
  
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.vertexOrder);
  
    gl.useProgram(programInfo.program);

    
    gl.uniform4fv(programInfo.uniformLocations.ambientColor, new Float32Array([0.3, 0.3, 0.3, 0.0]));
    gl.uniform4fv(programInfo.uniformLocations.specularColor, new Float32Array([0.9, 0.9, 0.8, 1]));
    gl.uniform3fv(programInfo.uniformLocations.lightPosition, new Float32Array([-1.85, 1.8, 1.75]));
    gl.uniform3fv(programInfo.uniformLocations.viewPosition, new Float32Array([0.85, 0.8, 0.75]));

    gl.uniformMatrix4fv(
      programInfo.uniformLocations.projectionMatrix,
      false,
      projectionMatrix
    );
    gl.uniformMatrix4fv(
      programInfo.uniformLocations.modelViewMatrix,
      false,
      modelViewMatrix
    );
    gl.uniformMatrix4fv(
      programInfo.uniformLocations.normalMatrix,
      false,
      modelViewMatrix
    );

    gl.uniform1i(programInfo.uniformLocations.sampler, 0);

    {
        const vertexCount: number = 36;
        const type: number = gl.UNSIGNED_SHORT;
        const offset: number = 0;
        gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }
}

function clearScene5(gl: WebGL2RenderingContext){
    cancelAnimationFrame(requestFrame);
    gl.deleteProgram(fongShaderProgram);
}
  
function setPositionAttribute(gl: WebGL2RenderingContext, buffers: IShapeBuffers, programInfo: ITextureFongProgramInfo) {
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

function setTextureAttribute(gl: WebGL2RenderingContext, buffers: IShapeBuffers, programInfo: ITextureFongProgramInfo) {
    const num = 2; // every coordinate composed of 2 values
    const type = gl.FLOAT; // the data in the buffer is 32-bit float
    const normalize = false; // don't normalize
    const stride = 0; // how many bytes to get from one set to the next
    const offset = 0; // how many bytes inside the buffer to start from
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoords);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexTextureCoord,
        num,
        type,
        normalize,
        stride,
        offset
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexTextureCoord);
}

export { initScene5, clearScene5 };