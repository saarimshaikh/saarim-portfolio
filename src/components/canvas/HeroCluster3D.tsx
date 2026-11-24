import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Html } from '@react-three/drei';
import * as THREE from 'three';

// Node data definition
interface MeshNode {
  id: string;
  name: string;
  type: 'core' | 'eks' | 'spark' | 'airflow' | 'kafka';
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
  radius: number;
  angle: number;
  yOffset: number;
  specs: string;
}

const NODES_CONFIG: Omit<MeshNode, 'position'>[] = [
  // EKS Clusters
  { id: 'eks-1', name: 'EKS Cluster-01 (ARM64)', type: 'eks', color: '#38BDF8', size: 0.35, speed: 0.25, radius: 2.8, angle: 0, yOffset: 0.6, specs: '450 Nodes | 64 vCPU | 512 GiB' },
  { id: 'eks-2', name: 'EKS Cluster-02 (us-west)', type: 'eks', color: '#38BDF8', size: 0.32, speed: 0.22, radius: 3.2, angle: Math.PI * 0.65, yOffset: -0.5, specs: 'Kueue Gang Scheduling' },
  { id: 'eks-3', name: 'EKS Cluster-03 (eu-west)', type: 'eks', color: '#38BDF8', size: 0.30, speed: 0.28, radius: 2.9, angle: Math.PI * 1.3, yOffset: 0.8, specs: 'ARM64 Graviton3 Fleet' },

  // Spark Executors
  { id: 'spark-1', name: 'Spark Executor Fleet A', type: 'spark', color: '#F59E0B', size: 0.28, speed: 0.35, radius: 4.1, angle: 0.8, yOffset: -0.8, specs: 'PySpark 3.5 | 275 TB Reclaimed' },
  { id: 'spark-2', name: 'Spark Executor Fleet B', type: 'spark', color: '#F59E0B', size: 0.26, speed: 0.32, radius: 3.8, angle: 2.5, yOffset: 0.4, specs: 'Dynamic Shuffle Tuning' },
  { id: 'spark-3', name: 'Spark Driver Pool', type: 'spark', color: '#F59E0B', size: 0.25, speed: 0.38, radius: 4.3, angle: 4.2, yOffset: 1.1, specs: 'Decoupled Version Lifecycles' },

  // Airflow Pods
  { id: 'airflow-1', name: 'Airflow K8s Executor', type: 'airflow', color: '#10B981', size: 0.28, speed: 0.18, radius: 3.5, angle: 1.6, yOffset: 1.2, specs: '40+ Clusters | 100+ Operators' },
  { id: 'airflow-2', name: 'Airflow Scheduler Quorum', type: 'airflow', color: '#10B981', size: 0.25, speed: 0.20, radius: 3.3, angle: 3.7, yOffset: -0.9, specs: 'Ephemeral Pods & Secrets' },

  // Kafka Streaming
  { id: 'kafka-1', name: 'Kafka High-Throughput Bus', type: 'kafka', color: '#A855F7', size: 0.30, speed: 0.42, radius: 4.8, angle: 5.1, yOffset: -0.3, specs: '51k Events/Day | Multi-Partition' },
  { id: 'kafka-2', name: 'Kafka Connect Cluster', type: 'kafka', color: '#A855F7', size: 0.27, speed: 0.40, radius: 4.5, angle: 2.1, yOffset: -1.3, specs: 'Stateful Streaming Watermarks' },
];

// Central Kubernetes Control Plane
function CoreControlPlane({ hoveredNode, setHoveredNode }: { hoveredNode: string | null; setHoveredNode: (id: string | null) => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerWireRef = useRef<THREE.Mesh>(null);
  const isHovered = hoveredNode === 'k8s-core';

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x += delta * 0.2;
    }
    if (outerWireRef.current) {
      outerWireRef.current.rotation.y -= delta * 0.25;
      outerWireRef.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Outer subtle glow sphere */}
      <mesh>
        <sphereGeometry args={[1.1, 24, 24]} />
        <meshBasicMaterial color="#38BDF8" transparent opacity={0.08} wireframe />
      </mesh>

      {/* Outer rotating cage */}
      <mesh ref={outerWireRef}>
        <icosahedronGeometry args={[0.95, 1]} />
        <meshStandardMaterial
          color="#38BDF8"
          emissive="#38BDF8"
          emissiveIntensity={isHovered ? 1.2 : 0.6}
          wireframe
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Core glowing solid */}
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHoveredNode('k8s-core');
        }}
        onPointerOut={() => setHoveredNode(null)}
      >
        <octahedronGeometry args={[0.65, 0]} />
        <meshStandardMaterial
          color={isHovered ? "#38BDF8" : "#0284C7"}
          emissive="#38BDF8"
          emissiveIntensity={isHovered ? 1.5 : 0.9}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Core Tooltip */}
      {isHovered && (
        <Html distanceFactor={10} position={[0, 1.2, 0]} center pointerEvents="none">
          <div className="bg-slate-950/90 border border-cyan-400/60 shadow-xl shadow-cyan-500/20 px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-300 whitespace-nowrap backdrop-blur-md">
            <div className="font-semibold text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              K8s Control Plane
            </div>
            <div className="text-[10px] text-cyan-200/80 mt-0.5">Multi-Region Active/Standby</div>
          </div>
        </Html>
      )}
    </group>
  );
}

