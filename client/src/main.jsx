import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "../src/pages/ErrorPage"
import Signup from "./pages/Signup"
import Home from "../src/pages/Home";
import AboutSkater from "./pages/About.jsx";
import AboutSponsor from "../src/pages/AboutSponsor";
import Connect from "../src/pages/Connect";
import SponsorLevels from "../src/pages/SponsorLevels";
import CreateSkater from "../src/pages/CreateSkater";
import Login from "./pages/Login";
import AllSponsors from "./pages/AllSponsors";
import Profile from "./pages/Profile";
import AllSkaters from '../src/pages/AllSkaters.jsx';

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
      {
        path: "/get-sponsored",
        element: <HowTo />,
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
        path: "/sponsor-levels",
        element: <SponsorLevels />,
      },
      {
        path: "/new-sponsor",
        element: <Create />,
      },
      {
        path: "/all-sponsors",
        element: <AllSponsors />,
      },
      {
        path: "/connect",
        element: <Connect />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
