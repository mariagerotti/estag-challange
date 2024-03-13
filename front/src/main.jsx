import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import ErrorPage from "./error-page";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Categories from "./pages/Categories.jsx";
import History from "./pages/History.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <Products />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/categories",
    element: <Categories />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/history",
    element: <History />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
