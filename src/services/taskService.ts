import TaskType from '../types/TaskType.ts';
import { apiFetch } from './api.ts';

export const listTasks = () => apiFetch("api/tasks");

export const createTask = (taskData: TaskType) => {
	apiFetch("api/tasks", {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify(taskData)
	});
}

export const updateTask = (id: number, title: string) => {
	apiFetch(`api/tasks/${id}`, {
		method: "PUT",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify({ title })
	});
}


export const deleteTask = (id: number) => {
	apiFetch(`api/tasks/${id}`, {
		method: "DELETE",
	});
}

export const toggleTask = (id: number, isCompleted: boolean) => {

}
