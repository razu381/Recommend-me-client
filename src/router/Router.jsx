import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import Signup from "../components/Signup";
import Login from "../components/Login";
import MyQueries from "../Pages/My Queries/MyQueries";
import MyRecommendations from "../Pages/My recommendations/MyRecommendations";
import Queries from "../Pages/Queries/Queries";
import RecommendationsForMe from "../Pages/Recommendations For Me/RecommendationsForMe";
import AddQuery from "../Pages/Add Query/AddQuery";
import UpdateQuery from "../Pages/Update Query/UpdateQuery";
import PrivateRoute from "./PrivateRoute";
import PrivateRouter from "./PrivateRoute";
import Query from "../Pages/Queries/Query";
import NotFound from "../components/NotFound";

const routersystem = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/my-queries",
        element: (
          <PrivateRoute>
            <MyQueries />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-recommendations",
        element: (
          <PrivateRoute>
            <MyRecommendations />
          </PrivateRoute>
        ),
      },
      {
        path: "/queries",
        element: <Queries />,
      },
      {
        path: "/queries/:id",
        element: <Query />,
      },
      {
        path: "/add-query",
        element: (
          <PrivateRoute>
            <AddQuery />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-query/:id",
        element: (
          <PrivateRoute>
            <UpdateQuery />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://recommend-me-server.vercel.app/queries/${params.id}`),
      },
      {
        path: "/recommendations-for-me",
        element: (
          <PrivateRoute>
            <RecommendationsForMe />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function Router() {
  return <RouterProvider router={routersystem} />;
}

export default Router;
