import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

const Scene3D: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  const torusRef = useRef<THREE.Mesh>(null)
  const sphereRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      torusRef.current.rotation.y = state.clock.elapsedTime * 0.4
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.7) * 0.1
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group>
             {/* Yeezy-inspired minimal 3D shapes - Strictly Black & White */}
             <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
               <mesh ref={meshRef} position={[-2, 1, -3]}>
                 <boxGeometry args={[1.2, 1.2, 1.2]} />
                 <MeshDistortMaterial
                   color="#000000"
                   attach="material"
                   distort={0.1}
                   speed={1}
                   roughness={0.2}
                   metalness={0.1}
                   transparent
                   opacity={0.8}
                 />
               </mesh>
             </Float>

             <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
               <mesh ref={torusRef} position={[2, -1, -4]}>
                 <torusGeometry args={[0.8, 0.3, 8, 16]} />
                 <MeshDistortMaterial
                   color="#000000"
                   attach="material"
                   distort={0.2}
                   speed={1.5}
                   roughness={0.3}
                   metalness={0.2}
                   transparent
                   opacity={0.6}
                 />
               </mesh>
             </Float>

             <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.8}>
               <mesh ref={sphereRef} position={[0, 2, -2]}>
                 <sphereGeometry args={[0.6, 16, 16]} />
                 <MeshDistortMaterial
                   color="#000000"
                   attach="material"
                   distort={0.15}
                   speed={0.8}
                   roughness={0.4}
                   metalness={0.1}
                   transparent
                   opacity={0.7}
                 />
               </mesh>
             </Float>

             {/* Ambient lighting for minimal look - Pure white light */}
             <ambientLight intensity={0.4} color="#ffffff" />
             <pointLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
             <pointLight position={[-5, -5, -5]} intensity={0.4} color="#ffffff" />
    </group>
  )
}

export default Scene3D
