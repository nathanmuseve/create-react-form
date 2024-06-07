import React from 'react'
import ReactDOM from 'react-dom/client';
import App from "./App";
import Form from './Form';
import Learn from './Learn';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Form />
    <Learn />
  </React.StrictMode>,
);
