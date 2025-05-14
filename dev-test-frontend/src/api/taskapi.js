// src/api/taskApi.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/tasks'; // adjust if your backend uses a different port

export const fetchTasks = () => axios.get(API_URL);
export const fetchTaskById = (id) => axios.get(`${API_URL}/${id}`);
export const createTask = (task) => axios.post(API_URL, { task });
export const updateTaskStatus = (id, status) =>
  axios.patch(`${API_URL}/${id}`, { task: { status } });
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
