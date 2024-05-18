
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import MoreActivities from './pages/components/MoreActivities';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/more',
      element: <MoreActivities />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
