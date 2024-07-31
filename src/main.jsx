import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './utils/style.css';


import App from './App';
import ErrorPage from './pages/ErrorPage';

import Home from './pages/Home';
import AboutSkater from './pages/AboutSkater';
import AboutSponsor from './pages/AboutSponsor';
import Connect from './pages/Connect';
import SponsorLevels from './pages/SponsorLevels';
import CreateSkater from './pages/CreateSkater';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
      {
        path: '/AboutSkater',
        element: <AboutSkater />,
      },
      {
        path: '/AboutSponsor',
        element: <AboutSponsor />,
      },
      {
        path: '/CreateSkater',
        element: <CreateSkater />,
      },
      {
        path: '/Connect',
        element: <Connect />,
      },
      {
        path: '/SponsorLevels',
        element: <SponsorLevels />,
      }
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
