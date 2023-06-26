import { createBrowserRouter } from "react-router-dom";
import { LandingPage, SubscribersListing, Survey } from "../components";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/admin/subscribers",
    element: <ProtectedRoute component={SubscribersListing} password={import.meta.env.VITE_SUBSCRIBERS_LISTING_PASSWORD} />,
  },
]);