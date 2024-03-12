interface ITextureFongProgramInfo {
    program: WebGLProgram,
    attribLocations: {
        vertexPosition: number,
        vertexTextureCoord: number,
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

        sampler: WebGLUniformLocation
    },
};

export default ITextureFongProgramInfo;