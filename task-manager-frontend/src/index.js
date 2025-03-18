import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS
import App from './App';

// Create root and render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
