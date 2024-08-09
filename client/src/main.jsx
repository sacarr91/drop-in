import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "../src/pages/ErrorPage"
import Signup from "./pages/Signup"
import Home from "../src/pages/Home";
import Connect from "../src/pages/Connect";
import SponsorLevels from "../src/pages/SponsorLevels";
import CreateSkater from "./pages/StartSkating.jsx";
import Login from "./pages/Login";
import AllSponsors from "./pages/AllSponsors";
import Profile from "./pages/Profile";
import AllSkaters from '../src/pages/AllSkaters.jsx';
import HowTo from "./pages/HowTo.jsx";
import Create from "./pages/BecomeSponsor.jsx";
import OurTeam from "./pages/OurTeam.jsx";

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
      },
      {
        path: "/our-team",
        element: <OurTeam />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
