import { lazy } from "react";

const Landing = lazy(() => import("./components/Landing"));

export const landingRoutes = [
  {
    path: "landing",
    element: <Landing />,
  },
];