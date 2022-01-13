import ReactThreeFiber from './examples/ReactThreeFiber'
import ModelViewer from './examples/ModelViewer'
import ReactBabylon from './examples/ReactBabylon'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

const App = () => {
	return (
		<>
			<Router>
				<div className='flex py-6 text-lg justify-evenly '>
					<Link to='/react-three-fiber'>React Three Fiber</Link>
					<Link to='/model-viewer'>Model Viewer</Link>
					<Link to='/react-babylon'>React Babylon</Link>
				</div>
				<Routes>
					<Route
						exact
						path='/react-three-fiber'
						element={<ReactThreeFiber />}
					/>
					<Route
						exact
						path='/model-viewer'
						element={<ModelViewer />}
					/>
					<Route
						exact
						path='/react-babylon'
						element={<ReactBabylon />}
					/>
				</Routes>
			</Router>
		</>
	)
}

export default App
