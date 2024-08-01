import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';

import AboutSkater from "../src/pages/AboutSkater";
import AboutSponsor from "../src/pages/AboutSponsor";
import Connect from "../src/pages/Connect";
import SponsorLevels from "../src/pages/SponsorLevels";
import CreateSkater from "../src/pages/CreateSkater";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/profiles/:profileId',
        element: <Profile />
      }, {
        path: '/me',
        element: <Profile />
      },

      // ----------------------------------
      
      {
        path: "/AboutSkater",
        element: <AboutSkater />,
      },
      {
        path: "/AboutSponsor",
        element: <AboutSponsor />,
      },
      {
        path: "/CreateSkater",
        element: <CreateSkater />,
      },
      {
        path: "/Connect",
        element: <Connect />,
      },
      {
        path: "/SponsorLevels",
        element: <SponsorLevels />,
      },
      {
        path: "/Login",
        element: <Login />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
