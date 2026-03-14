import AppLayout from "layout/AppLayout";
import { landingRoutes } from "pages/landing/route";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "ui",
    element: <AppLayout />,
    errorElement: <h1>Unexpected error occured</h1>,
    children: [
      {
        path: 'landing',
        children: landingRoutes,
        errorElement: <h1>Unexpected error occured</h1>,
      },
      {
        path: "*",
        element: <h1>Unexpected error occured</h1>,
      },
    ],
  },
]);