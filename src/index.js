import React from 'react';
import reactDOM from 'react-dom/client';
import App from '../src/App';

const root = reactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </>
);
