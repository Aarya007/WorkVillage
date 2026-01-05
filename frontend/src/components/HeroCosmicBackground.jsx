import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const HeroCosmicBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111827); // gray-900 with subtle purple bias

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 30);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    rendererRef.current = renderer;

    // Particle system setup
    const particleCount = 60000; // Optimized count for stable 60fps
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    // Color palette - pink and purple gradients
    const colorPalette = [
      new THREE.Color(0xec4899), // pink-500
      new THREE.Color(0xa855f7), // purple-500
      new THREE.Color(0xc084fc), // purple-400
      new THREE.Color(0xe879f9), // pink-400
    ];

    // Create particles in a flowing, organic pattern
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Create flowing, organic distribution
      const radius = Math.random() * 25 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      // Add some noise for more organic distribution
      const noiseX = (Math.random() - 0.5) * 10;
      const noiseY = (Math.random() - 0.5) * 10;
      const noiseZ = (Math.random() - 0.5) * 10;

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta) + noiseX;
      positions[i3 + 1] = radius * Math.cos(phi) + noiseY;
      positions[i3 + 2] = radius * Math.sin(phi) * Math.sin(theta) + noiseZ;

      // Assign colors from palette
      const colorIndex = Math.floor(Math.random() * colorPalette.length);
      const color = colorPalette[colorIndex];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      // Vary particle sizes
      scales[i] = Math.random() * 2 + 0.5;
    }

    // Geometry and material
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Shader material for custom particle rendering
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        size: { value: 2.0 },
      },
      vertexShader: `
        attribute float scale;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float time;
        uniform float size;

        void main() {
          vColor = color;

          // Add subtle movement
          vec3 pos = position;
          pos.y += sin(time * 0.5 + position.x * 0.1) * 0.5;
          pos.x += cos(time * 0.3 + position.z * 0.1) * 0.3;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * scale * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;

        void main() {
          // Create soft circular particles
          float distance = length(gl_PointCoord - vec2(0.5));
          if (distance > 0.5) discard;

          float alpha = 1.0 - smoothstep(0.0, 0.5, distance);
          gl_FragColor = vec4(vColor, alpha * 0.6);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.01;

      // Update material uniforms
      material.uniforms.time.value = time;

      // Gentle camera movement
      camera.position.x = Math.sin(time * 0.1) * 2;
      camera.position.y = Math.cos(time * 0.15) * 1;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      geometry.dispose();
      material.dispose();
      scene.clear();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        opacity: 0.4,
        mixBlendMode: 'screen',
      }}
    />
  );
};

export default HeroCosmicBackground;
