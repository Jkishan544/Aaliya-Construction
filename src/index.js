import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter  } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
 

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
    <App />
    </BrowserRouter>
   </React.StrictMode>
);
 