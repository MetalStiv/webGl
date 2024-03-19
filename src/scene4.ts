import { vec2, vec3 } from "gl-matrix";
import ITextProgramInfo from "./types/ITextProgramInfo";
import { createBuffer, createShader, loadTexture } from "./webglUtils";
import { ISpriteFont, createFont } from "./types/ISpriteFont";
import { ISpriteFontChar } from "./types/ISpriteFontChar";
import fontImage from './assets/fonts/SS.png';
import IShapeBuffers from "./types/IShapeBuffers";

var mat4 = require('gl-mat4');

var textTranslate: number = 0.0;
var deltaTime: number = 0; 
var requestFrame: number;
var textShaderProgram: WebGLProgram;
var fontTexture: WebGLTexture;
var sansSerifFont: ISpriteFont = createFont();

var fontData: any = require('./assets/fonts/SS.xml');

function initScene4(gl: WebGL2RenderingContext){
    fontTexture = loadTexture(gl, fontImage);
    var image = new Image();
    image.src = fontImage;
    image.onload = function(){
        sansSerifFont.load(gl, fontData, image, "SS");
        initScene4AfterTextureLoad(gl);
    }
}

function initScene4AfterTextureLoad(gl: WebGL2RenderingContext){
    var textVertexShaderSource = require("./shaders/text-vertex.glsl");
    var textFragmentShaderSource = require("./shaders/text-fragment.glsl");

    var textVertexShader = createShader(gl, gl.VERTEX_SHADER, textVertexShaderSource);
    var textFragmentShader = createShader(gl, gl.FRAGMENT_SHADER, textFragmentShaderSource);

    textShaderProgram = gl.createProgram();
    gl.attachShader(textShaderProgram, textVertexShader);
    gl.attachShader(textShaderProgram, textFragmentShader);
    gl.linkProgram(textShaderProgram);

    if (!gl.getProgramParameter(textShaderProgram, gl.LINK_STATUS)) {
        alert(`Unable to initialize the shader program: ${gl.getProgramInfoLog(textShaderProgram)}`);
        return null;
    }

    const textProgramInfo: ITextProgramInfo = {
        program: textShaderProgram,
        attribLocations: {
            vertexPosition: 0,
            vertexTextureCoord: 1,
            vertexColor: 2,
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(textShaderProgram, "uProjectionMatrix"),
            modelViewMatrix: gl.getUniformLocation(textShaderProgram, "uModelViewMatrix"),
            sampler: gl.getUniformLocation(textShaderProgram, "uTexture"),
        },
    };

    console.log(textProgramInfo)

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, fontTexture);

    var then = 0;
  
    function render(now: number) {
        now *= 0.0003;
        deltaTime = now-then;
        then = now;
        textTranslate += deltaTime;
        drawScene4(gl, textProgramInfo, textTranslate);
        requestAnimationFrame(render);
    }

    requestFrame = requestAnimationFrame(render);
}

