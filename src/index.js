import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import AppContext from '../src/components/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContext>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AppContext>
);

