import { lazy } from "react";

const Landing = lazy(() => import("./components/home/Landing"));
const ContactUs = lazy(() => import("./components/contactus/ContactUs"));
export const landingRoutes = [
  {
    path: "landing",
    element: <Landing />,
  },
  {
    path: "contact-us",
    element: <ContactUs />,
  },
];