import { useContext, useState } from 'react';
import { deleteTaskApi, updateTaskApi } from '../api/task.api';
import { TaskContext } from '../context/ContextTask';

const TaskCard = ({ e }) => {
	const { task, changeTask, updateTaskContext } = useContext(TaskContext);
	console.log('ttt', task);
	console.log('jjccc', e);

	const [editandoTarea, cambiarEditandoTarea] = useState(false);
	const [tituloEditando, changeTituloEditando] = useState(e.title);
	const [descriptionEditando, changeDescriptionEditando] = useState(
		e.description
	);

	/* const handleEditarTarea = (id) => {
		console.log('tareaaaaaaaa' + id);
	};
*/

	const editarTareaSubmit = (id, title, description) => {
		changeTask(
			task.map((e) => {
				if (e.id === id) {
					return { ...e, title, description };
				}
				return e;
			})
		);
	};

	const onSubmit = async (es) => {
		es.preventDefault();
		const obj = {
			title: tituloEditando,
			description: descriptionEditando,
		};

		const result = await updateTaskContext(e.id, obj);
		console.log('resultFront', result);

		editarTareaSubmit(e.id, tituloEditando, descriptionEditando);

		/* task.map((e) => {
			handleEditarTarea(e.id);
		});
 */

		/* changeTask(
			task.map((e) => {
				return {
					...e,
					title: tituloEditando,
					description: descriptionEditando,
				};
			})
		); */
		cambiarEditandoTarea(false);

		console.log(tituloEditando);
		console.log(descriptionEditando);
	};

	const handleEditandoTarea = () => {
		console.log('editando');
		cambiarEditandoTarea(!editandoTarea);
	};

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
			<li>
				{editandoTarea ? (
					<form action="" onSubmit={onSubmit}>
						<label htmlFor="title2">titulo</label>
						<input
							id="title2"
							type="text"
							value={tituloEditando}
							onChange={(e) => changeTituloEditando(e.target.value)}
						/>
						<label htmlFor="description2">descripcion</label>
						<input
							id="description2"
							type="text"
							value={descriptionEditando}
							onChange={(e) => changeDescriptionEditando(e.target.value)}
						/>
						<button onClick={() => cambiarEditandoTarea(false)}>volver</button>
						<button type="submit">actualizar</button>
					</form>
				) : (
					<div>
						titulo : {e.title}--- descripcion : {e.description}
						<button
							onClick={() => {
								handleEditandoTarea();
							}}
						>
							editar
						</button>
						<button onClick={() => handleDelete(e.id)}>eliminar</button>
						<br />
						<br />
					</div>
				)}
			</li>
		</>
	);
};

export default TaskCard;

{
	/* {task.length === 0 ? (
	<h1>no hay tareas</h1>
) : (
	<ul>
		{task.map((e) => {
			return (
				<li key={e.id}>
					{editandoTarea ? (
						<form>
							<label htmlFor="">title</label>
							<input type="text" />
							<label htmlFor="">description</label>
							<input type="text" />
							<button>actualizar</button>
						</form>
					) : (
						<div>
							<br />
							titulo : {e.title} ---- descripcion : {e.description}
							<br />
							<button onClick={() => handleEditandoTarea()}>
								editar
							</button>
							<button onClick={() => handleDelete(e.id)}>eliminar</button>
						</div>
					)}
				</li>
			);
		})}
	</ul>
)} */
}
