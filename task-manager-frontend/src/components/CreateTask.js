import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';  // Import Link to navigate
import { createTask } from '../services/taskService';  // Import createTask from taskService
import './TaskForm.css';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = { title, description, completed: false };

    // Call createTask from taskService
    createTask(newTask)
      .then(() => {
        navigate('/');  // Redirect to task list after adding a task
      })
      .catch((error) => {
        console.error('Error creating task:', error);
      });
  };

  return (
    <div className="container mt-4">
      <div className="button-container">
        <Link to="/" className="btn btn-custom-back">
          Tasks List
        </Link>
      </div>

      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="mb-3">
          <label className="form-label">Title <span className="required">*</span></label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-custom-save">Save Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
