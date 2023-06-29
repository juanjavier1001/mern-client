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

const updateTaskApi = async (id, task) => {
	return await axios.put(`/tasks/${id}`, task);
};

export { createTaskApi, getTaskApi, deleteTaskApi, updateTaskApi };
