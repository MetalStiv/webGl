#version 300 es

precision highp float;

uniform vec2 uResolution;
uniform float uTime;

out vec4 FragColor;

vec2 rotate2D(vec2 uv, float a){
    float s = sin(a);
    float c = cos(a); 
    mat2 rotateMatrix = mat2(c, -s, s, c);
    return rotateMatrix*uv;
}

vec2 hash12(float t){
    float x = fract(sin(t*3453.329));
    float y = fract(sin((t+x)*8532.732));
    return vec2(x, y);
}

void main(){
    vec2 uv = (gl_FragCoord.xy-0.5*uResolution.xy)/uResolution.y;
    uv = rotate2D(uv, 3.14/2.0);
    vec3 color = vec3(0.0);
    
    float r = 0.16;
    for (float i = 0.0; i < 60.0; i++){
        float factor = (sin(uTime)*0.5+0.5)+0.3;
        i += factor;
        float angle = i;
        float dx = 2.0*r*cos(angle)-r*cos(2.0*angle);
        float dy = 2.0*r*sin(i)-r*sin(2.0*i);

        color += 0.001/length(uv-vec2(dx+0.1, dy) + 0.02*hash12(i));
    }

    color *= sin(vec3(0.2, 0.8, 0.9)*uTime);

    FragColor = vec4(color, 1.0);
}