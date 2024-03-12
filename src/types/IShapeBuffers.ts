interface IShapeBuffers {
    vertexes: WebGLBuffer,
    vertexOrder: WebGLBuffer,
    normals: WebGLBuffer,
    colors?: WebGLBuffer,
    textureCoords?: WebGLBuffer,
}

export default IShapeBuffers;