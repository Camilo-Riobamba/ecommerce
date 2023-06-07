import React from 'react';
import ReactDOM from 'react-dom/client';

import customTheme from './config/theme.js';

import { ThemeProvider } from '@mui/material';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={customTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
