import { useRef, Suspense, FC } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { SpotLight, Stars } from "@react-three/drei";
import { EffectComposer, Noise, Vignette } from "@react-three/postprocessing";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

type PositionProps = {
  position: Number[];
  rotation: Number[];
  xrot: Number;
  yrot: Number;
}

interface Data {
  renderState: "always" | "demand";
}

const ThreeScene:FC<Data> = ({renderState}) => {
    const Computer: FC<PositionProps> = ({position, rotation, xrot, yrot}) => {
        const gltf = useLoader(GLTFLoader, '/assets/threejs/computer.gltf')

        const monitor = useRef<any>(null);
        const keyboard = useRef<any>(null);
        const mouse = useRef<any>(null);
        const gcase = useRef<any>(null);
        const headphone = useRef<any>(null);

        useFrame(() => (monitor.current.rotation.y += 0.002))
        useFrame(() => (gcase.current.rotation.x += 0.0006, gcase.current.rotation.y += -0.002))
        useFrame(() => (keyboard.current.rotation.x += 0.002, keyboard.current.rotation.y += 0.002))
        useFrame(() => (mouse.current.rotation.x +=-0.002, mouse.current.rotation.y += 0.006))
        useFrame(() => (headphone.current.rotation.x += 0.002, headphone.current.rotation.y += 0.002))

        return (
            <group dispose={null} rotation={[0.2, 3, 0]}>
                <group ref={headphone} position={[-0.5, 0.51, -1.13]} rotation={[0, 1, 0]}>
                    <primitive 
                        object={gltf.nodes.cube_3}
                        position={[-0.19, -0.13, 0]}
                    />
                    <primitive 
                        object={gltf.nodes.cube_4}
                        position={[0, 0.13, 0]}
                    />
                    <primitive 
                        object={gltf.nodes.cube_5}
                        position={[0.13, -0.06, 0]}
                    />
                    <primitive 
                        object={gltf.nodes.cube_6}
                        position={[0.13, 0.06, 0]}
                    />
                    <primitive 
                        object={gltf.nodes.cube_7}
                        position={[-0.25, 0.06, 0]}
                    />
                </group>
                <group ref={monitor} position={[1, 0.56, 0.38]} rotation={[0.3, -2.8, 0]}>
                    <primitive 
                        object={gltf.nodes.cube_8} 
                    />
                    <primitive 
                        object={gltf.nodes.cube_9} 
                    />
                    <primitive 
                        object={gltf.nodes.cube_10} 
                    />
                </group>
                <primitive 
                    ref={gcase}
                    object={gltf.nodes.cube}
                    position={[1.55, -1, -0.06]}
                    rotation={[-0.3, 0.4, -0.2]}
                />
                <primitive 
                    ref={keyboard}
                    object={gltf.nodes.cube_1} 
                    position={[-1.28, 0.80, -0.19]}
                    rotation={[-0.6, -0.2, 0.1]}
                />
                <primitive 
                    ref={mouse}
                    object={gltf.nodes.cube_2} 
                    position={[-0.5, -1.06, -0.19]}
                    rotation={[-0.3, 0.4, -0.2]}
                />
            </group>
        )
    }

    const Notebook: FC<PositionProps> = ({position, rotation, xrot, yrot}) => {
        const note = useRef<any>(null);
        const gltf = useLoader(GLTFLoader, '/assets/threejs/note.gltf')
    
        useFrame(() => (note.current.rotation.x += xrot, note.current.rotation.y += yrot))
        
        return <primitive ref={note} position={position} rotation={rotation} object={gltf.scene}  />
    }
        
  return (
        <Canvas frameloop={renderState} camera={{ fov: 55, near: 0.1, far: 1000, position: [0, 0, 5] }}>
            <Suspense fallback={null}>
                <Computer position={[-0.2, 0.4, -2]} rotation={[0.1, -2, -0.2]} xrot={0.000} yrot={-0.002} />
                <Notebook position={[1.6, -1.6, -1]} rotation={[0.1, -1.2, -0.2]} xrot={0.000} yrot={-0.002} />
            </Suspense>
            <SpotLight
                distance={8}
                angle={1}
                position={[0,-3, 0]}
            />
            <ambientLight intensity={0.3} />
            <Stars count={100} radius={20}/>
            <EffectComposer 
              multisampling={0} 
              disableNormalPass={true}
            >
                <Noise opacity={0.080} />
                <Vignette eskil={false} offset={0.1} darkness={1.2} />
            </EffectComposer>
        </Canvas>
  )
}

export default ThreeScene