// Orbiting Data Nodes
function OrbitNode({
  node,
  hoveredNode,
  setHoveredNode,
  onPositionUpdate
}: {
  node: typeof NODES_CONFIG[0];
  hoveredNode: string | null;
  setHoveredNode: (id: string | null) => void;
  onPositionUpdate: (id: string, pos: [number, number, number]) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const isHovered = hoveredNode === node.id;

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * node.speed + node.angle;
    const x = Math.cos(t) * node.radius;
    const z = Math.sin(t) * node.radius;
    const y = node.yOffset + Math.sin(t * 1.5) * 0.35;

    if (groupRef.current) {
      groupRef.current.position.set(x, y, z);
    }
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.015;
      meshRef.current.rotation.y += 0.02;
    }
    onPositionUpdate(node.id, [x, y, z]);
  });

  return (
    <group ref={groupRef}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHoveredNode(node.id);
        }}
        onPointerOut={() => setHoveredNode(null)}
      >
        {node.type === 'eks' && <boxGeometry args={[node.size, node.size, node.size]} />}
        {node.type === 'spark' && <octahedronGeometry args={[node.size * 0.9, 0]} />}
        {node.type === 'airflow' && <dodecahedronGeometry args={[node.size * 0.85, 0]} />}
        {node.type === 'kafka' && <torusGeometry args={[node.size * 0.7, 0.07, 8, 16]} />}

        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={isHovered ? 2.0 : 0.8}
          roughness={0.25}
          metalness={0.8}
        />
      </mesh>

      {/* Orbit Halo */}
      <mesh scale={isHovered ? [1.6, 1.6, 1.6] : [1.2, 1.2, 1.2]}>
        <sphereGeometry args={[node.size, 12, 12]} />
        <meshBasicMaterial
          color={node.color}
          wireframe
          transparent
          opacity={isHovered ? 0.6 : 0.2}
        />
      </mesh>

      {/* Tooltip on Hover */}
      {isHovered && (
        <Html distanceFactor={9} position={[0, 0.7, 0]} center pointerEvents="none">
          <div className="bg-slate-950/95 border border-slate-700/80 px-3 py-1.5 rounded-lg shadow-2xl backdrop-blur-md text-xs font-mono whitespace-nowrap min-w-[170px]">
            <div className="flex items-center gap-1.5 font-bold" style={{ color: node.color }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: node.color }}></span>
              {node.name}
            </div>
            <div className="text-[10px] text-slate-300 mt-0.5">{node.specs}</div>
          </div>
        </Html>
      )}
    </group>
  );
}

// Synapse Links and Data Pulses
function MeshLinks({
  nodePositions,
  hoveredNode
}: {
  nodePositions: Record<string, [number, number, number]>;
  hoveredNode: string | null;
}) {
  const lineGeometry = useMemo(() => {
    const points: number[] = [];
    const corePos: [number, number, number] = [0, 0, 0];

    Object.values(nodePositions).forEach((pos) => {
      // Line from core to node
      points.push(...corePos, ...pos);
    });

    // Inter-node links for mesh effect
    const keys = Object.keys(nodePositions);
    for (let i = 0; i < keys.length; i++) {
      const nextIdx = (i + 1) % keys.length;
      const p1 = nodePositions[keys[i]];
      const p2 = nodePositions[keys[nextIdx]];
      if (p1 && p2) {
        points.push(...p1, ...p2);
      }
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    return geom;
  }, [nodePositions]);

  // Data pulses traveling along links
  const pulseCount = 18;
  const pulseRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const positionsList = Object.values(nodePositions);
    if (positionsList.length === 0) return;

    pulseRefs.current.forEach((pulse, idx) => {
      if (!pulse) return;
      const targetNode = positionsList[idx % positionsList.length];
      if (!targetNode) return;

      // Pulse travels from center (0,0,0) to target node
      const progress = ((t * 0.8 + idx * 0.15) % 1);
      pulse.position.set(
        targetNode[0] * progress,
        targetNode[1] * progress,
        targetNode[2] * progress
      );
      pulse.scale.setScalar(0.04 + Math.sin(progress * Math.PI) * 0.04);
    });
  });

  return (
    <group>
      {/* Network Links */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial
          color="#38BDF8"
          transparent
          opacity={hoveredNode ? 0.35 : 0.18}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Floating Data Pulses */}
      {Array.from({ length: pulseCount }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) pulseRefs.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? '#38BDF8' : i % 3 === 1 ? '#10B981' : '#F59E0B'}
            transparent
            opacity={0.85}
          />
        </mesh>
      ))}
    </group>
  );
}

