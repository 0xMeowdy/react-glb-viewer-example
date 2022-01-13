import { ErrorBoundary } from 'react-error-boundary'
import { Canvas, useLoader } from '@react-three/fiber'
import {
	Environment,
	OrbitControls,
	Html,
	useProgress,
	Bounds,
} from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'

// Fallback error boundary if asset doesn't load
function ErrorFallback({ error, resetErrorBoundary }) {
	return (
		<div role='alert'>
			<div className='flex justify-center pt-16 text-xl text-center text-white'>
				Error loading model please try again
			</div>
			<div className='flex justify-center mt-12 '>
				<button
					className='px-6 py-4 bg-red-500'
					onClick={resetErrorBoundary}
				>
					Try Again
				</button>
			</div>
		</div>
	)
}

// import asset
const Model = () => {
	const gltf = useLoader(GLTFLoader, '/nibiru_241.glb')
	return (
		<>
			<primitive object={gltf.scene} scale={0.4} />
		</>
	)
}

// show loader for asset
function Loader() {
	const { progress } = useProgress()
	return (
		<Html center className='text-3xl font-bold tracking-wide '>
			Loading <br />
			{(Math.round(progress * 100) / 100).toFixed(2)}%
		</Html>
	)
}

function ModelThreeFiber() {
	return (
		<ErrorBoundary
			FallbackComponent={ErrorFallback}
			onReset={() => {
				// reset the state of your app so the error doesn't happen again
			}}
		>
			<Canvas
				gl={{ antialias: true }}
				camera={{ fov: 10, position: [0, 10, 600] }}
				style={{ height: '70vh', backgroundColor: '#d6d3d1' }}
			>
				<Suspense fallback={<Loader />}>
					<Bounds clip>
						<Model scale={10} />
					</Bounds>
					<hemisphereLight intensity={1} />
					<OrbitControls target={[0, 40, 0]} />
					<Environment preset='studio' />
				</Suspense>
			</Canvas>
		</ErrorBoundary>
	)
}

export default ModelThreeFiber
