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

out vec4 vColor;

void main(void)
{
    gl_Position = uProjectionMatrix*uModelViewMatrix*aVertexPosition;

    vec4 p = vec4(uModelViewMatrix*aVertexPosition);
    vec3 vLightDirection = normalize(uLightPosition-p.xyz);
    vec3 vViewDirection = normalize(uViewPosition-p.xyz);
    vec3 vNormal = normalize((uNormalMatrix*vec4(aVertexNormal, 1.0)).xyz);

    const float specPower = 30.0;
    vec3 vReflectedView = reflect(-vViewDirection, vNormal);
    vec4 vDiff = aVertexColor*max(dot(-vNormal, vViewDirection), 0.0);
    vDiff[3] = 1.0;
    vec4 vSpec = uSpecularColor*pow(max(dot(vViewDirection, vReflectedView), 0.0), specPower);
    vSpec[3] = 1.0;
    
    vColor = uAmbientColor+vDiff+vSpec;
}