import { apiFetch } from './api.ts';

export const listTasks = () => apiFetch("api/tasks");

export const createTask = (taskData) => {
	apiFetch("api/tasks", {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify(taskData)
	});
}

export const updateTask = (id, updatedTask) => {
	apiFetch(`api/tasks/${id}`, {
		method: "PUT",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify(updatedTask)
	});
}


export const deleteTask = (id) => {
	apiFetch(`api/tasks/${id}`, {
		method: "DELETE",
	});
}
