import { createContext, useState } from 'react';
import { createTaskApi, getTaskApi, updateTaskApi } from '../api/task.api';

//creamos el contexto

const TaskContext = createContext();

// variables globales

//creamos el provider

const TaskContextProvider = ({ children }) => {
	//estado de tareas
	const [task, changeTask] = useState([]);

	//fn para traer tareas // la estamos definiendo
	const getTaskApiAsinc = async () => {
		const result = await getTaskApi();
		changeTask(result.data);
	};

	//fn para crear tareas
	const createTaskContext = async (obj) => {
		const result = await createTaskApi(obj);
		console.log('result.data', result);
		changeTask([...task, result.data]);
	};

	//fn para actualizqar tareas

	const updateTaskContext = async (obj, id) => {
		const result = await updateTaskApi(obj, id);
		console.log('result update task ', result.data);
	};

	return (
		<>
			<TaskContext.Provider
				value={{
					task,
					changeTask,
					getTaskApiAsinc,
					createTaskContext,
					updateTaskContext,
				}}
			>
				{children}
			</TaskContext.Provider>
		</>
	);
};

export { TaskContextProvider, TaskContext };
