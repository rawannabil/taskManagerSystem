import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTasks, deleteTask, updateTask } from '../services/taskService';  
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({
    title: '',
    description: '',
    completed: '', 
  });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks(filters);  
        setTasks(response.Response.tasks);  
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, [filters]); 

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks(tasks.filter((task) => task._id !== taskId)); 
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleComplete = async (taskId) => {
    try {
      await updateTask(taskId, { completed: true });
      setTasks(
        tasks.map((task) =>
          task._id === taskId ? { ...task, completed: true } : task
        )
      );
    } catch (error) {
      console.error('Error marking task as complete:', error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      title: '',
      description: '',
      completed: '',
    });
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-4">
        <h2>Task List</h2>
        <Link to="/new-task" className="btn btn-custom-gray">
          Add New Task
        </Link>
      </div>

      <div className="filters-box p-4 mb-4">
        <div className="d-flex">
          <div className="filter-row">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={filters.title}
              onChange={handleFilterChange}
              placeholder="Search by title"
              className="form-control"
            />
          </div>

          <div className="filter-row">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={filters.description}
              onChange={handleFilterChange}
              placeholder="Search by description"
              className="form-control"
            />
          </div>
        </div>

        <div className="filter-row">
          <label htmlFor="completed" className="form-label">
            Completed
          </label>
          <select
            id="completed"
            name="completed"
            value={filters.completed}
            onChange={handleFilterChange}
            className="form-select"
          >
            <option value="">All</option>
            <option value="true">Completed</option>
            <option value="false">Incomplete</option>
          </select>
        </div>

        <div className="filter-row mt-3">
          <button onClick={clearFilters} className="btn btn-secondary">
            Clear Filters
          </button>
        </div>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Completed</th>
            <th>Mark as Complete</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id} 
              className={task.completed ? 'completed' : 'incomplete'}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.completed ? 'Yes' : 'No'}</td>
              <td>
                {!task.completed && (
                  <button
                    onClick={() => handleComplete(task._id)} 
                    className="btn btn-success"
                  >
                    Mark as Complete
                  </button>
                )}
              </td>
              <td>
                <button
                  onClick={() => handleDelete(task._id)} 
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
