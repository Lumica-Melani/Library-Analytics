import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Catalogue from "./Pages/Catalogue";
import CategoryBooks from "./Pages/CategoryBooks";
import Analytics from "./Pages/Analytics";
import Layout from "./Components/Layout";
import NotFound from "./Pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "catalogue",
        element: <Catalogue />,
      },
      {
        path: "catalogue/:genre",
        element: <CategoryBooks />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
