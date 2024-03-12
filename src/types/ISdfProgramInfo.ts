interface ISdfProgramInfo {
    program: WebGLProgram,
    attribLocations: {},
    uniformLocations: {
        resolution: WebGLUniformLocation,
        time: WebGLUniformLocation,
        mouse: WebGLUniformLocation,
    },
};

export default ISdfProgramInfo;