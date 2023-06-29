import { useContext, useState } from 'react';
import { deleteTaskApi } from '../api/task.api';
import { TaskContext } from '../context/ContextTask';

const TaskCard = ({ tasks }) => {
	const [editandoTarea, cambiarEditandoTarea] = useState(false);

	const title = () => {
		cambiarEditandoTarea(!editandoTarea);
	};

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
				<div>
					{editandoTarea ? (
						<form action="">
							<label htmlFor="">titulo</label>
							<input type="text" />
							<label htmlFor="">descripcion</label>
							<input type="text" />
							<button>actualizar</button>
							<button onClick={() => cambiarEditandoTarea(false)}>
								volver
							</button>
						</form>
					) : (
						<li>
							{tasks.title} --- {tasks.description}
							<button onClick={() => title(!editandoTarea)}>editar</button>
							<button
								onClick={() => {
									handleDelete(tasks.id);
								}}
							>
								eliminar
							</button>
							<br />
							<br />
						</li>
					)}
				</div>

				/* <ul>
				{task.map((e) => {
						return (
							<>
								{editandoTarea ? (
									<form>
										<label htmlFor="">title</label>
										<input type="text" />
										<label htmlFor="">description</label>
										<input type="text" />
										<button>actualizar</button>
									</form>
								) : (
									<li key={e.id}>
										<div>
											<br />
											titulo : {e.title} ---- descripcion : {e.description}
											<br />
											<button onClick={() => title()}>editar</button>
											<button onClick={() => handleDelete(e.id)}>
												eliminar
											</button>
										</div>
									</li>
								)}
							</>
						);
					})}
				</ul> */
			)}
		</>
	);
};

export default TaskCard;
