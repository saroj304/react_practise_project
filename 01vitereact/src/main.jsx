import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx';


const renderElement = React.createElement(
  'h1',
  { className: 'heading' },
  'hello react developer'
)


createRoot(document.getElementById('root')).render(
renderElement
);