import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./Components/Layout";

const Home = lazy(() => import("./Pages/Home"));
const Catalogue = lazy(() => import("./Pages/Catalogue"));
const CategoryBooks = lazy(() => import("./Pages/CategoryBooks"));
const Analytics = lazy(() => import("./Pages/Analytics"));
const NotFound = lazy(() => import("./Pages/NotFound"));

function PageLoader() {
  return (
    <div className="flex items-center justify-center h-64">Loading page...</div>
  );
}
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Suspense fallback={<PageLoader />}>
          <Layout />
        </Suspense>
      ),

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
  ],
  {
    basename: "/Library-Analytics",
  }
);

export default function App() {
  return <RouterProvider router={router} />;
}
