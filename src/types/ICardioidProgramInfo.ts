interface ICardioidProgramInfo {
    program: WebGLProgram,
    attribLocations: {},
    uniformLocations: {
        resolution: WebGLUniformLocation,
        time: WebGLUniformLocation,
    },
};

export default ICardioidProgramInfo;