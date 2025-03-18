import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import these components
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/new-task" element={<CreateTask />} />
      </Routes>
    </Router>
  );
}

export default App;
