function createShader(gl: WebGL2RenderingContext, type: number, source: string) {
    let shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
}

function createBuffer(gl: WebGL2RenderingContext, data: number[], dataType: string, bufferType: string) {
    let buffer = gl.createBuffer();
    let bufType = bufferType === "ARRAY_BUFFER" ? gl.ARRAY_BUFFER
        : gl.ELEMENT_ARRAY_BUFFER
    gl.bindBuffer(bufType, buffer);
    let dataArray = dataType === "Float32" ? new Float32Array(data)
        : new Uint16Array(data);
    gl.bufferData(bufType, dataArray, gl.STATIC_DRAW);
    return buffer;
}

// function loadTexture(gl, filename, format = gl.RGBA, generate_mipmap = true, nearest = false, repeat = false) {
//     var tex = gl.createTexture();
//     var image = new Image();
//     image.onload = function() {setTexImage(gl, image, tex, format, generate_mipmap, nearest, repeat);};
//     image.src = filename;
//     var res = { id: tex, image: image };
//     return res;
// }

function loadTexture(gl, url) {
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
  
    const level = 0;
    const internalFormat = gl.RGBA;
    const width = 1;
    const height = 1;
    const border = 0;
    const srcFormat = gl.RGBA;
    const srcType = gl.UNSIGNED_BYTE;
    const pixel = new Uint8Array([0, 0, 255, 255]);
    gl.texImage2D(
        gl.TEXTURE_2D,
        level,
        internalFormat,
        width,
        height,
        border,
        srcFormat,
        srcType,
        pixel
    );
  
    const image = new Image();
    image.onload = () => {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(
            gl.TEXTURE_2D,
            level,
            internalFormat,
            srcFormat,
            srcType,
            image
        );
  
        if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
                // Yes, it's a power of 2. Generate mips.
                gl.generateMipmap(gl.TEXTURE_2D);
        } 
        else {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        }
    };
    image.src = url;
  
    return texture;
}

function isPowerOf2(value) {
    return (value & (value - 1)) === 0;
}

function setTexImage(gl, image, tex, format, generate_mipmap, nearest_filtering, repeat_uv) {
    gl.bindTexture( gl.TEXTURE_2D, tex );
    gl.texImage2D( gl.TEXTURE_2D, 0, format, format, gl.UNSIGNED_BYTE, image );

    if ( !nearest_filtering ) {
        gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR );
    } else {
        gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
    }

    if ( repeat_uv ) {
        gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT );
        gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT );        
    } else {
        gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE );
        gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE );
    }

    if ( generate_mipmap ) {
        gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR );
        gl.generateMipmap( gl.TEXTURE_2D );
    } else {
        if ( !nearest_filtering ) {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        } else {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        }
    }
    gl.bindTexture(gl.TEXTURE_2D, null);
}

export {createShader, createBuffer, loadTexture, setTexImage}