import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppLayout from './layouts/AppLayout';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <App />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
