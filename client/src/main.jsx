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
import AllSkaters from './pages/AllSkaters.jsx';
import AllSponsors from './pages/AllSponsors.jsx';
import Connect from "../src/pages/Connect";
import SponsorLevels from "../src/pages/SponsorLevels";
import CreateSkater from "../src/pages/CreateSkater";

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
        path: "/about-skater",
        element: <AboutSkater />,
      },
      {
        path: "/about-sponsor",
        element: <AboutSponsor />,
      },
      {
        path: "/new-skater",
        element: <CreateSkater />,
      },
      {
        path: "/all-skaters",
        element: <AllSkaters />,
      },
      {
        path: "/all-sponsors",
        element: <AllSponsors />,
      },
      {
        path: "/connect",
        element: <Connect />,
      },
      {
        path: "/sponsor-levels",
        element: <SponsorLevels />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
