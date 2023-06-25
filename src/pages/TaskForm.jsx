import { useContext, useState } from 'react';
import { createTaskApi } from '../api/task.api';
import TaskPage from './TaskPage';
import { TaskContext } from '../context/ContextTask';

const TaskForm = () => {
	const [title, changeTitulo] = useState('');
	const [description, changeDescription] = useState('');

	//recibo del contexto global las tareas y la fn para cambiarlas

	const { task, changeTask, createTaskContext } = useContext(TaskContext);

	//funcion para ejecutar formulario

	const onSubmit = async (e) => {
		try {
			e.preventDefault();
			if (title == '') {
				return console.log('title vacio');
			}
			if (description == '') {
				return console.log('description vacio');
			}
			console.log(title, description);
			const obj = {
				title,
				description,
			};
			createTaskContext(obj);
			changeTitulo('');
			changeDescription('');
		} catch (error) {
			return console.log('error', error);
		}
	};
	return (
		<>
			<h1>Task Form JC</h1>
			<form action="" onSubmit={onSubmit}>
				<label htmlFor="title">title</label>
				<input
					type="text"
					id="title"
					name="title"
					value={title}
					onChange={(e) => {
						changeTitulo(e.target.value);
					}}
				/>
				<br />
				<br />
				<label htmlFor="description">description</label>
				<input
					type="text"
					id="description"
					name="description"
					value={description}
					onChange={(e) => {
						changeDescription(e.target.value);
					}}
				/>
				<br />
				<br />
				<button type="submit">crear</button>
			</form>
			<TaskPage />
		</>
	);
};

export default TaskForm;
