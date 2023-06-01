import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
//notes  
//contex api should be wrapped around the app and not the index file
// import { DarkModeContext } from './context/darkModeContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <App /> 
  </React.StrictMode>
);


