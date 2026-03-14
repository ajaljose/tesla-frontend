import AppLayout from "layout/AppLayout";
import { landingRoutes } from "pages/landing/landing.route";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "ui",
    element: <AppLayout />,
    errorElement: <h1>Unexpected error occured</h1>,
    children: [
      ...landingRoutes,
      {
        path: "*",
        element: <h1>Unexpected error occured</h1>,
      },
    ],
  },
]);