function drawScene4(gl: WebGL2RenderingContext, programInfo: ITextProgramInfo, textTranslate: number) {
    gl.clearColor(0, 0, 0, 1);
    gl.disable(gl.DEPTH_TEST); 
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
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
      [-2.2, -1.0, -6.0]
    );

    mat4.rotate(
        modelViewMatrix,
        modelViewMatrix,
        -1.2,
        [1.0, 0.0, 0.0]
    );

    mat4.translate(
        modelViewMatrix,
        modelViewMatrix,
        [0.0, textTranslate, 0.2*textTranslate]
    );
  
    gl.useProgram(programInfo.program);

    var scale: number = 0.01;
    var position: vec2 = vec2.fromValues(0, 0);
    var color: vec3 = vec3.fromValues(0.99, 0.99, 0);
    const vertexes = [];
    var vertexOrder = [];
    const texCoord = [];
    const colors = [];

    var nextCharX: number = 0;
    var instanceCount: number = 0;
    var textToRender = "STAR WARS";

    for(var char of textToRender){
        var charCode: number = char.charCodeAt(0);
        var charSprite: ISpriteFontChar = sansSerifFont.getChar(charCode);

        const x = position[0] + (nextCharX + charSprite.offset[0])*scale;
        const y = position[1] + charSprite.offset[1]*scale;
        const width = charSprite.size[0] * scale;
        const height = charSprite.size[1] * scale;

        var v0: vec2 = vec2.fromValues(x, y);
        var v1: vec2 = vec2.fromValues(x+width, y);
        var v2: vec2 = vec2.fromValues(x+width, y+height);
        var v3: vec2 = vec2.fromValues(x, y+height);

        var a: vec2 = charSprite.textureCoord.a;
        var b: vec2 = charSprite.textureCoord.b;
        var c: vec2 = charSprite.textureCoord.c;
        var d: vec2 = charSprite.textureCoord.d;

        // top left 
        vertexes.push(v0[0]); // x 
        vertexes.push(v0[1]); // y 
        vertexes.push(0);
        texCoord.push(d[0]);  // u
        texCoord.push(d[1]);  // v
        colors.push(color[0]);  // r
        colors.push(color[1]);  // g
        colors.push(color[2]);  // b

        // top right
        vertexes.push(v1[0]);
        vertexes.push(v1[1]);
        vertexes.push(0);
        texCoord.push(c[0]);
        texCoord.push(c[1]);
        colors.push(color[0]);
        colors.push(color[1]);
        colors.push(color[2]);

        // bottom right
        vertexes.push(v2[0]);
        vertexes.push(v2[1]);
        vertexes.push(0);
        texCoord.push(b[0]);
        texCoord.push(b[1]);
        colors.push(color[0]);
        colors.push(color[1]);
        colors.push(color[2]);

        // bottom left
        vertexes.push(v3[0]);
        vertexes.push(v3[1]);
        vertexes.push(0);
        texCoord.push(a[0]);
        texCoord.push(a[1]);
        colors.push(color[0]);
        colors.push(color[1]);
        colors.push(color[2]);

        vertexOrder = vertexOrder.concat([instanceCount*4, instanceCount*4+1, instanceCount*4+2, instanceCount*4+2, instanceCount*4, instanceCount*4+3])

        instanceCount++;
        nextCharX += charSprite.advance;
    }

    var vertexBuffer: WebGLBuffer = createBuffer(gl, vertexes, "Float32", "ARRAY_BUFFER");    
    var vertexesOrderBuffer: WebGLBuffer = createBuffer(gl, vertexOrder, "Uint16", "ELEMENT_ARRAY_BUFFER");
    var colorBuffer: WebGLBuffer = createBuffer(gl, colors, "Float32", "ARRAY_BUFFER");
    var texCoordBuffer: WebGLBuffer = createBuffer(gl, texCoord, "Float32", "ARRAY_BUFFER");

    var buffers: IShapeBuffers = {
        vertexes: vertexBuffer,
        vertexOrder: vertexesOrderBuffer,
        colors: colorBuffer,
        textureCoords: texCoordBuffer,
    }

    setPositionAttribute(gl, buffers, programInfo);
    setColorAttribute(gl, buffers, programInfo);
    setTexCoordAttribute(gl, buffers, programInfo);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.vertexOrder);

    gl.uniform1i(programInfo.uniformLocations.sampler, 0);
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

    {
        const vertexCount: number = instanceCount*6;
        const type: number = gl.UNSIGNED_SHORT;
        const offset: number = 0;
        gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }
}

function clearScene4(gl: WebGL2RenderingContext){
    cancelAnimationFrame(requestFrame);
    gl.deleteProgram(textShaderProgram);
}

function setPositionAttribute(gl: WebGL2RenderingContext, buffers: IShapeBuffers, programInfo: ITextProgramInfo) {
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

function setTexCoordAttribute(gl: WebGL2RenderingContext, buffers: IShapeBuffers, programInfo: ITextProgramInfo) {
    const numComponents: number = 2;
    const type: number = gl.FLOAT; // the data in the buffer is 32bit floats
    const normalize: boolean = false; // don't normalize
    const stride: number = 0; // how many bytes to get from one set of values to the next 0 = use type and numComponents above
    const offset: number = 0; // how many bytes inside the buffer to start from
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoords);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexTextureCoord,
        numComponents,
        type,
        normalize,
        stride,
        offset
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexTextureCoord);
}

function setColorAttribute(gl: WebGL2RenderingContext, buffers: IShapeBuffers, programInfo: ITextProgramInfo) {
    const numComponents: number = 3;
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

export { initScene4, clearScene4 };