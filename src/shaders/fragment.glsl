#version 300 es

precision highp float;

in vec4 vDiffColor;
in vec4 vAmbientColor;
in vec4 vSpecularColor;
in vec3 vLightDirection;
in vec3 vViewDirection;
in vec3 vNormal;

out vec4 FragColor;

void main(void)
{
    const float specPower = 30.0;
    vec3 vReflectedView = reflect(-vViewDirection, vNormal);

    vec4 vDiff = vDiffColor*max(dot(-vNormal, vViewDirection), 0.0);
    vDiff[3] = 1.0;
    vec4 vSpec = vSpecularColor*pow(max(dot(vViewDirection, vReflectedView), 0.0), specPower);
    vSpec[3] = 1.0;

    FragColor = vAmbientColor+vDiff+vSpec;
}