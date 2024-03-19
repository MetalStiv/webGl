#version 300 es

precision highp float;

uniform vec2 uResolution;
uniform vec3 uMouse;
uniform float uTime;

out vec4 FragColor;

float sdPie(in vec2 p, in vec2 c, in float r)
{
    p.x = abs(p.x);
    float l = length(p)-r;
	float m = length(p-c*clamp(dot(p, c), 0.0, r));
    return max(l, m*sign(c.y*p.x-c.x*p.y));
}

void main(){
    vec2 p = (gl_FragCoord.xy*2.0-uResolution.xy)/uResolution.y;
    vec2 m = (2.0*uMouse.xy-uResolution.xy)/uResolution.y;
    
    float t = 3.14*(0.5+0.5*cos(uTime*0.52));
    vec2 w = vec2(0.50,0.25)*(0.5+0.5*cos(uTime*vec2(1.1, 1.3)+vec2(0.0, 2.0)));
    
    float d = sdPie(p, vec2(sin(t), cos(t)), 0.5);
    
    vec3 col = vec3(1.0) - sign(d)*vec3(0.6, 0.6, 0.3);
	col *= 1.0-exp(-6.0*abs(d));
	col *= 0.8+0.2*cos(128.0*abs(d));
	col = mix(col, vec3(1.0), 1.0-smoothstep(0.0, 0.015, abs(d)));

    if(uMouse.z > 0.0)
    {
        d = sdPie(m, vec2(sin(t), cos(t)), 0.5);
        col = mix(col, vec3(1.0, 1.0, 0.0), 1.0-smoothstep(0.0, 0.005, abs(length(p-m)-abs(d))-0.0025));
        col = mix(col, vec3(1.0, 1.0, 0.0), 1.0-smoothstep(0.0, 0.005, length(p-m)-0.015));
    }

	FragColor = vec4(col, 1.0);
}