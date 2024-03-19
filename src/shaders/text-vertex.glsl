#version 300 es

precision highp float;

in vec3 aVertexPosition;
in vec2 aVertexTexCoord;
in vec3 aVertexColor;

out vec2 vTexCoords;
out vec3 vColor; 

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

void main()
{
    gl_Position = uProjectionMatrix*uModelViewMatrix*vec4(aVertexPosition, 1.0);
    vTexCoords = aVertexTexCoord;
    vColor = aVertexColor;
}