import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.scss';

const el = document.getElementById('app');

createRoot(el).render(<App />);