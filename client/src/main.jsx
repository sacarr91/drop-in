import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./utils/style.css";

import App from "./App";
import ErrorPage from "../src/pages/ErrorPage"
import Signup from "./pages/Signup"
import Home from "../src/pages/Home";
import AboutSkater from "../src/pages/AboutSkater";
import AboutSponsor from "../src/pages/AboutSponsor";
import Connect from "../src/pages/Connect";
import SponsorLevels from "../src/pages/SponsorLevels";
import CreateSkater from "../src/pages/CreateSkater";
import Login from "./pages/Login";
import AllSkater from "./pages/AllSkaters";
import AllSponsors from "./pages/AllSponsors";
import Profile from "./pages/Profile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/Signup",
        element: <Signup />
      },
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
        path: '/login',
        element: <Login />
      }, 
      {
        path: "/SkaterList",
        element: <AllSkater />
      },
      {
        path: "/SponsorList",
        element: <AllSponsors />
      },
      {
        path: '/signup',
        element: <Signup />
      }, 
      {
        path: '/profiles/:profileId',
        element: <Profile />
      }, 
      {
        path: '/me',
        element: <Profile />
      }

    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
