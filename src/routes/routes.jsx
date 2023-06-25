import { createBrowserRouter } from "react-router-dom";
import { LandingPage, Survey } from "../components";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/survey",
      element: <Survey />,
    },
  ]);