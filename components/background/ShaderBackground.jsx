"use client";

import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef } from "react";

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

// Smooth, silky domain-warped wave (liquid-metal look) mapped between two colors.
const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uIntensity;
uniform vec2 uResolution;
uniform vec3 uColor1;
uniform vec3 uColor2;

out vec4 fragColor;

void main() {
  // Aspect-correct, centered coordinates.
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution) / min(uResolution.x, uResolution.y);
  p *= 1.2;

  float t = uTime * 0.25;

  // Iterative domain warping creates the smooth, flowing wave bands.
  for (int i = 1; i < 4; i++) {
    float fi = float(i);
    p.x += 0.5 / fi * sin(fi * 1.5 * p.y + t) + t * 0.04;
    p.y += 0.5 / fi * cos(fi * 1.5 * p.x + t);
  }

  // A single smooth wave value, then a contrast curve for the glossy highlight.
  float v = 0.5 + 0.5 * sin(p.x * 1.5 + p.y * 1.5);
  v = pow(clamp(v, 0.0, 1.0), 1.6);
  v = clamp(v * uIntensity, 0.0, 1.0);

  vec3 color = mix(uColor1, uColor2, v);

  fragColor = vec4(color, 1.0);
}
`;

export default function ShaderBackground(props) {
  const {
    color1 = "#050505",
    color2 = "#f5f5f5",
    intensity = 1.0,
    speed = 1.0,
  } = props;

  const propsRef = useRef(props);
  propsRef.current = props;

  const ctnDom = useRef(null);

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;

    const renderer = new Renderer({
      alpha: true,
      premultipliedAlpha: true,
      antialias: true,
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.canvas.style.backgroundColor = "transparent";

    let program;

    function resize() {
      if (!ctn) return;
      const width = ctn.offsetWidth;
      const height = ctn.offsetHeight;
      renderer.setSize(width, height);
      if (program) {
        program.uniforms.uResolution.value = [width, height];
      }
    }
    window.addEventListener("resize", resize);

    const geometry = new Triangle(gl);
    if (geometry.attributes.uv) {
      delete geometry.attributes.uv;
    }

    const toRgb = (hex) => {
      const c = new Color(hex);
      return [c.r, c.g, c.b];
    };

    program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uIntensity: { value: intensity },
        uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
        uColor1: { value: toRgb(color1) },
        uColor2: { value: toRgb(color2) },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    ctn.appendChild(gl.canvas);

    let animateId = 0;
    const update = (t) => {
      animateId = requestAnimationFrame(update);
      const p = propsRef.current;
      const s = p.speed ?? speed;
      program.uniforms.uTime.value = t * 0.001 * s;
      program.uniforms.uIntensity.value = p.intensity ?? intensity;
      program.uniforms.uColor1.value = toRgb(p.color1 ?? color1);
      program.uniforms.uColor2.value = toRgb(p.color2 ?? color2);
      renderer.render({ scene: mesh });
    };
    animateId = requestAnimationFrame(update);

    resize();

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener("resize", resize);
      if (ctn && gl.canvas.parentNode === ctn) {
        ctn.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={ctnDom} className="h-full w-full" />;
}
