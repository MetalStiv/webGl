import IProgramInfo from "./types/IProgramInfo";
import IShapeBuffers from "./types/IShapeBuffers";

let mat4 = require('gl-mat4');

function drawScene(gl: WebGL2RenderingContext, programInfo: IProgramInfo, buffers: IShapeBuffers, cubeRotation: number) {
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
    setColorAttribute(gl, buffers, programInfo);
  
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
  
    {
        const vertexCount: number = 36;
        const type: number = gl.UNSIGNED_SHORT;
        const offset: number = 0;
        gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }
}
  
function setPositionAttribute(gl: WebGL2RenderingContext, buffers: IShapeBuffers, programInfo: IProgramInfo) {
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

function setColorAttribute(gl: WebGL2RenderingContext, buffers: IShapeBuffers, programInfo: IProgramInfo) {
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

export { drawScene };