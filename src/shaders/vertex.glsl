#version 300 es

in vec4 aVertexPosition;
in vec3 aVertexNormal;
in vec4 aVertexColor;

uniform vec4 uAmbientColor;
uniform vec4 uSpecularColor;
uniform vec3 uLightPosition;
uniform vec3 uViewPosition;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uNormalMatrix;

out vec4 vDiffColor;
out vec4 vAmbientColor;
out vec4 vSpecularColor;
out vec3 vLightDirection;
out vec3 vViewDirection;
out vec3 vNormal;

void main(void)
{
    gl_Position = uProjectionMatrix*uModelViewMatrix*aVertexPosition;

    vDiffColor = aVertexColor;
    vAmbientColor = uAmbientColor;
    vSpecularColor = uSpecularColor;

    vec4 p = vec4(uModelViewMatrix*aVertexPosition);
    vLightDirection = normalize(uLightPosition-p.xyz);
    vViewDirection = normalize(uViewPosition-p.xyz);
    vNormal = normalize((uNormalMatrix*vec4(aVertexNormal, 1.0)).xyz);
}