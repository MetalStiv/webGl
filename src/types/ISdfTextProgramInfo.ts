interface ISdfTextProgramInfo {
    program: WebGLProgram,
    attribLocations: {
        pos: number,
        tex0: number,
        scale: number,
    },
    uniformLocations: {
        sdfTexSize: WebGLUniformLocation,
        transform: WebGLUniformLocation,
        sdfBorderSize: WebGLUniformLocation,
        fontTex: WebGLUniformLocation,
        hintAmount: WebGLUniformLocation,
        subPixelAmount: WebGLUniformLocation,
        fontColor: WebGLUniformLocation,
    },
};

export default ISdfTextProgramInfo;