#version 300 es

precision highp float;

in vec2 vTexCoords;
in vec3 vColor;

uniform sampler2D uTexture;

out vec4 FragColor;

void main()
{
    FragColor = texture(uTexture, vTexCoords)*vec4(vColor, 1.0);
}