import { Routes, Route, BrowserRouter } from 'react-router-dom';
import TaskPage from './pages/TaskPage';
import TaskForm from './pages/TaskForm';
import NotFound from './pages/NotFound';
import NavBarPage from './components/NavBarPage';
import { TaskContextProvider } from './context/ContextTask';
import axios from 'axios';
axios.defaults.baseURL = 'https://mern-backend-production-fcc7.up.railway.app/';
const App = () => {
	return (
		<>
			<TaskContextProvider>
				{/* <NavBarPage /> */}
				<BrowserRouter>
					<Routes>
						{<Route path="/" element={<TaskForm />} />}
						{<Route path="*" element={<NotFound />} />}
						{/* {<Route path="/" element={<TaskPage />} />} */}
						{/* {<Route path="/taskForm" element={<TaskForm />} />} */}
						{/* {<Route path="/javier" element={'hola'} />} */}
					</Routes>
				</BrowserRouter>
			</TaskContextProvider>
		</>
	);
};

export default App;
