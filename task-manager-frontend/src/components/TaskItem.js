import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const TaskItem = ({ task, setTasks }) => {
  const markCompleted = () => {
    axios.put(`http://localhost:5000/tasks/${task._id}`, { completed: !task.completed })
      .then(() => setTasks(prevTasks => prevTasks.map(t => t._id === task._id ? { ...t, completed: !t.completed } : t)))
      .catch(error => console.error('Error updating task:', error));
  };

  const deleteTask = () => {
    axios.delete(`http://localhost:5000/tasks/${task._id}`)
      .then(() => setTasks(prevTasks => prevTasks.filter(t => t._id !== task._id)))
      .catch(error => console.error('Error deleting task:', error));
  };

  return (
    <div className="task-item">
      <h5>{task.title}</h5>
      <p>{task.description}</p>
      <p><strong>{task.completed ? 'Completed' : 'Pending'}</strong></p>
      <Button onClick={markCompleted} variant={task.completed ? 'success' : 'warning'}>
        {task.completed ? 'Unmark as Completed' : 'Mark as Completed'}
      </Button>
      <Button onClick={deleteTask} variant="danger">Delete</Button>
    </div>
  );
};

export default TaskItem;
