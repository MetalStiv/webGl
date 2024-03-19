interface ITextProgramInfo {
    program: WebGLProgram,
    attribLocations: {
        vertexPosition: number,
        vertexTextureCoord: number,
        vertexColor: number,
    },
    uniformLocations: {
        projectionMatrix: WebGLUniformLocation,
        modelViewMatrix: WebGLUniformLocation,
        sampler: WebGLUniformLocation,
    },
};

export default ITextProgramInfo;