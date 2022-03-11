import { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { CameraShake, SpotLight, Stars } from "@react-three/drei";
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from "@react-three/postprocessing";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const ThreeScene = () => {

    const Computer = ({position, rotation, xrot, yrot}) => {
        const gltf = useLoader(GLTFLoader, '/assets/computer.gltf')

        const monitor = useRef();
        const keyboard = useRef();
        const mouse = useRef();
        const gcase = useRef();
        const headphone = useRef();

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

    const Notebook = ({position, rotation, xrot, yrot}) => {
        const note = useRef();
        const gltf = useLoader(GLTFLoader, '/assets/note.gltf')
    
        useFrame(() => (note.current.rotation.x += xrot, note.current.rotation.y += yrot))
        
        return <primitive ref={note} position={position} rotation={rotation} object={gltf.scene}  />
    }


    // const first = useRef();
    // const {end, start} = useRefScrollProgress(first)

    // const { scrollYProgress } = useViewportScroll()


    // const scale = useTransform(scrollYProgress, [start / 1.5, end], [0.5, 1]);
    // const x = useTransform(scrollYProgress, [start, end], [-80, 0]);
    // const opacite = useTransform(scrollYProgress, [start, end], [50, 80]);
    
        

  return (
        <Canvas 
            // ref={first}
            // style={{
            //     x,
            //     opacite
            // }}
            
            camera={{ fov: 55, near: 0.1, far: 1000, position: [0, 0, 5] }}
        >
            <CameraShake
                maxYaw= {0.02} // Max amount camera can yaw in either direction
                maxPitch= {0.20} // Max amount camera can pitch in either direction
                maxRoll= {0.80} // Max amount camera can roll in either direction
                yawFrequency= {0.2} // Frequency of the the yaw rotation
                pitchFrequency= {0.2} // Frequency of the pitch rotation
                rollFrequency= {0.2} // Frequency of the roll rotation
                intensity= {0.2} // initial intensity of the shake
                decay= {false} // should the intensity decay over time
                decayRate= {0.65} // if decay = true this is the rate at which intensity will reduce at
                additive= {false} // this should be used when your scene has orbit controls
            />
            <Suspense fallback={null}>
                <Computer position={[-0.2, 0.4, -2]} rotation={[0.1, -2, -0.2]} xrot={0.000} yrot={-0.002} />
                <Notebook position={[1.6, -1.6, -1]} rotation={[0.1, -1.2, -0.2]} xrot={0.000} yrot={-0.002} />
            </Suspense>
            <SpotLight
                distance={8}
                angle={1}
                attenuation={4.7}
                position={[0,-3, 0]}
                anglePower={5} // Diffuse-cone anglePower (default: 5)
            />
            <Stars count={200} radius={200} />
            <ambientLight intensity={0.1} />
            <pointLight position={[10, 10, 10]} />
            <EffectComposer multisampling={0} disableNormalPass={true}>
                <DepthOfField
                    focusDistance={2}
                    focalLength={0.02}
                    bokehScale={1.5}
                    height={280}
                />
                <Bloom
                    luminanceThreshold={0.3}
                    luminanceSmoothing={0.9}
                    height={300}
                    opacity={3}
                />
                <Noise opacity={0.025} />
                <Vignette eskil={false} offset={0.1} darkness={1.2} />
            </EffectComposer>
        </Canvas>
  )
}

export default ThreeScene