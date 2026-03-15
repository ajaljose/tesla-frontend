import { lazy } from "react";

const CarDetails = lazy(() => import("./components/car-info/CarDetails"));

export const carDetailsRoutes = [
  {
    path: "cars/:id",
    element: <CarDetails />,
  },
];