import { apiFetch } from './api.ts';

export const listTasks = () => apiFetch("tasks");

export const createTask = (title: string) => {
	apiFetch("tasks", {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify({ title })
	});
}

export const updateTask = (id: number, title? : string, isCompleted? : boolean) => {
	apiFetch(`tasks/${id}`, {
		method: "PUT",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify({ title, isCompleted})
	});
}


export const deleteTask = (id: number) => {
	apiFetch(`tasks/${id}`, {
		method: "DELETE",
	});
}
