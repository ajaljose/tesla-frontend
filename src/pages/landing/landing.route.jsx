import { lazy } from "react";

const Landing = lazy(() => import("./components/home/Landing"));

export const landingRoutes = [
  {
    path: "landing",
    element: <Landing />,
  },
];