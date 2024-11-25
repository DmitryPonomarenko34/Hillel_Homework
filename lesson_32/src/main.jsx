import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import AppPage from './pages/App';
import AppLayout from './layouts/AppLayout';
import TodoListPage from './pages/TodoList';
import SwapiPage from './pages/Swapi';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <AppPage />
      },
      {
        path: '/todo',
        element: <TodoListPage />
      },
      {
        path: '/swapi',
        element: <SwapiPage />
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