// Background Starfield / Data Particulates
function TelemetryParticulates() {
  const count = 300;
  const pointsGeometry = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#38BDF8'),
      new THREE.Color('#0284C7'),
      new THREE.Color('#10B981'),
      new THREE.Color('#64748B')
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16;

      const chosen = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = chosen.r;
      col[i * 3 + 1] = chosen.g;
      col[i * 3 + 2] = chosen.b;
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(col, 3));
    return geom;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef} geometry={pointsGeometry}>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

// Main 3D Scene
function MeshScene() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [nodePositions, setNodePositions] = useState<Record<string, [number, number, number]>>({});
  const rootGroupRef = useRef<THREE.Group>(null);

  const updateNodePosition = (id: string, pos: [number, number, number]) => {
    setNodePositions((prev) => {
      // Throttle updates if unchanged
      const curr = prev[id];
      if (curr && Math.abs(curr[0] - pos[0]) < 0.02 && Math.abs(curr[1] - pos[1]) < 0.02) {
        return prev;
      }
      return { ...prev, [id]: pos };
    });
  };

  useFrame((state) => {
    if (rootGroupRef.current) {
      // Gentle auto-rotation and pointer parallax
      const targetRotationY = state.pointer.x * 0.25;
      const targetRotationX = -state.pointer.y * 0.2;
      rootGroupRef.current.rotation.y = THREE.MathUtils.lerp(rootGroupRef.current.rotation.y, targetRotationY, 0.05);
      rootGroupRef.current.rotation.x = THREE.MathUtils.lerp(rootGroupRef.current.rotation.x, targetRotationX, 0.05);
    }
  });

  return (
    <group ref={rootGroupRef}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#38BDF8" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#10B981" />
      <pointLight position={[0, 0, 0]} intensity={2.2} color="#38BDF8" distance={6} />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <CoreControlPlane hoveredNode={hoveredNode} setHoveredNode={setHoveredNode} />
      </Float>

      {NODES_CONFIG.map((node) => (
        <OrbitNode
          key={node.id}
          node={node}
          hoveredNode={hoveredNode}
          setHoveredNode={setHoveredNode}
          onPositionUpdate={updateNodePosition}
        />
      ))}

      <MeshLinks nodePositions={nodePositions} hoveredNode={hoveredNode} />
      <TelemetryParticulates />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.7}
        minPolarAngle={Math.PI / 2.3}
        rotateSpeed={0.5}
      />
    </group>
  );
}

// Low-power/WebGL Fallback
function CanvasFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-80 h-80 rounded-full border border-cyan-500/20 flex items-center justify-center animate-spin" style={{ animationDuration: '40s' }}>
        <div className="w-56 h-56 rounded-full border border-emerald-500/20 flex items-center justify-center animate-ping" style={{ animationDuration: '6s' }}>
          <div className="w-24 h-24 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 flex flex-col items-center justify-center text-center p-2">
            <span className="text-[10px] font-mono text-cyan-300 font-bold">K8s Mesh</span>
            <span className="text-[9px] text-slate-400">40+ Clusters</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroCluster3D() {
  const [hasWebGLError, setHasWebGLError] = useState(false);

  return (
    <div className="relative w-full h-[520px] md:h-[620px] lg:h-[700px] flex items-center justify-center select-none overflow-hidden">
      {hasWebGLError ? (
        <CanvasFallback />
      ) : (
        <React.Suspense fallback={<CanvasFallback />}>
          <Canvas
            camera={{ position: [0, 0, 7.8], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0);
            }}
            onError={() => setHasWebGLError(true)}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          >
            <MeshScene />
          </Canvas>
        </React.Suspense>
      )}

      {/* Subtle bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070B14] via-[#070B14]/80 to-transparent pointer-events-none" />
    </div>
  );
}
