import { useContext } from 'react';
import { deleteTaskApi } from '../api/task.api';
import { TaskContext } from '../context/ContextTask';

const TaskCard = () => {
	const { task, changeTask } = useContext(TaskContext);
	console.log('ttt', task);
	//console.log('pp', props);
	const handleDelete = async (id) => {
		try {
			const result = await deleteTaskApi(id);
			console.log(result);
			//el que es igual al id lo voy a quitar , el que es distinto lo mantiene
			changeTask(task.filter((task) => task.id !== id));
		} catch (error) {
			return console.log('error pa ', error);
		}
	};

	return (
		<>
			{task.length === 0 ? (
				<h1>no hay tareas</h1>
			) : (
				<ul>
					{task.map((e) => {
						return (
							<li key={e.id}>
								<br />
								titulo : {e.title} ---- descripcion : {e.description}
								<br />
								<button onClick={() => console.log('editar', e.id)}>
									editar
								</button>
								<button onClick={() => handleDelete(e.id)}>eliminar</button>
							</li>
						);
					})}
				</ul>
			)}
		</>
	);
};

export default TaskCard;
