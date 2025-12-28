// components/WebGLHero.jsx
'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Animated 3D Sphere with floating particles
const AnimatedSphere = () => {
  const meshRef = useRef();
  const particlesRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#6366f1"
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
      
      <Particles count={50} />
    </group>
  );
};

// Floating particles component
const Particles = ({ count = 20 }) => {
  const particlesRef = useRef();
  const positions = useRef(new Float32Array(count * 3));
  const colors = useRef(new Float32Array(count * 3));

  useEffect(() => {
    for (let i = 0; i < count; i++) {
      positions.current[i * 3] = (Math.random() - 0.5) * 4;
      positions.current[i * 3 + 1] = (Math.random() - 0.5) * 4;
      positions.current[i * 3 + 2] = (Math.random() - 0.5) * 4;
      
      colors.current[i * 3] = Math.random();
      colors.current[i * 3 + 1] = Math.random();
      colors.current[i * 3 + 2] = Math.random();
    }
  }, [count]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.current}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

// Floating geometric shapes
const FloatingShapes = () => {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, -2, 0]}>
        <mesh position={[-1.5, 0, 0]} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[0.5, 0.2, 16, 32]} />
          <meshStandardMaterial color="#f472b6" metalness={0.6} roughness={0.2} />
        </mesh>
        
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <boxGeometry args={[0.7, 0.7, 0.7]} />
          <meshStandardMaterial color="#60a5fa" metalness={0.7} roughness={0.1} />
        </mesh>
        
        <mesh position={[1.5, 0, 0]}>
          <coneGeometry args={[0.5, 1, 32]} />
          <meshStandardMaterial color="#34d399" metalness={0.5} roughness={0.3} />
        </mesh>
      </group>
    </Float>
  );
};

// Scene with lighting and controls
const Scene = () => {
  const { gl, scene } = useThree();
  
  useEffect(() => {
    gl.setClearColor(new THREE.Color('#0f172a'));
    scene.fog = new THREE.Fog('#0f172a', 5, 15);
  }, [gl, scene]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight
        position={[-10, 10, -10]}
        angle={0.3}
        intensity={1}
        castShadow
      />
      
      <AnimatedSphere />
      <FloatingShapes />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        maxDistance={8}
        minDistance={3}
      />
    </>
  );
};

// Main component
export default function WebGLHero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-screen relative "
    >
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
          }}
        >
          <Scene />
        </Canvas>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-white mb-4">
            Immersive 3D
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Powered by WebGL and React Three Fiber
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pointer-events-auto bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors"
          >
            Explore More
          </motion.button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
        />
      </div>
    </motion.div>
  );
}