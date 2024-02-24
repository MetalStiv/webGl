interface IFongProgramInfo {
    program: WebGLProgram,
    attribLocations: {
        vertexPosition: number,
        vertexColor: number,
        vertexNormal: number,
    },
    uniformLocations: {
        ambientColor: WebGLUniformLocation,
        specularColor: WebGLUniformLocation,
        lightPosition: WebGLUniformLocation,
        viewPosition: WebGLUniformLocation,

        projectionMatrix: WebGLUniformLocation,
        modelViewMatrix: WebGLUniformLocation,
        normalMatrix: WebGLUniformLocation,
    },
};

export default IFongProgramInfo;