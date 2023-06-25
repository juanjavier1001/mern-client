import axios from 'axios';

const createTaskApi = async (task) => {
	return await axios.post('http://localhost:4000/tasks', task);
};

const getTaskApi = async () => {
	return await axios.get('http://localhost:4000/tasks');
};

const deleteTaskApi = async (id) => {
	return await axios.delete(`http://localhost:4000/tasks/${id}`);
};

export { createTaskApi, getTaskApi, deleteTaskApi };
