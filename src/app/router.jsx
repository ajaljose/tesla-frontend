import AppLayout from "layout/AppLayout";
import { carDetailsRoutes } from "pages/car-details/cardetails.route";
import { landingRoutes } from "pages/landing/landing.route";
import { productListRoutes } from "pages/product-list/productlist.route";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "ui",
    element: <AppLayout />,
    errorElement: <h1>Unexpected error occured</h1>,
    children: [
      ...landingRoutes,
      ...productListRoutes,
      ...carDetailsRoutes,
      {
        path: "*",
        element: <h1>Unexpected error occured</h1>,
      },
    ],
  },
]);