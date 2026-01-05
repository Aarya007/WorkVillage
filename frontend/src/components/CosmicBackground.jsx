import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const CosmicBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Check if THREE is available
    if (!THREE) {
      console.error('THREE.js not available');
      return;
    }

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x0a0a0a); // Very dark neutral, not pure black

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 50);

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

    // Enhanced cosmic particle system
    const particleCount = 45000; // Optimized for full-page coverage
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);

    // WorkVillage color palette - pink to purple gradients
    // Use simple RGB values to avoid THREE.Color issues
    const cosmicColors = [
      [0.925, 0.282, 0.600], // pink-500
      [0.659, 0.341, 0.969], // purple-500
      [0.757, 0.518, 0.988], // purple-400
      [0.910, 0.475, 0.976], // pink-400
      [0.545, 0.341, 0.965], // purple-500 (deeper)
      [0.388, 0.388, 0.945], // indigo-500 (subtle)
    ];

    // Create cosmic energy field
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Create cosmic distribution - more dense in center, fading outward
      const radius = Math.pow(Math.random(), 0.5) * 80; // Exponential distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1); // Uniform sphere distribution

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.cos(phi);
      positions[i3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

      // Layered depth - closer particles are more visible
      const depth = Math.abs(positions[i3 + 2]) / 80;
      const colorIndex = Math.floor(depth * cosmicColors.length);
      const safeIndex = Math.max(0, Math.min(colorIndex, cosmicColors.length - 1));
      const color = cosmicColors[safeIndex];

      // Assign colors directly as RGB values
      colors[i3] = color[0];
      colors[i3 + 1] = color[1];
      colors[i3 + 2] = color[2];

      // Size variation based on depth
      scales[i] = Math.random() * 3 + 0.5 * (1 - depth);

      // Gentle movement velocities
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01;
    }

    // Simple points material for cosmic particles
    const material = new THREE.PointsMaterial({
      size: 2,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Verify geometry attributes are set correctly
    if (!geometry.attributes.position || !geometry.attributes.color) {
      console.error('Geometry attributes not set correctly');
      return;
    }

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.005; // Very slow, breathing pace

      // Gentle cosmic drift
      camera.position.x = Math.sin(time * 0.03) * 3;
      camera.position.y = Math.cos(time * 0.02) * 2;
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
      if (sceneRef.current) {
        sceneRef.current.clear();
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full pointer-events-none z-0"
      style={{
        opacity: 0.6,
        mixBlendMode: 'screen',
        filter: 'blur(0.5px)',
        bottom: '300px', // Leave space for footer (approximately 300px)
        height: 'calc(100vh - 300px)', // Explicit height calculation
      }}
    />
  );
};

export default CosmicBackground;
