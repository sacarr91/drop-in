import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./utils/style.css";

import App from "./App";
import ErrorPage from "../client/src/pages/ErrorPage";

import Home from "../client/src/pages/Home";
import AboutSkater from "../client/src/pages/AboutSkater";
import AboutSponsor from "../client/src/pages/AboutSponsor";
import Connect from "../client/src/pages/Connect";
import SponsorLevels from "../client/src/pages/SponsorLevels";
import CreateSkater from "../client/src/pages/CreateSkater";

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
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
