import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Catalogue from "./Pages/Catalogue";
import Analytics from "./Pages/Analytics";
import Layout from "./Components/Layout";

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
        path: "analytics",
        element: <Analytics />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
