import { vec2, vec3 } from "gl-matrix";
import ITextProgramInfo from "./types/ITextProgramInfo";
import { createBuffer, createShader, loadTexture } from "./webglUtils";
import { ISpriteFont, createFont } from "./types/ISpriteFont";
import { ISpriteFontChar } from "./types/ISpriteFontChar";
import fontImage from './assets/fonts/SS.png';

var mat4 = require('gl-mat4');

const MAX_NUMBER_OF_SPRITES = 1000;
const FLOATS_PER_VERTEX = 7;
const FLOATS_PER_SPRITE = 4*FLOATS_PER_VERTEX;
const INDICES_PER_SPRITE = 6;

var textTranslate: number = 0.0;
var deltaTime: number = 0; 
var requestFrame: number;
var textShaderProgram: WebGLProgram;
var sansSerifFont: ISpriteFont = createFont();

var fontData: any = require('./assets/fonts/SS.xml');

function initScene4(gl: WebGL2RenderingContext){
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

    var fontTexture: WebGLTexture = loadTexture(gl, fontImage);
    var image = new Image();
    image.src = fontImage;
    image.onload = function(){
        sansSerifFont.load(gl, fontData, image, "SS");
        console.log(sansSerifFont);
    }

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, fontTexture);

    const textProgramInfo: ITextProgramInfo = {
        program: textShaderProgram,
        attribLocations: {},
        uniformLocations: {},
    };

    var then = 0;
  
    function render(now: number) {
        now *= 0.001;
        deltaTime = now-then;
        then = now;
        textTranslate += deltaTime;
        drawScene4(gl, textProgramInfo, textTranslate);
        requestAnimationFrame(render);
    }

    requestFrame = requestAnimationFrame(render);
}

function drawScene4(gl: WebGL2RenderingContext, programInfo: ITextProgramInfo, textTranslate: number) {
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
  
    // mat4.rotate(
    //   modelViewMatrix,
    //   modelViewMatrix,
    //   cubeRotation,
    //   [0, 0, 1]
    // );

    // mat4.rotate(
    //   modelViewMatrix,
    //   modelViewMatrix,
    //   cubeRotation*0.7,
    //   [0, 1, 0]
    // );

    // mat4.rotate(
    //   modelViewMatrix,
    //   modelViewMatrix,
    //   cubeRotation*0.3,
    //   [1, 0, 0]
    // );

    // setPositionAttribute(gl, buffers, programInfo);
    // setColorAttribute(gl, buffers, programInfo);
  
    // gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.vertexOrder);
  
    gl.useProgram(programInfo.program);

    var scale: number = 1.0;
    var position: vec2 = vec2.fromValues(1, 1);
    var color: vec3 = vec3.fromValues(1, 0, 0);
    const data = new Uint16Array(MAX_NUMBER_OF_SPRITES*INDICES_PER_SPRITE);

    var nextCharX: number = 0;
    var instanceCount: number = 0;
    var textToRender = "STAR WARS";

    for(var char of textToRender){
        var i = instanceCount*FLOATS_PER_SPRITE;
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
        data[0 + i] = v0[0]; // x 
        data[1 + i] = v0[1]; // y 
        data[2 + i] = a[0];  // u
        data[3 + i] = a[1];  // v
        data[4 + i] = color[0];  // r
        data[5 + i] = color[1];  // g
        data[6 + i] = color[2];  // b

        // top right
        data[7 + i] = v1[0];
        data[8 + i] = v1[1];
        data[9 + i] = b[0];
        data[10 + i] = b[1];
        data[11 + i] = color[0];
        data[12 + i] = color[1];
        data[13 + i] = color[2];

        // bottom right
        data[14 + i] = v2[0];
        data[15 + i] = v2[1];
        data[16 + i] = c[0];
        data[17 + i] = c[1];
        data[18 + i] = color[0];
        data[19 + i] = color[1];
        data[20 + i] = color[2];

        // bottom left
        data[21 + i] = v3[0];
        data[22 + i] = v3[1];
        data[23 + i] = d[0];
        data[24 + i] = d[1];
        data[25 + i] = color[0];
        data[26 + i] = color[1];
        data[27 + i] = color[2];

        instanceCount++;
        nextCharX += charSprite.advance;
    }

    console.log(data)
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, data);
    gl.drawElements(gl.TRIANGLES, 6*instanceCount, gl.UNSIGNED_SHORT, 0);
    
    // gl.uniform4fv(programInfo.uniformLocations.ambientColor, new Float32Array([0.3, 0.3, 0.3, 0.0]));
    // gl.uniform4fv(programInfo.uniformLocations.specularColor, new Float32Array([0.9, 0.9, 0.8, 1]));
    // gl.uniform3fv(programInfo.uniformLocations.lightPosition, new Float32Array([-1.85, 1.8, 1.75]));
    // gl.uniform3fv(programInfo.uniformLocations.viewPosition, new Float32Array([0.85, 0.8, 0.75]));

    // gl.uniformMatrix4fv(
    //   programInfo.uniformLocations.projectionMatrix,
    //   false,
    //   projectionMatrix
    // );
    // gl.uniformMatrix4fv(
    //   programInfo.uniformLocations.modelViewMatrix,
    //   false,
    //   modelViewMatrix
    // );
    // gl.uniformMatrix4fv(
    //   programInfo.uniformLocations.normalMatrix,
    //   false,
    //   modelViewMatrix
    // );

    {
        // const vertexCount: number = 36;
        // const type: number = gl.UNSIGNED_SHORT;
        // const offset: number = 0;
        // gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }
}

function clearScene4(gl: WebGL2RenderingContext){
    cancelAnimationFrame(requestFrame);
    gl.deleteProgram(textShaderProgram);
}
  
// function setPositionAttribute(gl: WebGL2RenderingContext, buffers: IShapeBuffers, programInfo: IFongProgramInfo) {
//     const numComponents: number = 3;
//     const type: number = gl.FLOAT; // the data in the buffer is 32bit floats
//     const normalize: boolean = false; // don't normalize
//     const stride: number = 0; // how many bytes to get from one set of values to the next 0 = use type and numComponents above
//     const offset: number = 0; // how many bytes inside the buffer to start from
//     gl.bindBuffer(gl.ARRAY_BUFFER, buffers.vertexes);
//     gl.vertexAttribPointer(
//         programInfo.attribLocations.vertexPosition,
//         numComponents,
//         type,
//         normalize,
//         stride,
//         offset
//     );
//     gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
// }

export { initScene4, clearScene4 };