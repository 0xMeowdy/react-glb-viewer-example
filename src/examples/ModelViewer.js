const ModelViewer = () => {
	return (
		<div className='flex justify-center'>
			<model-viewer
				style={{ width: 900, height: 700 }}
				camera-controls
				alt='GLB model'
				src='./nibiru_241.glb'
			></model-viewer>
		</div>
	)
}

export default ModelViewer
