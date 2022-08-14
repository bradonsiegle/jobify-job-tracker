import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
	Dashboard,
	Register,
	Landing,
	Error,
	ProtectedRoute,
} from './pages/index';
import {
	AllJobs,
	Profile,
	AddJob,
	SharedLayout,
	Stats,
} from './pages/dashboard';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<ProtectedRoute>
							<SharedLayout />
						</ProtectedRoute>
					}
				>
					<Route index='stats' element={<Stats />} />
					<Route path='all-jobs' element={<AllJobs />} />
					<Route path='add-job' element={<AddJob />} />
					<Route path='profile' element={<Profile />} />
				</Route>
				<Route path='/register' element={<Register />} />
				<Route path='/landing' element={<Landing />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
