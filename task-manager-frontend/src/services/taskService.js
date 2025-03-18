import axios from 'axios';
const API_URL = 'http://localhost:5000/tasks'

export const getTasks = async (filters) => {
    try {
      const response = await axios.get(API_URL, { params: filters });
      return response.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  };

export const createTask = async (task) => {
    console.log(task);
    console.log(API_URL)
    const response = await axios.post(API_URL, task);
    return response.data;
  };

  export const updateTask = async (taskId, taskData) => {
    try {
      const response = await axios.put(`${API_URL}/${taskId}`, taskData);
      return response.data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  };
  
  export const deleteTask = async (taskId) => {
    try {
      const response = await axios.delete(`${API_URL}/${taskId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  };