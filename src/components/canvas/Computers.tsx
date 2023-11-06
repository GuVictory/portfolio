import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { useMediaQuery } from 'usehooks-ts';

const Computers = ({ isMobile = false, isTablet = false }) => {
    const computer = useGLTF('./desktop_pc/scene.gltf');

    return (
        <mesh>
            <ambientLight intensity={3.5} />
            <pointLight position={[0, -1, -1]} intensity={1} color="#fff" />
            <primitive
                object={computer.scene}
                scale={isMobile || isTablet ? 0.4 : 0.6}
                position={
                    isTablet ? [0, isMobile ? -3 : -3.5, -1] : [0, -3.5, -1]
                }
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

const ComputersCanvas = () => {
    // const [isMobile, setIsMobile] = useState(false);
    const isMobile = useMediaQuery('(max-width: 400px)');
    const isTablet = useMediaQuery('(max-width: 860px)');

    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} isTablet={isTablet} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
