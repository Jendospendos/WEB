import React from 'react';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
     <HashRouter>
    
      <App />
    
    </HashRouter>
  </React.StrictMode>
)