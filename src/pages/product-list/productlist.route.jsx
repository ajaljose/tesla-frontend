import { lazy } from "react";

const ProductList = lazy(() => import("./components/ProductList"));

export const productListRoutes = [
  {
    path: "product-list",
    element: <ProductList />,
  },
];