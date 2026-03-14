import { lazy } from "react";

const Landing = lazy(() => import("./Landing"));

export const landingRoutes = [
  {
    path: "", // change to correct url accordingly
    element: <Landing />,
  },
];