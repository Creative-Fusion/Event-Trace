import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@themesberg/flowbite';
import UserDashboard from './UserDashboard';

ReactDOM.render(
  <React.StrictMode>
    <UserDashboard />
  </React.StrictMode>,
  document.getElementById('root')
);

