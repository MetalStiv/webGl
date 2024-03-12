#version 300 es

precision highp float;

in vec3 vColor;
in vec2 vTextureCoord;

uniform sampler2D uSampler;

out vec4 FragColor;

void main(void)
{
    vec4 texelColor = texture(uSampler, vTextureCoord);
    FragColor = vec4(texelColor.rgb * vColor, texelColor.a);
}