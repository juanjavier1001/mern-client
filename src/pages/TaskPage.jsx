import { useContext, useEffect, useState } from 'react';
import { getTaskApi } from '../api/task.api';
import TaskCard from '../components/TaskCard';
import { TaskContext } from '../context/ContextTask';

const TaskPage = () => {
	const { task, changeTask, getTaskApiAsinc } = useContext(TaskContext);
	//las pongo en el contexto global para q toda la app pueda acceder
	/* const [task, changeTask] = useState([]); */

	useEffect(() => {
		getTaskApiAsinc();
		console.log('task', task);
		console.log('meta crack');
	}, []);
	console.log('task', task);
	return (
		<>
			<h1>Task</h1>
			{task.length === 0 ? (
				<h1>no hay nada</h1>
			) : (
				<div>
					{task.map((e, i) => {
						return <TaskCard e={e} key={i} />;
					})}
				</div>
			)}

			{/* <li>
							<br />
							titulo : {e.title} ---- descripcion : {e.description}
							<br />
							<button>editar </button>
							<button>eliminar </button>
						</li> */}
		</>
	);
};

export default TaskPage;
