import axios from 'axios';

const createTaskApi = async (task) => {
	return await axios.post('/tasks', task);
};

const getTaskApi = async () => {
	return await axios.get('/tasks');
};

const deleteTaskApi = async (id) => {
	return await axios.delete(`/tasks/${id}`);
};

export { createTaskApi, getTaskApi, deleteTaskApi };
